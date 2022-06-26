import {IUser} from "@/puff-smith/service/user/interface";
import {Typography} from "antd";
import {FC} from "react";

export interface IUserNameInlineProps {
	user?: IUser | null;
}

export const UserNameInline: FC<IUserNameInlineProps> = ({user}) => {
	return user ? <Typography.Text type={"secondary"}>{user.name || user.email}</Typography.Text> : null;
};
