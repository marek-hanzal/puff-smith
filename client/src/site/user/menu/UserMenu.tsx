import {AtomizerIcon, ModIcon} from "@/ps";
import {CreateIcon, CreateMenuItem, HomeIcon, IMenuProps, ListIcon, Menu, MenuDivider, MenuGroup} from "@leight-core/leight";
import {FC} from "react";

export interface IUserMenuProps extends Partial<IMenuProps> {
}

export const UserMenu: FC<IUserMenuProps> = props => {
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("user.index.menu", "/user", <HomeIcon/>)}
		<MenuDivider/>
		<MenuGroup id={"user.atomizer"}>
			{CreateMenuItem("user.atomizer.index.menu", "/user/atomizer", <AtomizerIcon/>)}
			{CreateMenuItem("user.atomizer.create.menu", "/user/atomizer/create", <CreateIcon/>)}
			{CreateMenuItem("user.atomizer.list.menu", "/user/atomizer/list", <ListIcon/>)}
		</MenuGroup>
		<MenuDivider/>
		<MenuGroup id={"user.mod"}>
			{CreateMenuItem("user.mod.index.menu", "/user/mod", <ModIcon/>)}
			{CreateMenuItem("user.mod.create.menu", "/user/mod/create", <CreateIcon/>)}
			{CreateMenuItem("user.mod.list.menu", "/user/mod/list", <ListIcon/>)}
		</MenuGroup>
	</Menu>;
};
