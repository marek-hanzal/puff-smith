import {JobDoneIcon, JobFailureIcon, JobReviewIcon, JobRunningIcon, JobSuccessIcon} from "@/puff-smith";
import {CreateMenuItem, IMenuProps, ListIcon, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IJobMenuProps extends Partial<IMenuProps> {
}

export const JobMenu: FC<IJobMenuProps> = props => {
	return <Menu style={{border: "none"}} mode={"horizontal"} {...props}>
		{CreateMenuItem("common.job.status.RUNNING.tab", "/root/job/running", <JobRunningIcon/>)}
		{CreateMenuItem("common.job.status.REVIEW.tab", "/root/job/review", <JobReviewIcon/>)}
		{CreateMenuItem("common.job.status.FAILURE.tab", "/root/job/failure", <JobFailureIcon/>)}
		{CreateMenuItem("common.job.status.SUCCESS.tab", "/root/job/success", <JobSuccessIcon/>)}
		{CreateMenuItem("common.job.status.DONE.tab", "/root/job/done", <JobDoneIcon/>)}
		{CreateMenuItem("common.job.status.ALL.tab", "/root/job/all", <ListIcon/>)}
	</Menu>;
};
