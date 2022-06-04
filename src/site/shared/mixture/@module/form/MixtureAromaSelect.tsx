import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaProviderControl, AromaSourceSelect, IAromaSourceSelectProps} from "@/sdk/api/mixture/aroma/query";
import {FC} from "react";

export interface IMixtureAromaSelectProps extends Partial<IAromaSourceSelectProps> {
}

export const MixtureAromaSelect: FC<IMixtureAromaSelectProps> = props => {
	return <AromaProviderControl>
		<AromaSourceSelect
			showSearch
			toOption={aroma => ({
				label: <AromaNameInline aroma={aroma}/>,
				value: aroma.id,
			})}
			{...props}
		/>
	</AromaProviderControl>;
};
