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
			progress: job.progress?.toNumber(),
			successRatio: job.successRatio?.toNumber(),
			failureRatio: job.failureRatio?.toNumber(),
			skipRatio: job.skipRatio?.toNumber(),
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
		let _result: IJobStatus | undefined;
		let _total: number = 0;
		let _processed: number = 0;
		let _success = 0;
		let _failure = 0;
		let _skip = 0;
		return {
			jobId,
			result: () => _result,
			success: () => _success,
			failure: () => _failure,
			skip: () => _skip,
			setTotal: total => request.prisma.job.update({
				data: {
					total: (_total = total),
				},
				where: {
					id: jobId,
				}
			}),
			setStatus: status => request.prisma.job.update({
				data: {
					status,
					started: ["RUNNING"].includes(status) ? new Date() : undefined,
					finished: ["REVIEW", "SUCCESS", "FAILURE"].includes(status) ? new Date() : undefined,
				},
				where: {
					id: jobId,
				},
			}),
			onSuccess: () => request.prisma.job.update({
				data: {
					success: ++_success,
					successRatio: toPercent(_success, _total),
					progress: toPercent(++_processed, _total),
				},
				where: {
					id: jobId,
				}
			}),
			onFailure: () => request.prisma.job.update({
				data: {
					failure: ++_failure,
					failureRatio: toPercent(_failure, _total),
					progress: toPercent(++_processed, _total),
				},
				where: {
					id: jobId,
				}
			}),
			onSkip: () => request.prisma.job.update({
				data: {
					skip: ++_skip,
					skipRatio: toPercent(_skip, _total),
					progress: toPercent(++_processed, _total),
				},
				where: {
					id: jobId,
				}
			}),
			setResult: result => {
				_result = result;
			},
			isReview: () => _failure > 0 || _skip > 0,
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
	schedule: async (name, params, userId) => {
		const logger = Logger("job");
		logger.info("New job", {labels: {job: name}, params, userId});
		const jobService = JobService({...request, prisma});
		const job = await jobService.create({
			userId,
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
					progress: async callback => {
						try {
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
				await jobProgress.setStatus("FAILURE");
			}
		};
	}
});
