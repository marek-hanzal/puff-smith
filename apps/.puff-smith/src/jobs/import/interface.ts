import {
    IJob,
    IQueryParams
} from "@leight-core/viv";

export const IMPORT_JOB = "import";

export interface IImportJobParams extends IQueryParams {
	fileId: string;
}

export interface IImportJob extends IJob<IImportJobParams> {
}
