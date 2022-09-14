import {IFile as ICoolFile, IQuery, ISource} from "@leight-core/api";
import {File, Prisma} from "@prisma/client";

export interface IFile extends ICoolFile {
}

export interface IFileQuery extends IQuery<Prisma.FileWhereInput, Prisma.FileOrderByWithRelationInput> {
}

export type IFileEntity = File;

export interface IFileSource extends ISource<undefined, IFileEntity, IFile, IFileQuery> {
}
