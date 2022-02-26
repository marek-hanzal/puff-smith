import {IMenuProps, Menu} from "@/puff-smith";
import {SettingOutlined, ToolOutlined} from "@ant-design/icons";
import {BackIcon, CreateMenuItem, MenuDivider} from "@leight-core/common";
import {FC} from "react";

export interface ISettingsMenuProps extends Partial<IMenuProps> {
}

export const SettingsMenu: FC<ISettingsMenuProps> = props => {
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("root.home.menu", "/root", <BackIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("root.settings.index.menu", "/root/settings", <SettingOutlined/>)}
		<MenuDivider/>
		{CreateMenuItem("root.settings.config.index.menu", "/root/settings/config", <ToolOutlined/>)}
	</Menu>;
};
