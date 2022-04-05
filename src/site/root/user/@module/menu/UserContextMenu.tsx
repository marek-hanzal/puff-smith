import {PurchaseIcon, UserIcon} from "@/puff-smith";
import {IUser} from "@/puff-smith/service/user";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IUserContextMenuProps extends Partial<IMenuProps> {
	user: IUser;
}

export const UserContextMenu: FC<IUserContextMenuProps> = ({user, ...props}) => {
	const query = {userId: user.id};
	return <Menu style={{border: "none"}} mode={"horizontal"} {...props}>
		{CreateMenuItem("root.user.index.menu", "/root/user/[userId]", <UserIcon/>, query)}
		{CreateMenuItem("root.user.transactions.menu", "/root/user/[userId]/transactions", <PurchaseIcon/>, query)}
	</Menu>;
};
