import {IServiceCreate} from "@/puff-smith/service";
import {IJob, IJobProgress, IQuery, IQueryFilter, IRepositoryService} from "@leight-core/api";
import {Job, Prisma} from "@prisma/client";
import {Processor} from "agenda";
import {ParsedUrlQuery} from "querystring";
import {Logger} from "winston";

export interface IJobCreate {
	userId?: string | null;
	name: string;
	params?: any;
}

export interface IJobQuery extends IQuery<Prisma.JobWhereInput, Prisma.JobOrderByWithRelationInput> {
}

export interface IJobFetchProps {
	job: IJob;
}

export interface IJobFetchQuery extends ParsedUrlQuery {
	jobId: string;
}

export interface IJobHandlerRequest<TParams> {
	name: string;
	jobService: IJobService;
	job: IJob<TParams>;
	jobProgress: IJobProgress;
	logger: Logger;

	progress<TResult>(callback: () => Promise<TResult>): Promise<TResult | void>;
}

export interface IJobServiceCreate extends IServiceCreate {
}

export interface IJobService extends IRepositoryService<IJobCreate, Job, IJob, IJobQuery, IJobFetchProps, IJobFetchQuery> {
	createProgress(jobId: string): IJobProgress;

	commit(): Promise<any>;

	cleanup(filter?: IQueryFilter<IJobQuery>): Promise<any>;

	schedule<TParams = void>(name: string, params: TParams, userId?: string | null): Promise<IJob<TParams>>;

	handle<TParams = void>(name: string, handler: (request: IJobHandlerRequest<TParams>) => Promise<boolean | void>): Processor;
}
