import {
	IJob,
	IQueryParams
} from "@leight-core/api";

export const RESTORE_JOB = "restore";

export interface IRestoreJobParams extends IQueryParams {
	fileId: string;
}

export interface IRestoreJob extends IJob<IRestoreJobParams> {
}
