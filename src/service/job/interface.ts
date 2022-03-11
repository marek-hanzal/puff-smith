import {IQuery} from "@leight-core/api";
import {Prisma} from '@prisma/client';

export interface IJobCreate {
	userId?: string;
	params?: any;
}

export type IJobFilter = Prisma.JobWhereInput;

export type IJobOrderBy = Prisma.JobOrderByWithRelationInput;

export interface IJobQuery extends IQuery<IJobFilter, IJobOrderBy> {
}
