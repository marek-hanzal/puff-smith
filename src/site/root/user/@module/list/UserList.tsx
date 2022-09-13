import {IUserListSourceProps, UserListSource} from "@/sdk/api/user/query";
import {ButtonLink, ListItem, ListItemMeta, Tags} from "@leight-core/client";
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
					href={"/root/user/[userId]"}
					query={{userId: user.id}}
					label={user.name || user.email}
				/>}
				description={<Tags
					color={"red"}
					translation={"common"}
					tags={user.tokens.map(token => ({
						id: token.id,
						group: "token",
						tag: token.name,
					}))}
				/>}
				avatar={<Avatar src={user.image}/>}
			/>
		</ListItem>}
	</UserListSource>;
};
