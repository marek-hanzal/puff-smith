import {IMenuProps, Menu, UserIcon} from "@/puff-smith";
import {BackIcon, CreateMenuItem, EditIcon, MenuDivider} from "@leight-core/leight";
import {FC} from "react";
import {useUserContext} from "@/sdk/puff-smith/api/root/user/endpoint";

export interface IUserHomeMenuProps extends Partial<IMenuProps> {
}

export const UserHomeMenu: FC<IUserHomeMenuProps> = props => {
	const userId = useUserContext().entity.id;
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("root.user.list.back.menu", "/root/user/list", <BackIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("root.user.home.menu", "/root/user/[userId]", <UserIcon/>, {userId})}
		{CreateMenuItem("root.user.edit.menu", "/root/user/[userId]/edit", <EditIcon/>, {userId})}
	</Menu>;
};
