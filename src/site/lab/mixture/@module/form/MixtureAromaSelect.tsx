import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {IMixtureAromaSourceSelectProps, MixtureAromaProviderControl, MixtureAromaSourceSelect} from "@/sdk/api/inventory/mixture/aroma/query";
import {FC} from "react";

export interface IMixtureAromaSelectProps extends Partial<IMixtureAromaSourceSelectProps> {
}

export const MixtureAromaSelect: FC<IMixtureAromaSelectProps> = props => {
	return <MixtureAromaProviderControl>
		<MixtureAromaSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: <AromaNameInline aroma={item}/>
			})}
			{...props}
		/>
	</MixtureAromaProviderControl>;
};
