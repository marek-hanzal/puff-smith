import {ContainerClass} from "@/puff-smith/service/Container";
import {
    IFileSource as ICoolFileSource,
    IQuery
}                       from "@leight-core/viv";
import {
    File,
    Prisma
}                       from "@prisma/client";

export interface IFileQuery extends IQuery<Prisma.FileWhereInput, Prisma.FileOrderByWithRelationInput> {
}

export type IFileEntity = File;

export interface IFileSource extends ICoolFileSource<ContainerClass, IFileEntity, IFileQuery> {
}
