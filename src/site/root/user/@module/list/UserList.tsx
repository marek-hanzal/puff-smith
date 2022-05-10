import {IUserListSourceProps, UserListSource} from "@/sdk/api/user/query";
import {ButtonLink, ListItem, ListItemMeta} from "@leight-core/client";
import {Avatar} from "antd";
import {FC} from "react";

export interface IUserListProps extends Partial<IUserListSourceProps> {
}

export const UserList: FC<IUserListProps> = props => {
	return <UserListSource
		{...props}
	>
		{user => <ListItem key={user.id}>
			<ListItemMeta
				title={<ButtonLink
					type={"link"}
					href={"/root/user/[userId]"}
					query={{userId: user.id}}
					title={user.name || user.email}
				/>}
				avatar={<Avatar src={user.image}/>}
			/>
		</ListItem>}
	</UserListSource>;
};
