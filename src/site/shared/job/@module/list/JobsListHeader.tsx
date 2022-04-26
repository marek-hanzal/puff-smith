import {JobsFilter} from "@/puff-smith/site/shared/job/@module/form/JobsFilter";
import {useCleanupMutation} from "@/sdk/api/job/cleanup";
import {useCommitMutation} from "@/sdk/api/job/commit";
import {useJobsOptionalFilterContext, useJobsQueryInvalidate} from "@/sdk/api/job/query";
import {ButtonBar} from "@leight-core/client";
import {Button, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IJobsListHeaderProps {
	showCommit?: boolean;
	showCleanup?: boolean;
	showFilter?: boolean;
}

export const JobsListHeader: FC<IJobsListHeaderProps> = ({showCommit = true, showCleanup = true, showFilter = true}) => {
	const {t} = useTranslation();
	const cleanupMutation = useCleanupMutation();
	const commitMutation = useCommitMutation();
	const jobsQueryInvalidate = useJobsQueryInvalidate();
	const filterContext = useJobsOptionalFilterContext();
	return <ButtonBar>
		{showFilter && <JobsFilter spaceProps={{split: undefined}}/>}
		{showCommit && <Button
			type={"link"}
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
		{showCleanup && <Button
			type={"ghost"}
			danger
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
	</ButtonBar>;
};
