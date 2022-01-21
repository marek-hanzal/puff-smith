import {FC} from "react";
import {IUsersSourceSelectProps, UsersSourceSelect} from "@/sdk/puff-smith/api/root/user/endpoint";

export interface IUserSelectProps extends Partial<IUsersSourceSelectProps> {
}

export const UserSelect: FC<IUserSelectProps> = props => {
	return <UsersSourceSelect
		toOption={user => ({value: user.id, label: user.name})}
		showSearch
		{...props}
	/>;
};
