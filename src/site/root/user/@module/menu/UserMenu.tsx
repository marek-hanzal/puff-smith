import {CreateMenuItem, IMenuProps, ListIcon, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IUserMenuProps extends Partial<IMenuProps> {
}

export const UserMenu: FC<IUserMenuProps> = props => <Menu
	style={{border: "none"}}
	mode={"horizontal"}
	items={[
		CreateMenuItem({
			title: "root.user.list",
			href: "/root/user",
			icon: <ListIcon/>,
		}),
	]}
	{...props}
/>;
