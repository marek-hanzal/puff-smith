import {IQuery} from "@leight-core/api";
import {File, Prisma} from "@prisma/client";

export type IFiles = Promise<File[]>;

export type IFileFilter = Prisma.FileWhereInput;

export type IFileOrderBy = Prisma.FileOrderByWithRelationInput;

export interface IFileQuery extends IQuery<IFileFilter, IFileOrderBy> {
}
