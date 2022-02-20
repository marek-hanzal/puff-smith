import {IPageMenuProps, JobIcon, PageMenu} from "@/puff-smith";
import {CreateMenuItem, ListIcon} from "@leight-core/leight";
import {FC} from "react";

export interface IJobPageMenuProps extends IPageMenuProps {
}

export const JobPageMenu: FC<IJobPageMenuProps> = props => {
	return <PageMenu {...props}>
		{CreateMenuItem("root.job.index.page-menu", "/root/job", <JobIcon/>)}
		{CreateMenuItem("root.job.list.page-menu", "/root/job/list", <ListIcon/>)}
	</PageMenu>;
};
