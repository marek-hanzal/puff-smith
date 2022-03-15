import {FC} from "react";
import {Button, message} from "antd";
import {JobsFilter} from "@/puff-smith/site/leight";
import {ButtonBar} from "@leight-core/client";
import {useTranslation} from "react-i18next";
import {useCleanupMutation} from "@/sdk/api/leight/shared/job/cleanup";
import {useJobsQueryInvalidate} from "@/sdk/api/leight/shared/job/query";
import {useCommitMutation} from "@/sdk/api/leight/shared/job/commit";

export interface IJobsListHeaderProps {
}

export const JobsListHeader: FC<IJobsListHeaderProps> = () => {
	const {t} = useTranslation();
	const cleanupMutation = useCleanupMutation();
	const commitMutation = useCommitMutation();
	const jobsQueryInvalidate = useJobsQueryInvalidate();
	return <>
		<ButtonBar>
			<JobsFilter spaceProps={{split: undefined}}/>
			<Button
				type={'link'}
				onClick={() => {
					commitMutation.mutate(undefined, {
						onSuccess: async () => {
							message.success(t('common.job.commit-all.success'));
							await jobsQueryInvalidate();
						}
					});
				}}
			>
				{t('common.job.commit-all.button')}
			</Button>
			<Button
				type={'ghost'}
				danger
				onClick={() => {
					cleanupMutation.mutate(undefined, {
						onSuccess: async () => {
							message.success(t('common.job.cleanup.success'));
							await jobsQueryInvalidate();
						}
					});
				}}
			>
				{t('common.job.cleanup.button')}
			</Button>
		</ButtonBar>
	</>;
}
