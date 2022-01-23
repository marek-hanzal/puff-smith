import {IModsSourceSelectProps, ModsSourceSelect} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {FC} from "react";
import {ModInline} from "@/puff-smith/site/lab/mod";

export interface IModSelectProps extends Partial<IModsSourceSelectProps> {
}

export const ModSelect: FC<IModSelectProps> = props => {
	return <ModsSourceSelect
		showSearch
		toOption={mod => ({
			label: <ModInline mod={mod}/>,
			value: mod.id,
		})}
		{...props}
	/>
}
