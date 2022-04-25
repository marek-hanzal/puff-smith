import {Agenda} from "@/puff-smith/agenda/agenda";
import {IJobService} from "@/puff-smith/service/job/interface";
import prisma from "@/puff-smith/service/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";
import {toPercent} from "@leight-core/client";
import {Logger, RepositoryService} from "@leight-core/server";

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
			logger.debug("Scheduling agenda job", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
			await (await Agenda()).now(name, job);
			logger.debug("Scheduling done", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
			return await jobService.map(job);
		});
	},
	execute: async (name, job) => {
		const jobService = JobService(prismaClient);
		let logger = Logger(name);
		const labels = {jobId: job.attrs.data?.id};
		logger = logger.child({labels, jobId: labels.jobId});
		const theJob = job.attrs.data;
		if (!theJob) {
			logger.error(`Missing data (job) for [${name}] job.`);
			return;
		}
		const jobProgress = jobService.createProgress(theJob.id);
	}
});
