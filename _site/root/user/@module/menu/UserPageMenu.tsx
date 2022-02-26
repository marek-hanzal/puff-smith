import {IPageMenuProps, PageMenu} from "@/puff-smith";
import {UserOutlined} from "@ant-design/icons";
import {CreateIcon, CreateMenuItem, ListIcon} from "@leight-core/common";
import {FC} from "react";

export interface IUserPageMenuProps extends Partial<IPageMenuProps> {
}

export const UserPageMenu: FC<IUserPageMenuProps> = props => {
	return <PageMenu {...props}>
		{CreateMenuItem("root.user.index.page-menu", "/root/user", <UserOutlined/>)}
		{CreateMenuItem("root.user.list.page-menu", "/root/user/list", <ListIcon/>)}
		{CreateMenuItem("root.user.create.page-menu", "/root/user/create", <CreateIcon/>)}
	</PageMenu>;
};
