import {FC} from "react";
import {IUsersListSourceProps, UsersListSource} from "@/sdk/api/user/query";
import {ButtonLink, ListItem, ListItemMeta} from "@leight-core/client";
import {Avatar} from "antd";

export interface IUsersListProps extends Partial<IUsersListSourceProps> {
}

export const UsersList: FC<IUsersListProps> = props => {
	return <UsersListSource

		{...props}
	>
		{user => <ListItem key={user.id}>
			<ListItemMeta
				title={<ButtonLink
					type={'link'}
					href={'/root/user/[userId]'}
					query={{userId: user.id}}
					title={user.name}
				/>}
				avatar={<Avatar src={user.image}/>}
			/>
		</ListItem>}
	</UsersListSource>
}
