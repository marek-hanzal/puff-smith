import {IMenuProps, Menu} from "@/puff-smith";
import {ToolOutlined} from "@ant-design/icons";
import {BackIcon, CreateMenuItem, DeleteItemIcon, EditIcon, MenuDivider} from "@leight-core/common";
import {FC} from "react";
import {useConfigContext} from "@/sdk/edde/api/root/config/endpoint";

export interface IConfigHomeMenuProps extends Partial<IMenuProps> {
}

export const ConfigHomeMenu: FC<IConfigHomeMenuProps> = props => {
	const configId = useConfigContext().entity.id;
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("root.settings.config.list.menu", "/root/settings/config/list", <BackIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("root.settings.config.home.menu", "/root/settings/config/[configId]", <ToolOutlined/>, {configId})}
		<MenuDivider/>
		{CreateMenuItem("root.settings.config.edit.menu", "/root/settings/config/[configId]/edit", <EditIcon/>, {configId})}
		{CreateMenuItem("root.settings.config.delete.menu", "/root/settings/config/[configId]/delete", <DeleteItemIcon/>, {configId})}
	</Menu>;
};
