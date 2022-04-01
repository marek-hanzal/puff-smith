import {IQuery} from "@leight-core/api";
import {Job, Prisma} from '@prisma/client';

export type IJobs = Promise<Job[]>;

export type IJobFilter = Prisma.JobWhereInput;

export type IJobOrderBy = Prisma.JobOrderByWithRelationInput;

export interface IJobQuery extends IQuery<IJobFilter, IJobOrderBy> {
}

export interface IJobCreate {
	userId?: string;
	name: string;
	params?: any;
}
