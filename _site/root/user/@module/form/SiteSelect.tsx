import {FC} from "react";
import {ISitesSourceSelectProps, SitesSourceSelect} from "@/sdk/puff-smith/api/root/user/endpoint";

export interface ISiteSelectProps extends Partial<ISitesSourceSelectProps> {
}

export const SiteSelect: FC<ISiteSelectProps> = props => {
	return <SitesSourceSelect
		toOption={item => ({value: item.name, label: item.name})}
		showSearch={false}
		{...props}
	/>;
};
