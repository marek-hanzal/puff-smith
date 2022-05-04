import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterSourceSelect, IBoosterSourceSelectProps} from "@/sdk/api/mixture/inventory/mixture/booster";
import {FC} from "react";

export interface IMixtureBoosterSelectProps extends Partial<IBoosterSourceSelectProps> {
}

export const MixtureBoosterSelect: FC<IMixtureBoosterSelectProps> = props => {
	return <BoosterSourceSelect
		toOption={item => ({
			value: item.id,
			label: <BoosterNameInline booster={item}/>
		})}
		{...props}
	/>;
};
