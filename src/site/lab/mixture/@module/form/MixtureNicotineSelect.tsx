import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {INicotineSourceSelectProps, NicotineSourceControlProvider, NicotineSourceSelect} from "@/sdk/api/mixture/inventory/mixture/nicotine";
import {FC} from "react";

export interface IMixtureNicotineSelectProps extends Partial<INicotineSourceSelectProps> {
}

export const MixtureNicotineSelect: FC<IMixtureNicotineSelectProps> = props => {
	return <NicotineSourceControlProvider>
		<NicotineSourceSelect
			toOption={item => ({
				value: item.value,
				label: <NicotineInline nicotine={item.nicotine}/>
			})}
			{...props}
		/>
	</NicotineSourceControlProvider>;
};
