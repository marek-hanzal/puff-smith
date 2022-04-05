import {IJob} from "@leight-core/api";
import {toHumanNumber} from "@leight-core/client";
import {Progress, ProgressProps} from "antd";
import {FC} from "react";

export interface IJobProgressProps extends Partial<ProgressProps> {
	job: IJob;
}

export const JobProgress: FC<IJobProgressProps> = ({job, ...props}) => {
	return <>
		{job.status === "NEW" && <Progress
			status={"active"}
			showInfo={false}
			percent={100}
			{...props}
		/>}
		{job.status === "RUNNING" && <Progress
			status={(job.failure || 0) > 0 ? "exception" : "active"}
			percent={job.progress}
			success={{percent: job.successRatio || 0}}
			format={item => toHumanNumber(item) + "%"}
			{...props}
		/>}
		{job.status === "REVIEW" && <Progress
			strokeColor={"#faad14"}
			status={"normal"}
			percent={job.progress}
			success={{percent: job.successRatio || 0}}
			format={item => toHumanNumber(item) + "%"}
			{...props}
		/>}
		{job.status === "FAILURE" && <Progress
			status={"exception"}
			percent={job.progress}
			success={{percent: job.successRatio || 0}}
			format={item => toHumanNumber(item) + "%"}
			{...props}
		/>}
		{job.status === "SUCCESS" && <Progress
			status={"success"}
			percent={100}
			success={{percent: job.successRatio || 0}}
			format={item => toHumanNumber(item) + "%"}
			{...props}
		/>}
		{job.status === "DONE" && <Progress
			status={"success"}
			percent={100}
			{...props}
		/>}
	</>;
};
