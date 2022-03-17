import {FC} from "react";
import {CreateMenuItem, IMenuProps, ListIcon, Menu} from "@leight-core/client";
import {CheckCircleOutlined, CloseCircleOutlined, IssuesCloseOutlined, SmileOutlined, SyncOutlined} from "@ant-design/icons";

export interface IJobMenuProps extends Partial<IMenuProps> {
}

export const JobMenu: FC<IJobMenuProps> = props => {
	return <Menu style={{border: 'none'}} mode={'horizontal'} {...props}>
		{CreateMenuItem('common.job.status.RUNNING.tab', '/root/job/running', <SyncOutlined/>)}
		{CreateMenuItem('common.job.status.REVIEW.tab', '/root/job/review', <IssuesCloseOutlined/>)}
		{CreateMenuItem('common.job.status.FAILURE.tab', '/root/job/failure', <CloseCircleOutlined/>)}
		{CreateMenuItem('common.job.status.SUCCESS.tab', '/root/job/success', <SmileOutlined/>)}
		{CreateMenuItem('common.job.status.DONE.tab', '/root/job/done', <CheckCircleOutlined/>)}
		{CreateMenuItem('common.job.status.ALL.tab', '/root/job/all', <ListIcon/>)}
	</Menu>
}
