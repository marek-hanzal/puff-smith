import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterProviderControl, BoosterSourceSelect, IBoosterSourceSelectProps} from "@/sdk/api/mixture/booster/query";
import {FC} from "react";

export interface IMixtureBoosterSelectProps extends Partial<IBoosterSourceSelectProps> {
}

export const MixtureBoosterSelect: FC<IMixtureBoosterSelectProps> = props => {
	return <BoosterProviderControl>
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
