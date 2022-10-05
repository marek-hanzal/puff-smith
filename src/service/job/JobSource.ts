import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IJobQuery, IJobSource} from "@/puff-smith/service/job/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobHandlerRequest, IJobProcessor, IJobProgress, IJobStatus, IQueryFilter, ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery} from "@leight-core/api";
import {Logger, pageOf} from "@leight-core/server";
import {toPercent} from "@leight-core/utils";
import delay from "delay";
import PQueue from "p-queue";

export const JobSource = () => new JobSourceClass();

export class JobSourceClass extends ContainerSource<IJobSource> implements IJobSource {
	constructor() {
		super("job", prisma);
	}

	async map(job: ISourceEntity<IJobSource>): Promise<ISourceItem<IJobSource>> {
		return {
			...job,
			params: job.params && JSON.parse(job.params)
		};
	}

	async $create(job: ISourceCreate<IJobSource>): Promise<ISourceEntity<IJobSource>> {
		return this.prisma.job.create({
			data: {
				...job,
				success: 0,
				successRatio: 0,
				failure: 0,
				failureRatio: 0,
				skip: 0,
				skipRatio: 0,
				params: job.params && JSON.stringify(job.params),
				created: new Date(),
			}
		});
	}

	async $count({filter}: ISourceQuery<IJobSource>): Promise<number> {
		return this.prisma.job.count({
			where: filter,
		});
	}

	async $query({filter, orderBy, ...query}: ISourceQuery<IJobSource>): Promise<ISourceEntity<IJobSource>[]> {
		return this.prisma.job.findMany({
			where: filter,
			orderBy,
			...pageOf(query),
		});
	}

	async cleanup(filter?: IQueryFilter<IJobQuery>): Promise<any> {
		return this.prisma.job.deleteMany(filter && {
			where: filter,
		});
	}

	async commit(): Promise<any> {
		return this.prisma.job.updateMany({
			where: {
				status: {
					in: ["REVIEW", "FAILURE", "SUCCESS"],
				}
			},
			data: {
				status: "DONE",
			}
		});
	}

	createProgress(jobId: string): IJobProgress {
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
			setTotal: total => this.prisma.job.update({
				data: {
					total: ($total = total),
				},
				where: {
					id: jobId,
				}
			}),
			setStatus: status => this.prisma.job.update({
				data: {
					status,
					started: ["RUNNING"].includes(status) ? new Date() : undefined,
					finished: ["REVIEW", "SUCCESS", "FAILURE"].includes(status) ? new Date() : (["RUNNING"].includes(status) ? null : undefined),
				},
				where: {
					id: jobId,
				},
			}),
			onSuccess: () => this.prisma.job.update({
				data: {
					success: ++$success,
					successRatio: toPercent($success, $total),
					progress: toPercent(++$processed, $total),
				},
				where: {
					id: jobId,
				}
			}),
			onFailure: () => this.prisma.job.update({
				data: {
					failure: ++$failure,
					failureRatio: toPercent($failure, $total),
					progress: toPercent(++$processed, $total),
				},
				where: {
					id: jobId,
				}
			}),
			onSkip: () => this.prisma.job.update({
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
	}

	processor<TParams>(name: string, handler: (request: IJobHandlerRequest<TParams>) => Promise<any>, queue?: (options?: ConstructorParameters<typeof PQueue>[0]) => PQueue): IJobProcessor<TParams> {
		const $queue = (queue || (options => new PQueue(options)))({
			autoStart: true,
			concurrency: 5,
			throwOnTimeout: true,
			interval: 5 * 1000,
			intervalCap: 5,
			carryoverConcurrencyCount: true,
		});
		const async: IJobProcessor["async"] = async (params, userId, queue) => this.container.useUserSource(async userSource => {
			return this.container.useJobSource(async jobSource => {
				jobSource.withUser(await userSource.asUser(userId));
				let logger = Logger(name);
				const job = await jobSource.map(await jobSource.create({
					userId,
					name,
					params,
				}));
				const labels = {name, jobId: job.id};
				logger = logger.child({labels, jobId: labels.jobId, name});
				const jobProgress = jobSource.createProgress(job.id);
				setTimeout(() => $queue.add(() => new Promise(async (resolve, reject) => {
					try {
						await prisma.job.findUniqueOrThrow({where: {id: job.id}});
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
			});
		});

		return {
			request: async ({request: params, user}) => async(params, user.required()),
			async,
			handler,
		};
	}
}
