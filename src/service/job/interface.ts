import {
	IJob,
	IJobHandlerRequest,
	IJobProcessor,
	IJobProgress,
	IQuery,
	IQueryFilter,
	ISource
}                       from "@leight-core/api";
import {
	Job,
	Prisma
}                       from "@prisma/client";
import PQueue           from "p-queue";
import {ParsedUrlQuery} from "querystring";

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

export interface IJobFetchParams extends ParsedUrlQuery {
	jobId: string;
}

export type IJobEntity = Job;

export interface IJobSource extends ISource<IJobCreate, IJobEntity, IJob, IJobQuery, IJobFetchProps, IJobFetchParams> {
	createProgress(jobId: string): IJobProgress;

	commit(): Promise<any>;

	cleanup(filter?: IQueryFilter<IJobQuery>): Promise<any>;

	processor<TParams>(name: string, handler: (request: IJobHandlerRequest<TParams>) => Promise<any>, queue?: (options?: ConstructorParameters<typeof PQueue>[0]) => PQueue): IJobProcessor<TParams>;
}
