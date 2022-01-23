import {BoostersSourceSelect, IBoostersSourceSelectProps} from "@/sdk/puff-smith/api/lab/booster/endpoint";
import {FC} from "react";
import {BoosterInline} from "@/puff-smith/site/lab/booster";

export interface IBoosterSelectProps extends Partial<IBoostersSourceSelectProps> {
}

export const BoosterSelect: FC<IBoosterSelectProps> = props => {
	return <BoostersSourceSelect
		showSearch
		toOption={booster => ({
			label: <BoosterInline booster={booster}/>,
			value: booster.id,
		})}
		{...props}
	/>
}
