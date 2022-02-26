import {IPageMenuProps, PageMenu} from "@/puff-smith";
import {ToolOutlined} from "@ant-design/icons";
import {CreateIcon, CreateMenuItem, ListIcon} from "@leight-core/common";
import {FC} from "react";

export interface IConfigPageMenuProps extends Partial<IPageMenuProps> {
}

export const ConfigPageMenu: FC<IConfigPageMenuProps> = props => {
	return <PageMenu {...props}>
		{CreateMenuItem("root.settings.config.index.menu", "/root/settings/config", <ToolOutlined/>)}
		{CreateMenuItem("root.settings.config.create.menu", "/root/settings/config/create", <CreateIcon/>)}
		{CreateMenuItem("root.settings.config.list.menu", "/root/settings/config/list", <ListIcon/>)}
	</PageMenu>;
};
