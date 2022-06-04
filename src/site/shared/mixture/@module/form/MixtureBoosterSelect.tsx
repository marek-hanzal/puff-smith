import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterProviderControl, BoosterSourceSelect, IBoosterSourceSelectProps} from "@/sdk/api/mixture/booster/query";
import {ComponentProps, FC} from "react";

export interface IMixtureBoosterSelectProps extends Partial<IBoosterSourceSelectProps> {
	control?: ComponentProps<typeof BoosterProviderControl>;
}

export const MixtureBoosterSelect: FC<IMixtureBoosterSelectProps> = ({control, ...props}) => {
	return <BoosterProviderControl
		{...control}
	>
		<BoosterSourceSelect
			showSearch
			toOption={booster => ({
				label: <BoosterNameInline booster={booster}/>,
				value: booster.id,
			})}
			{...props}
		/>
	</BoosterProviderControl>;
};
