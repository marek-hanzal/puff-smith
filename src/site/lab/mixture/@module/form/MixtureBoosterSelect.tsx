import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterSourceSelect, IBoosterSourceSelectProps} from "@/sdk/api/inventory/mixture/booster/query";
import {FC} from "react";

export interface IMixtureBoosterSelectProps extends Partial<IBoosterSourceSelectProps> {
}

export const MixtureBoosterSelect: FC<IMixtureBoosterSelectProps> = props => {
	return <BoosterSourceSelect
		showSearch
		toOption={item => ({
			value: item.id,
			label: <BoosterNameInline booster={item}/>
		})}
		{...props}
	/>;
};
