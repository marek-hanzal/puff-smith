import {ContainerClass} from "@/puff-smith/service/Container";
import {
	IJob,
	IJobHandlerRequest,
	IJobProcessor,
	IJobProgress,
	IQuery,
	ISource,
	QueryInfer
}                       from "@leight-core/api";
import {
	Job,
	Prisma
}                       from "@prisma/client";
import PQueue           from "p-queue";

export interface IJobCreate {
	userId?: string | null;
	name: string;
	params?: any;
}

export interface IJobQuery extends IQuery<Prisma.JobWhereInput, Prisma.JobOrderByWithRelationInput> {
}

export type IJobEntity = Job;

export interface IJobSource extends ISource<//
	ContainerClass,
	IJobEntity,
	IJob,
	IJobQuery,
	IJobCreate> {
	createProgress(jobId: string): IJobProgress;

	commit(): Promise<any>;

	cleanup(filter?: QueryInfer.Filter<IJobQuery>): Promise<any>;

	processor<TParams>(name: string, handler: (request: IJobHandlerRequest<TParams>) => Promise<any>, queue?: (options?: ConstructorParameters<typeof PQueue>[0]) => PQueue): IJobProcessor<TParams>;
}
