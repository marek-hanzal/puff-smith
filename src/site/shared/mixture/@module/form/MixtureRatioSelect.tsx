import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IRatioSourceSelectProps, RatioProviderControl, RatioSourceSelect} from "@/sdk/api/mixture/ratio/query";
import {ComponentProps, FC} from "react";

export interface IMixtureRatioSelectProps extends Partial<IRatioSourceSelectProps> {
	control?: ComponentProps<typeof RatioProviderControl>;
}

export const MixtureRatioSelect: FC<IMixtureRatioSelectProps> = ({control, ...props}) => {
	return <RatioProviderControl
		{...control}
	>
		<RatioSourceSelect
			toOption={item => ({
				...item,
				label: <VgPgInline vgpg={item}/>
			})}
			{...props}
		/>
	</RatioProviderControl>;
};
