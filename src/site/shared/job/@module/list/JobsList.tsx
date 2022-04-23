import {JobStatsInline} from "@/puff-smith/site/root/job";
import {JobProgress, JobsListHeader} from "@/puff-smith/site/shared/job";
import {IJobsListSourceProps, JobsListSource} from "@/sdk/api/job/query";
import {durationOf, ListItem, ListItemMeta, toLocalDateTime} from "@leight-core/client";
import {Space, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

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
		itemLayout={"vertical"}
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
					{t("common.job.status." + job.status, {
						data: {
							success: job.success || 0,
							failure: job.failure || 0,
							skip: job.skip || 0,
							total: job.total,
						}
					})}
					<Typography.Text type={"secondary"}>{t("common.job.name." + job.name)}</Typography.Text>
				</Space>}
				description={<Space size={"large"}>
					<Space size={"small"}>
						{toLocalDateTime(job.created)}
						{job.finished && `(${durationOf(job.finished, job.created).humanize()})`}
					</Space>
					<JobStatsInline job={job}/>
				</Space>}
			/>
			<JobProgress job={job}/>
		</ListItem>}
	</JobsListSource>;
};
