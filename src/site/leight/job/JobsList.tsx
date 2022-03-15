import {ListItem, ListItemMeta, toHumanNumber, toLocalDateTime} from "@leight-core/client";
import {IJobsListSourceProps, JobsListSource} from "@/sdk/api/shared/job/query";
import {FC} from "react";
import {Progress} from "antd";

export interface IJobListProps extends Partial<IJobsListSourceProps> {
}

export const JobsList: FC<IJobListProps> = props => {
	return <JobsListSource
		sourceProps={{
			live: 1000,
		}}
		itemLayout={'vertical'}
		{...props}
	>
		{job => <ListItem key={job.id}>
			<ListItemMeta
				title={job.status}
				description={toLocalDateTime(job.created)}
			/>
			<Progress
				status={(job.failure || 0) > 0 ? "exception" : "active"}
				success={{percent: job.successRatio || 0}}
				percent={job.progress}
				format={item => toHumanNumber(item) + "%"}
			/>
		</ListItem>}
	</JobsListSource>;
}
