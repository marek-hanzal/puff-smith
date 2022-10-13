import {ISource} from "@leight-core/viv";

export interface IJobStatus {
	id: string;
	value: string;
	label: string;
}

export interface IJobStatusSource extends ISource<any, IJobStatus, IJobStatus> {
}
