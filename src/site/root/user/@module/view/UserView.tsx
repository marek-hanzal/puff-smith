import {Tags} from "@/puff-smith/component/Tags";
import {IUser} from "@/puff-smith/service/user/interface";
import {Preview} from "@leight-core/client";
import {FC} from "react";

export interface IUserViewProps {
	user: IUser;
}

export const UserView: FC<IUserViewProps> = ({user}) => {
	return <Preview
		name={"user"}
		translation={"root.user.preview"}
	>
		{[
			{
				name: "info",
				items: {
					"name": user.name,
					"email": user.email,
					"tokens": <Tags
						color={"red"}
						translation={"common.token"}
						tags={user.tokens.map(token => ({
							id: token.id,
							group: "token",
							code: token.name,
						}))}
					/>,
				},
			},
		]}
	</Preview>;
};
