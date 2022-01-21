import {JobPreview} from "@/puff-smith/site/shared/job";
import {JobDto} from "@/sdk/edde/job/dto";
import {JobLogDto} from "@/sdk/edde/job/dto/log";
import {Card} from "antd";
import {FC, memo, ReactElement, ReactNode} from "react";

export interface IJobRowProps {
	job: JobDto;
	jobTypePreview?: (jobLog: JobLogDto) => ReactElement;
	customJobLogTable?: (job: JobDto) => ReactNode;
}

export const JobRow: FC<IJobRowProps> = memo<IJobRowProps>(({job, customJobLogTable, jobTypePreview}) => {
	return <Card>
		<JobPreview
			customJobLogTable={customJobLogTable}
			jobTypePreview={jobTypePreview}
			job={job}
		/>
	</Card>;
});
