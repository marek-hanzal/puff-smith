import {
	IJob,
	IQueryParams
} from "@leight-core/viv";

export const RESTORE_JOB = "restore";

export interface IRestoreJobParams extends IQueryParams {
	fileId: string;
}

export interface IRestoreJob extends IJob<IRestoreJobParams> {
}
