import {IFile as ICoolFile, IFileStoreRequest, IQuery, ISource} from "@leight-core/api";
import {File, Prisma} from "@prisma/client";

export interface IFile extends ICoolFile {
}

export interface IFileCreate extends IFile {
}

export interface IFileQuery extends IQuery<Prisma.FileWhereInput, Prisma.FileOrderByWithRelationInput> {
}

export type IFileEntity = File;

export interface IFileSource extends ISource<IFileCreate, IFileEntity, IFile, IFileQuery> {
	store(store: IFileStoreRequest): Promise<IFileEntity>;
}
