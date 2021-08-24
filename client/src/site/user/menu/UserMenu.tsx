import {CreateMenuItem, HomeIcon, IMenuProps, Menu} from "@leight-core/leight";
import {FC} from "react";

export interface IUserMenuProps extends Partial<IMenuProps> {
}

export const UserMenu: FC<IUserMenuProps> = props => {
	return <Menu {...props}>
		{CreateMenuItem("user.index.menu", "/user", <HomeIcon/>)}
	</Menu>;
};
