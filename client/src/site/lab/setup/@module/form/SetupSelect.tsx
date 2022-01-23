import {ISetupsSourceSelectProps, SetupsSourceSelect} from "@/sdk/puff-smith/api/lab/setup/endpoint";
import {FC} from "react";
import {SetupInline} from "@/puff-smith/site/lab/setup";

export interface ISetupSelectProps extends Partial<ISetupsSourceSelectProps> {
}

export const SetupSelect: FC<ISetupSelectProps> = props => {
	return <SetupsSourceSelect
		showSearch
		toOption={setup => ({
			label: <SetupInline setup={setup}/>,
			value: setup.id,
		})}
		{...props}
	/>
}
