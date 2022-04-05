import {CreateMenuItem, IMenuProps, ListIcon, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IUserMenuProps extends Partial<IMenuProps> {
}

export const UserMenu: FC<IUserMenuProps> = props => {
	return <Menu style={{border: "none"}} mode={"horizontal"} {...props}>
		{CreateMenuItem("root.user.list", "/root/user", <ListIcon/>)}
	</Menu>;
};
