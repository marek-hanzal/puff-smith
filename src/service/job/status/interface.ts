import {IJobStatus as ICoolJobStatus, IQuery, ISource} from "@leight-core/api";

export interface IJobStatus {
	value: string;
	label: string;
}

export interface IJobStatusSource extends ISource<undefined, ICoolJobStatus, IJobStatus, IQuery> {
}
