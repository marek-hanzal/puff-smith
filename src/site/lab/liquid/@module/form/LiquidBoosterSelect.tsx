import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterSourceSelect, IBoosterSourceSelectProps} from "@/sdk/api/liquid/booster/query";
import {FC} from "react";

export interface ILiquidBoosterSelectProps extends Partial<IBoosterSourceSelectProps> {
}

export const LiquidBoosterSelect: FC<ILiquidBoosterSelectProps> = props => {
	return <BoosterSourceSelect
		toOption={item => ({
			value: item.id,
			label: <BoosterNameInline booster={item}/>
		})}
		{...props}
	/>;
};
