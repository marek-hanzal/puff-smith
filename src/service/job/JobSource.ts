import {IJobSource} from "@/puff-smith/service/job/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {IJobProcessor, IJobStatus} from "@leight-core/api";
import {Logger, pageOf, Source} from "@leight-core/server";
import {singletonOf, toPercent} from "@leight-core/utils";
import delay from "delay";
import PQueue from "p-queue";

export const JobSource = (): IJobSource => {
	const userSource = singletonOf(() => UserSource().ofSource(source));

	const source: IJobSource = Source<IJobSource>({
		name: "job",
		prisma,
		map: async job => job ? ({
			...job,
			params: job.params && JSON.parse(job.params)
		}) : null,
		source: {
			create: async job => source.prisma.job.create({
				data: {
					...job,
					params: job.params && JSON.stringify(job.params),
					created: new Date(),
				}
			}),
			count: async ({filter}) => source.prisma.job.count({
				where: filter,
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.job.findMany({
				where: filter,
				orderBy,
				...pageOf(query),
			}),
		},
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
				const jobSource = JobSource().withUser(await userSource().asUser(userId));
				const job = await jobSource.mapper.map(await jobSource.create({
					userId,
					name,
					params,
				}));
				const labels = {name, jobId: job.id};
				logger = logger.child({labels, jobId: labels.jobId, name});
				const jobProgress = jobSource.createProgress(job.id);
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
	});

	return source;
};
