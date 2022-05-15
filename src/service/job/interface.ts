import {IServiceCreate} from "@/puff-smith/service";
import {IEndpointParams, IJob, IJobHandlerRequest, IJobProgress, IQuery, IQueryFilter, IRepositoryService} from "@leight-core/api";
import {Job, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IJobCreate {
	userId?: string | null;
	name: string;
	params?: any;
}

export interface IJobSchedule<TJobParams> {
	name: string;
	params: TJobParams;
}

export interface IJobScheduleAt<TJobParams> {
	name: string;
	at: string | Date;
	params: TJobParams;
}

export interface IJobQuery extends IQuery<Prisma.JobWhereInput, Prisma.JobOrderByWithRelationInput> {
}

export interface IJobFetchProps {
	job: IJob;
}

export interface IJobFetchQuery extends ParsedUrlQuery {
	jobId: string;
}

export interface IJobServiceCreate extends IServiceCreate {
}

export interface IJobService extends IRepositoryService<IJobCreate, Job, IJob, IJobQuery, IJobFetchProps, IJobFetchQuery> {
	createProgress(jobId: string): IJobProgress;

	commit(): Promise<any>;

	cleanup(filter?: IQueryFilter<IJobQuery>): Promise<any>;

	schedule<TParams = void>(schedule: IJobSchedule<TParams>): Promise<IJob<TParams>>;

	scheduleAt<TParams = void>(scheduleAt: IJobScheduleAt<TParams>): Promise<IJob<TParams>>;

	async<TParams>(name: string, params: IEndpointParams<TParams, IJob<TParams>>, handler: (request: IJobHandlerRequest<TParams>) => Promise<any>): Promise<any>;
}
