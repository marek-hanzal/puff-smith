import {IUserSourceSelectProps, UserSourceControlProvider, UserSourceSelect} from "@/sdk/api/user/query";
import {FC} from "react";

export interface IUserSelectProps extends Partial<IUserSourceSelectProps> {
}

export const UserSelect: FC<IUserSelectProps> = props => {
	return <UserSourceControlProvider>
		<UserSourceSelect
			showSearch
			toOption={user => ({
				label: user.name,
				value: user.id,
			})}
			{...props}
		/>
	</UserSourceControlProvider>;
};
