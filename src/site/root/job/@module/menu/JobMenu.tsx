import {JobDoneIcon}    from "@/puff-smith/component/icon/job/JobDoneIcon";
import {JobFailureIcon} from "@/puff-smith/component/icon/job/JobFailureIcon";
import {JobReviewIcon}  from "@/puff-smith/component/icon/job/JobReviewIcon";
import {JobRunningIcon} from "@/puff-smith/component/icon/job/JobRunningIcon";
import {JobSuccessIcon} from "@/puff-smith/component/icon/job/JobSuccessIcon";
import {
	CreateMenuItem,
	IMenuProps,
	ListIcon,
	Menu
}                       from "@leight-core/viv";
import {FC}             from "react";

export interface IJobMenuProps extends Partial<IMenuProps> {
}

export const JobMenu: FC<IJobMenuProps> = props => <Menu
	style={{border: "none"}}
	mode={"horizontal"}
	items={[
		CreateMenuItem({
			title: "common.job.status.RUNNING.tab",
			href:  "/root/job/running",
			icon:  <JobRunningIcon/>,
		}),
		CreateMenuItem({
			title: "common.job.status.REVIEW.tab",
			href:  "/root/job/review",
			icon:  <JobReviewIcon/>,
		}),
		CreateMenuItem({
			title: "common.job.status.FAILURE.tab",
			href:  "/root/job/failure",
			icon:  <JobFailureIcon/>,
		}),
		CreateMenuItem({
			title: "common.job.status.SUCCESS.tab",
			href:  "/root/job/success",
			icon:  <JobSuccessIcon/>,
		}),
		CreateMenuItem({
			title: "common.job.status.DONE.tab",
			href:  "/root/job/done",
			icon:  <JobDoneIcon/>,
		}),
		CreateMenuItem({
			title: "common.job.status.ALL.tab",
			href:  "/root/job/all",
			icon:  <ListIcon/>,
		}),
	]}
	{...props}
/>;
