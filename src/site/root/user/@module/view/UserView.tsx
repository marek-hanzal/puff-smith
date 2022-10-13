import {IUser} from "@/puff-smith/service/user/interface";
import {
	Preview,
	Tags
}              from "@leight-core/viv";
import {FC}    from "react";

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
				name:  "info",
				items: {
					"name":   user.name,
					"email":  user.email,
					"tokens": <Tags
								  color={"red"}
								  translation={"common"}
								  tags={user.tokens.map(token => ({
									  id:    token.id,
									  group: "token",
									  tag:   token.name,
								  }))}
							  />,
				},
			},
		]}
	</Preview>;
};
