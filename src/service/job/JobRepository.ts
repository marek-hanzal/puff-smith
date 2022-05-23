import {IJobCreate, IJobQuery, IJobRepository} from "@/puff-smith/service/job/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJob, IJobProcessor, IJobStatus} from "@leight-core/api";
import {Logger, Source} from "@leight-core/server";
import {toPercent} from "@leight-core/utils";
import {Job} from "@prisma/client";
import delay from "delay";
import PQueue from "p-queue";

export const JobRepository = (): IJobRepository => {
	const source = Source<IJobCreate, Job, IJob, IJobQuery>({
		name: "job",
		get source() {
			return source.prisma.job;
		},
		map: async job => ({
			...job,
			params: job.params && JSON.parse(job.params)
		}),
		create: async job => source.prisma.job.create({
			data: {
				...job,
				params: job.params && JSON.stringify(job.params),
				created: new Date(),
			}
		}),
	});

	return {
		source,
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
				setTotal: total => source.prisma.job.update({
					data: {
						total: ($total = total),
					},
					where: {
						id: jobId,
					}
				}),
				setStatus: status => source.prisma.job.update({
					data: {
						status,
						started: ["RUNNING"].includes(status) ? new Date() : undefined,
						finished: ["REVIEW", "SUCCESS", "FAILURE"].includes(status) ? new Date() : (["RUNNING"].includes(status) ? null : undefined),
					},
					where: {
						id: jobId,
					},
				}),
				onSuccess: () => source.prisma.job.update({
					data: {
						success: ++$success,
						successRatio: toPercent($success, $total),
						progress: toPercent(++$processed, $total),
					},
					where: {
						id: jobId,
					}
				}),
				onFailure: () => source.prisma.job.update({
					data: {
						failure: ++$failure,
						failureRatio: toPercent($failure, $total),
						progress: toPercent(++$processed, $total),
					},
					where: {
						id: jobId,
					}
				}),
				onSkip: () => source.prisma.job.update({
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
		commit: () => source.prisma.job.updateMany({
			where: {
				status: {
					in: ["REVIEW", "FAILURE", "SUCCESS"],
				}
			},
			data: {
				status: "DONE",
			}
		}),
		cleanup: filter => source.prisma.job.deleteMany(filter && {
			where: filter,
		}),
		processor: (name, handler, queue) => {
			const $queue = (queue || (options => new PQueue(options)))({
				autoStart: true,
				concurrency: 5,
				throwOnTimeout: true,
				interval: 5 * 1000,
				intervalCap: 5,
				carryoverConcurrencyCount: true,
			});
			const async: IJobProcessor["async"] = async (params, userId, queue) => {
				let logger = Logger(name);
				const jobRepository = JobRepository();
				jobRepository.source.withUserId(userId);
				const job = await jobRepository.source.mapper.map(await jobRepository.source.create({
					userId,
					name,
					params,
				}));
				const labels = {name, jobId: job.id};
				logger = logger.child({labels, jobId: labels.jobId, name});
				const jobProgress = jobRepository.createProgress(job.id);
				setTimeout(() => $queue.add(() => new Promise(async (resolve, reject) => {
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
							progress: async (callback, $sleep = 0) => {
								try {
									await delay($sleep);
									const result = await callback();
									await jobProgress.onSuccess();
									return result;
								} catch (e) {
									await jobProgress.onFailure();
									if (e instanceof Error) {
										logger.error(e.message);
										logger.error(e.stack);
									}
								}
							},
						}));
						await jobProgress.setStatus(jobProgress.result() || (jobProgress.isReview() ? "REVIEW" : "SUCCESS"));
					} catch (e) {
						logger.error(`Job [${name}] failed.`);
						if (e instanceof Error) {
							logger.error(e.message);
							logger.error(e.stack);
						}
						await jobProgress.setStatus("FAILURE");
						reject(e);
					}
				}), queue), 0);
				return job;
			};

			return {
				request: async ({request: params, user}) => async(params, user.required()),
				async,
				handler,
			};
		},
	};
};
