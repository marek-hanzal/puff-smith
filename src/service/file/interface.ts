import {IQuery} from "@leight-core/api";
import {File} from "@prisma/client";

export type IFiles = Promise<File[]>;

export interface IFileFilter {
}

export interface IFileOrderBy {
}

export interface IFileQuery extends IQuery<IFileFilter, IFileOrderBy> {
}
