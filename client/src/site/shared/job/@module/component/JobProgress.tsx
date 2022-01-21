import {IJobStatus} from "@/puff-smith/site/shared/job";
import {JobDto} from "@/sdk/edde/job/dto";
import {Progress} from "antd";
import {FC} from "react";

export interface IJobProgressProps {
	job: JobDto;
}

export const JobProgress: FC<IJobProgressProps> = ({job}) => {
	return <>
		{job.status === IJobStatus.JOB_CREATED || job.status === IJobStatus.JOB_SCHEDULED && < Progress status={"active"} showInfo={false} percent={100}/>}
		{job.status === IJobStatus.JOB_RUNNING && <Progress
			status={job.error > 0 ? "exception" : "active"}
			success={{percent: job.ratio}}
			percent={job.progress}
			format={item => item?.toFixed(1) + "%"}
		/>}
		{job.status === IJobStatus.JOB_CHECK && <Progress
			strokeColor={"#faad14"}
			status={"normal"}
			percent={job.progress}
			success={{percent: job.ratio}}
			format={item => item?.toFixed(1) + "%"}
		/>}
		{job.status === IJobStatus.JOB_FAILURE && <Progress
			status={"exception"}
			percent={job.progress}
			success={{percent: job.ratio}}
			format={item => item?.toFixed(1) + "%"}
		/>}
		{job.status === IJobStatus.JOB_INTERRUPTED && <Progress
			strokeColor={"#faad14"}
			status={"normal"}
			percent={job.progress}
			success={{percent: job.ratio, strokeColor: "#faad14"}}
			format={item => item?.toFixed(1) + "%"}
		/>}
		{job.status === IJobStatus.JOB_DONE && <Progress
			status={"success"}
			percent={100}
		/>}
	</>;
};
