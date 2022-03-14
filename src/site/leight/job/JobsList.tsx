import {ListItem, ListItemMeta, toLocalDateTime} from "@leight-core/client";
import {IJobsListSourceProps, JobsListSource} from "@/sdk/api/shared/job/query";
import {FC} from "react";

export interface IJobListProps extends Partial<IJobsListSourceProps> {
}

export const JobsList: FC<IJobListProps> = props => {
	return <JobsListSource
		sourceProps={{
			live: 1000,
		}}
		{...props}
	>
		{job => <ListItem key={job.id}>
			<ListItemMeta
				title={job.status}
				description={toLocalDateTime(job.created)}
			/>
		</ListItem>}
	</JobsListSource>;
}
