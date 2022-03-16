import {FC} from "react";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {JobIcon} from "@/puff-smith";

export interface IJobMenuProps extends Partial<IMenuProps> {
}

export const JobMenu: FC<IJobMenuProps> = props => {
	return <Menu style={{border: 'none'}} mode={'horizontal'} {...props}>
		{CreateMenuItem('common.job.status.RUNNING.tab', '/root/job/running', <JobIcon/>)}
		{CreateMenuItem('common.job.status.REVIEW.tab', '/root/job/review', <JobIcon/>)}
		{CreateMenuItem('common.job.status.FAILURE.tab', '/root/job/failure', <JobIcon/>)}
		{CreateMenuItem('common.job.status.SUCCESS.tab', '/root/job/success', <JobIcon/>)}
		{CreateMenuItem('common.job.status.DONE.tab', '/root/job/done', <JobIcon/>)}
		{CreateMenuItem('common.job.status.ALL.tab', '/root/job/all', <JobIcon/>)}
	</Menu>
}
