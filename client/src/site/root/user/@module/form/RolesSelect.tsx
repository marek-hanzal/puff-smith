import {FC} from "react";
import {IRolesSourceSelectProps, RolesSourceSelect} from "@/sdk/puff-smith/api/root/user/endpoint";

export interface IRolesSelectProps extends Partial<IRolesSourceSelectProps> {
}

export const RolesSelect: FC<IRolesSelectProps> = props => {
	return <RolesSourceSelect
		toOption={item => ({label: item.name, value: item.id})}
		mode={"multiple"}
		showSearch={false}
		{...props}
	/>;
};
