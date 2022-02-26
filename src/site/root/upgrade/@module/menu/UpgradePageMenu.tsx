import {IPageMenuProps, PageMenu, UpgradeIcon} from "@/puff-smith";
import {ArrowRightOutlined} from "@ant-design/icons";
import {CreateMenuItem, ListIcon} from "@leight-core/common";
import {FC} from "react";

export interface IUpgradePageMenuProps extends Partial<IPageMenuProps> {
}

export const UpgradePageMenu: FC<IUpgradePageMenuProps> = props => {
	return <PageMenu {...props}>
		{CreateMenuItem("root.upgrade.index.menu", "/root/upgrade", <UpgradeIcon/>)}
		{CreateMenuItem("root.upgrade.run.menu", "/root/upgrade/run", <ArrowRightOutlined/>)}
		{CreateMenuItem("root.upgrade.list.menu", "/root/upgrade/list", <ListIcon/>)}
	</PageMenu>;
};
