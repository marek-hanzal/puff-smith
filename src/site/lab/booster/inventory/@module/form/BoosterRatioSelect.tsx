import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IRatioSourceSelectProps, RatioProviderControl, RatioSourceSelect} from "@/sdk/api/booster/inventory/booster/ratio/query";
import {FC} from "react";

export interface IBoosterRatioSelectProps extends Partial<IRatioSourceSelectProps> {
}

export const BoosterRatioSelect: FC<IBoosterRatioSelectProps> = props => {
	return <RatioProviderControl>
		<RatioSourceSelect
			toOption={item => ({
				...item,
				label: <VgPgInline vgpg={item}/>
			})}
			{...props}
		/>
	</RatioProviderControl>;
};
