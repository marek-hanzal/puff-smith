import {ServiceCreate} from "@/puff-smith/service";
import {IJobService, IJobServiceCreate} from "@/puff-smith/service/job/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobProcessor, IJobStatus} from "@leight-core/api";
import {sleep, toPercent} from "@leight-core/client";
import {Logger, RepositoryService} from "@leight-core/server";

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
	processor: (name, handler) => {
		const async: IJobProcessor["async"] = async (params, userId) => {
			let logger = Logger(name);
			const jobService = JobService(ServiceCreate(userId));
			const job = await jobService.map(await jobService.create({
				userId,
				name,
				params,
			}));
			const labels = {name, jobId: job.id};
			logger = logger.child({labels, jobId: labels.jobId, name});
			const jobProgress = jobService.createProgress(job.id);
			setTimeout(() => new Promise(async (resolve, reject) => {
				try {
					await prisma.job.findUnique({where: {id: job.id}, rejectOnNotFound: true});
					await jobProgress.setStatus("RUNNING");
					resolve(await handler({
						name,
						job,
						params: job.params,
						userId: job.userId,
						jobProgress,
						logger,
						progress: async (callback, $sleep) => {
							try {
								await sleep($sleep);
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
					}));
					await jobProgress.setStatus(jobProgress.result() || (jobProgress.isReview() ? "REVIEW" : "SUCCESS"));
				} catch (e) {
					logger.error(`Job [${name}] failed.`);
					if (e instanceof Error) {
						logger.error(e.message);
					}
					await jobProgress.setStatus("FAILURE");
					reject(e);
				}
			}), 0);
			return job;
		};

		return {
			request: async ({request: params, toUserId}) => async(params, toUserId()),
			async,
			handler,
		};
	},
});
