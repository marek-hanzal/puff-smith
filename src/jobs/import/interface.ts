import {IJob, IQueryParams} from "@leight-core/api";

export const IMPORT_JOB = "import";

export interface IImportJobParams extends IQueryParams {
	fileId: string;
}

export interface IImportJob extends IJob<IImportJobParams> {
}
