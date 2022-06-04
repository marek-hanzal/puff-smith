import {RowInline} from "@/puff-smith/component/RowInline";
import {JobFilter} from "@/puff-smith/site/shared/job/@module/form/JobFilter";
import {useCleanupMutation} from "@/sdk/api/job/cleanup";
import {useCommitMutation} from "@/sdk/api/job/commit";
import {useJobOptionalFilterContext, useJobQueryInvalidate} from "@/sdk/api/job/query";
import {DeleteItemIcon} from "@leight-core/client";
import {Button, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IJobListHeaderProps {
	showCommit?: boolean;
	showCleanup?: boolean;
	showFilter?: boolean;
}

export const JobListHeader: FC<IJobListHeaderProps> = ({showCommit = true, showCleanup = true, showFilter = true}) => {
	const {t} = useTranslation();
	const cleanupMutation = useCleanupMutation();
	const commitMutation = useCommitMutation();
	const jobsQueryInvalidate = useJobQueryInvalidate();
	const filterContext = useJobOptionalFilterContext();
	return <RowInline
		extra={showCleanup && <Button
			type={"ghost"}
			danger
			icon={<DeleteItemIcon/>}
			loading={cleanupMutation.isLoading}
			onClick={() => {
				cleanupMutation.mutate(filterContext?.filter, {
					onSuccess: async () => {
						message.success(t("common.job.cleanup.success"));
						await jobsQueryInvalidate();
					}
				});
			}}
		>
			{t("common.job.cleanup.button")}
		</Button>}
	>
		{showFilter && <JobFilter spaceProps={{split: undefined}}/>}
		{showCommit && <Button
			type={"link"}
			loading={commitMutation.isLoading}
			onClick={() => {
				commitMutation.mutate(undefined, {
					onSuccess: async () => {
						message.success(t("common.job.commit-all.success"));
						await jobsQueryInvalidate();
					}
				});
			}}
		>
			{t("common.job.commit-all.button")}
		</Button>}
	</RowInline>;
};
