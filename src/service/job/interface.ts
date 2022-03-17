import {IQuery} from "@leight-core/api";
import {Prisma} from '@prisma/client';
import prismaClient from "@/puff-smith/service/prisma";

export type IJobs = ReturnType<typeof prismaClient.job.findMany>;

export interface IJobCreate {
	userId?: string;
	params?: any;
}

export type IJobFilter = Prisma.JobWhereInput;

export type IJobOrderBy = Prisma.JobOrderByWithRelationInput;

export interface IJobQuery extends IQuery<IJobFilter, IJobOrderBy> {
}
