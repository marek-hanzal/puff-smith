import {ListItem, ListItemMeta, toLocalDateTime} from "@leight-core/client";
import {FC} from "react";
import {JobProgress, JobsListHeader} from "@/puff-smith/site/leight";
import {useTranslation} from "react-i18next";
import {IJobsListSourceProps, JobsListSource} from "@/sdk/api/leight/shared/job/query";

export interface IJobListProps extends Partial<IJobsListSourceProps> {
	showCommit?: boolean;
	showCleanup?: boolean;
	showFilter?: boolean;
	disableToolbar?: boolean;
}

export const JobsList: FC<IJobListProps> = ({showCommit = true, showCleanup = true, showFilter = true, disableToolbar = false, ...props}) => {
	const {t} = useTranslation();
	return <JobsListSource
		sourceProps={{
			live: 500,
		}}
		itemLayout={'vertical'}
		header={disableToolbar ? undefined : (() => <JobsListHeader
			showCommit={showCommit}
			showCleanup={showCleanup}
			showFilter={showFilter}
		/>)}
		{...props}
	>
		{job => <ListItem key={job.id}>
			<ListItemMeta
				title={t('common.job.status.' + job.status)}
				description={toLocalDateTime(job.created)}
			/>
			<JobProgress job={job}/>
		</ListItem>}
	</JobsListSource>;
}
