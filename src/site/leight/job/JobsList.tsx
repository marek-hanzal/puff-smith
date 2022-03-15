import {ListItem, ListItemMeta, toLocalDateTime} from "@leight-core/client";
import {FC} from "react";
import {JobProgress, JobsListHeader} from "@/puff-smith/site/leight";
import {Button} from "antd";
import {useTranslation} from "react-i18next";
import {IJobsListSourceProps, JobsListSource} from "@/sdk/api/leight/shared/job/query";

export interface IJobListProps extends Partial<IJobsListSourceProps> {
}

export const JobsList: FC<IJobListProps> = props => {
	const {t} = useTranslation();
	return <JobsListSource
		sourceProps={{
			live: 500,
		}}
		itemLayout={'vertical'}
		header={() => <JobsListHeader/>}
		{...props}
	>
		{job => <ListItem
			key={job.id}
			extra={[
				<Button key={'commit'}>[commit]</Button>
			]}
		>
			<ListItemMeta
				title={t('common.job.status.' + job.status)}
				description={toLocalDateTime(job.created)}
			/>
			<JobProgress job={job}/>
		</ListItem>}
	</JobsListSource>;
}
