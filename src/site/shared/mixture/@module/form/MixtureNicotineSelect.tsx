import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {INicotineSourceSelectProps, NicotineProviderControl, NicotineSourceSelect} from "@/sdk/api/mixture/nicotine/query";
import {ComponentProps, FC} from "react";

export interface IMixtureNicotineSelectProps extends Partial<INicotineSourceSelectProps> {
	control?: ComponentProps<typeof NicotineProviderControl>;
}

export const MixtureNicotineSelect: FC<IMixtureNicotineSelectProps> = ({control, ...props}) => {
	return <NicotineProviderControl
		{...control}
	>
		<NicotineSourceSelect
			toOption={item => ({
				value: item.value,
				label: <NicotineInline nicotine={item.nicotine}/>
			})}
			{...props}
		/>
	</NicotineProviderControl>;
};
