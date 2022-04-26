import {DurationOf} from "@/puff-smith/component/inline/DurationOf";
import {LocalDate} from "@/puff-smith/component/inline/LocalDate";
import {TimeOf} from "@/puff-smith/component/inline/TimeOf";
import {JobPerformanceInline} from "@/puff-smith/site/root/job/@module/inline/JobPerformanceInline";
import {JobStatsInline} from "@/puff-smith/site/root/job/@module/inline/JobStatsInline";
import {JobProgress} from "@/puff-smith/site/shared/job/@module/component/JobProgress";
import {JobsListHeader} from "@/puff-smith/site/shared/job/@module/list/JobsListHeader";
import {IJobsListSourceProps, JobsListSource} from "@/sdk/api/job/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
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
				description={<>
					<Space size={"large"}>
						<Space size={"small"} split={<Divider type={"vertical"}/>}>
							<LocalDate date={job.created}/>
							{job.started && <LocalDate date={job.started} tooltip={"root.job.started.tooltip"}/>}
							{job.started && <JobPerformanceInline job={job}/>}
							{job.finished && <Space>(<DurationOf start={job.created} end={job.finished}/>)</Space>}
							{!job.finished && job.started && <Space>(<TimeOf date={job.started}/>)</Space>}
						</Space>
						<JobStatsInline job={job}/>
					</Space>
					<JobProgress job={job}/>
				</>}
			/>
		</ListItem>}
	</JobsListSource>;
};
