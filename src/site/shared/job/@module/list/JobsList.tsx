import {ListItem, ListItemMeta, toLocalDateTime} from "@leight-core/client";
import {FC} from "react";
import {JobProgress, JobsListHeader} from "@/puff-smith/site/shared/job";
import {useTranslation} from "react-i18next";
import {IJobsListSourceProps, JobsListSource} from "@/sdk/api/job/query";
import {Space, Typography} from "antd";

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
				title={<Space>
					{t('common.job.status.' + job.status, {
						data: {
							success: job.success || 0,
							failure: job.failure || 0,
							skip: job.skip || 0,
							total: job.total,
						}
					})}
					<Typography.Text type={'secondary'}>{t('common.job.name.' + job.name)}</Typography.Text>
				</Space>}
				description={toLocalDateTime(job.created)}
			/>
			<JobProgress job={job}/>
		</ListItem>}
	</JobsListSource>;
}
