import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {INicotineSourceSelectProps, NicotineProviderControl, NicotineSourceSelect} from "@/sdk/api/inventory/mixture/nicotine/query";
import {FC} from "react";

export interface IMixtureNicotineSelectProps extends Partial<INicotineSourceSelectProps> {
}

export const MixtureNicotineSelect: FC<IMixtureNicotineSelectProps> = props => {
	return <NicotineProviderControl>
		<NicotineSourceSelect
			toOption={item => ({
				value: item.value,
				label: <NicotineInline nicotine={item.nicotine}/>
			})}
			{...props}
		/>
	</NicotineProviderControl>;
};
