import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IRatioSourceSelectProps, RatioProviderControl, RatioSourceSelect} from "@/sdk/api/base/ratio/query";
import {FC} from "react";

export interface IBaseRatioSelectProps extends Partial<IRatioSourceSelectProps> {
}

export const BaseRatioSelect: FC<IBaseRatioSelectProps> = props => {
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
