import {ServiceCreate} from "@/puff-smith/service";
import {IJobService, IJobServiceCreate} from "@/puff-smith/service/job/interface";
import {Agenda} from "@/puff-smith/service/side-effect/agenda";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJob, IJobStatus} from "@leight-core/api";
import {toPercent} from "@leight-core/client";
import {Logger, RepositoryService} from "@leight-core/server";
import {Job} from "agenda";

export const JobService = (request: IJobServiceCreate = ServiceCreate()): IJobService => ({
	...RepositoryService<IJobService>({
		name: "job",
		source: request.prisma.job,
		mapper: async job => ({
			...job,
			params: job.params && JSON.parse(job.params)
		}),
		create: job => request.prisma.job.create({
			data: {
				...job,
				params: job.params && JSON.stringify(job.params),
				created: new Date(),
			}
		}),
	}),
	createProgress: jobId => {
		let $result: IJobStatus | undefined;
		let $total: number = 0;
		let $processed: number = 0;
		let $success = 0;
		let $failure = 0;
		let $skip = 0;
		return {
			jobId,
			result: () => $result,
			success: () => $success,
			failure: () => $failure,
			skip: () => $skip,
			setTotal: total => request.prisma.job.update({
				data: {
					total: ($total = total),
				},
				where: {
					id: jobId,
				}
			}),
			setStatus: status => request.prisma.job.update({
				data: {
					status,
					started: ["RUNNING"].includes(status) ? new Date() : undefined,
					finished: ["REVIEW", "SUCCESS", "FAILURE"].includes(status) ? new Date() : (["RUNNING"].includes(status) ? null : undefined),
				},
				where: {
					id: jobId,
				},
			}),
			onSuccess: () => request.prisma.job.update({
				data: {
					success: ++$success,
					successRatio: toPercent($success, $total),
					progress: toPercent(++$processed, $total),
				},
				where: {
					id: jobId,
				}
			}),
			onFailure: () => request.prisma.job.update({
				data: {
					failure: ++$failure,
					failureRatio: toPercent($failure, $total),
					progress: toPercent(++$processed, $total),
				},
				where: {
					id: jobId,
				}
			}),
			onSkip: () => request.prisma.job.update({
				data: {
					skip: ++$skip,
					skipRatio: toPercent($skip, $total),
					progress: toPercent(++$processed, $total),
				},
				where: {
					id: jobId,
				}
			}),
			setResult: result => {
				$result = result;
			},
			isReview: () => $failure > 0 || $skip > 0,
		};
	},
	commit: () => request.prisma.job.updateMany({
		where: {
			status: {
				in: ["REVIEW", "FAILURE", "SUCCESS"],
			}
		},
		data: {
			status: "DONE",
		}
	}),
	cleanup: filter => request.prisma.job.deleteMany(filter && {
		where: filter,
	}),
	schedule: async ({name, params}) => {
		const userId = request.userService.getOptionalUserId();
		const logger = Logger("job");
		logger.info("New job", {labels: {job: name}, params, userId});
		const jobService = JobService({...request, prisma});
		const job = await jobService.create({
			userId: request.userService.getOptionalUserId(),
			name,
			params,
		});
		const theJob = await jobService.map(job);
		logger.debug("Scheduling agenda job", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
		try {
			await (await Agenda()).now(name, theJob);
			logger.debug("Scheduling done", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
		} catch (e) {
			await jobService.createProgress(theJob.id).setStatus("FAILURE");
			logger.error("Scheduling failed", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
		}
		return theJob;
	},
	scheduleAt: async ({params, name, at: schedule}) => {
		const userId = request.userService.getOptionalUserId();
		const logger = Logger("job");
		logger.info(`Scheduling new job at [${schedule}].`, {labels: {job: name}, params, userId});
		const jobService = JobService({...request, prisma});
		const job = await jobService.create({
			userId,
			name,
			params,
		});
		const theJob = await jobService.map(job);
		logger.debug("Scheduling agenda job", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
		try {
			await (await Agenda()).schedule(schedule, name, theJob);
			logger.debug("Scheduling done", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
		} catch (e) {
			await jobService.createProgress(theJob.id).setStatus("FAILURE");
			logger.error("Scheduling failed", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
		}
		return theJob;
	},
	handle: (name, handler) => {
		let logger = Logger(name);
		const jobService = JobService(request);
		return async (job: Job<any>) => {
			const theJob = job.attrs.data as IJob;
			if (!theJob) {
				logger.error(`Missing data (job) for [${name}] job.`);
				return;
			}
			logger.debug("Preparing job", {job: theJob});
			const labels = {name, jobId: theJob.id};
			logger = logger.child({labels, jobId: labels.jobId, name});
			const jobProgress = jobService.createProgress(theJob.id);
			logger.info(`Marking job [${name}] as running`);
			try {
				await prisma.job.findUnique({where: {id: theJob.id}, rejectOnNotFound: true});
				await jobProgress.setStatus("RUNNING");
				await handler({
					job: theJob,
					jobProgress,
					jobService,
					name,
					logger,
					progress: async (callback, sleep) => {
						try {
							sleep && (await new Promise(resolve => {
								setTimeout(() => resolve(true), sleep);
							}));
							const result = await callback();
							await jobProgress.onSuccess();
							return result;
						} catch (e) {
							await jobProgress.onFailure();
							if (e instanceof Error) {
								logger.error(e.message);
							}
						}
					},
				});
				await jobProgress.setStatus(jobProgress.result() || (jobProgress.isReview() ? "REVIEW" : "SUCCESS"));
			} catch (e) {
				logger.error(`Job [${name}] failed.`);
				if (e instanceof Error) {
					logger.error(e.message);
				}
				console.error(e);
				await jobProgress.setStatus("FAILURE");
			}
		};
	}
});
