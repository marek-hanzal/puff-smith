import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {INicotineSourceSelectProps, NicotineSourceControlProvider, NicotineSourceSelect} from "@/sdk/api/booster/nicotine/query";
import {FC} from "react";

export interface IBoosterNicotineSelectProps extends Partial<INicotineSourceSelectProps> {
}

export const BoosterNicotineSelect: FC<IBoosterNicotineSelectProps> = props => {
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
