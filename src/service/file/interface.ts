import {IQuery, ISource} from "@leight-core/api";
import {File, Prisma} from "@prisma/client";

export interface IFile {
	id: string;
	created: string;
	updated?: string | null;
	ttl?: number | null;
}

export type IFileWhere = Prisma.FileWhereInput;

export interface IFileQuery extends IQuery<IFileWhere, Prisma.FileOrderByWithRelationInput> {
}

export type IFileEntity = File;

export interface IFileSource extends ISource<undefined, IFileEntity, IFile, IFileQuery> {
}
