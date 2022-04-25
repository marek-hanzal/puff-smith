import {Agenda} from "@/puff-smith/agenda/agenda";
import {IJobService} from "@/puff-smith/service/job/interface";
import prisma from "@/puff-smith/service/prisma";
import {IJob, IPrismaClientTransaction} from "@leight-core/api";
import {toPercent} from "@leight-core/client";
import {Logger, RepositoryService} from "@leight-core/server";
import {Job} from "agenda";

export const JobService = (prismaClient: IPrismaClientTransaction = prisma): IJobService => ({
	...RepositoryService<IJobService>({
		name: "job",
		source: prismaClient.job,
		mapper: async job => ({
			...job,
			progress: job.progress?.toNumber(),
			successRatio: job.successRatio?.toNumber(),
			failureRatio: job.failureRatio?.toNumber(),
			skipRatio: job.skipRatio?.toNumber(),
			params: job.params && JSON.parse(job.params)
		}),
		create: job => prismaClient.job.create({
			data: {
				...job,
				params: job.params && JSON.stringify(job.params),
				created: new Date(),
			}
		}),
	}),
	createProgress: jobId => {
		let _total: number = 0;
		let _processed: number = 0;
		let _success = 0;
		let _failure = 0;
		let _skip = 0;
		return {
			jobId,
			success: _success,
			failure: _failure,
			skip: _skip,
			total: total => prismaClient.job.update({
				data: {
					total: (_total = total),
				},
				where: {
					id: jobId,
				}
			}),
			status: status => prismaClient.job.update({
				data: {
					status,
					finished: ["REVIEW", "SUCCESS", "FAILURE"].includes(status) ? new Date() : undefined,
				},
				where: {
					id: jobId,
				}
			}),
			onSuccess: () => prismaClient.job.update({
				data: {
					success: ++_success,
					successRatio: toPercent(_success, _total),
					progress: toPercent(++_processed, _total),
				},
				where: {
					id: jobId,
				}
			}),
			onFailure: () => prismaClient.job.update({
				data: {
					failure: ++_failure,
					failureRatio: toPercent(_failure, _total),
					progress: toPercent(++_processed, _total),
				},
				where: {
					id: jobId,
				}
			}),
			onSkip: () => prismaClient.job.update({
				data: {
					skip: ++_skip,
					skipRatio: toPercent(_skip, _total),
					progress: toPercent(++_processed, _total),
				},
				where: {
					id: jobId,
				}
			}),
		};
	},
	commit: () => prismaClient.job.updateMany({
		where: {
			status: {
				in: ["REVIEW", "FAILURE", "SUCCESS"],
			}
		},
		data: {
			status: "DONE",
		}
	}),
	cleanup: filter => prismaClient.job.deleteMany(filter && {
		where: filter,
	}),
	schedule: async (name, params, userId) => {
		const logger = Logger("job");
		logger.info("New job", {labels: {job: name}, params, userId});
		return prisma.$transaction(async prismaClient => {
			const jobService = JobService(prismaClient);
			const job = await jobService.create({
				userId,
				name,
				params,
			});
			const theJob = await jobService.map(job);
			logger.debug("Scheduling agenda job", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
			await (await Agenda()).now(name, theJob);
			logger.debug("Scheduling done", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
			return theJob;
		});
	},
	handle: (name, handler) => {
		let logger = Logger(name);
		const jobService = JobService(prismaClient);
		return async (job: Job<any>) => {
			const theJob = job.attrs.data as IJob;
			if (!theJob) {
				logger.error(`Missing data (job) for [${name}] job.`);
				return;
			}
			const labels = {name, jobId: theJob.id};
			logger = logger.child({labels, jobId: labels.jobId, name});
			const jobProgress = jobService.createProgress(theJob.id);
			logger.info(`Marking job [${name}] as running`);
			await jobProgress.status("RUNNING");
			try {
				if (await handler({
					job: theJob,
					jobProgress,
					jobService,
					name,
					logger,
				}) === undefined) {
					await jobProgress.status(((jobProgress.failure || 0 > 0) || (jobProgress.skip || 0 > 0) ? "REVIEW" : "SUCCESS"));
				}
			} catch (e) {
				if (e instanceof Error) {
					logger.error(`Job [${name}] failed.`, {error: e.message});
				}
				await jobProgress.status("FAILURE");
			}
		};
	}
});
