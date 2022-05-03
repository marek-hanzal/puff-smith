import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaSourceControlProvider, AromaSourceSelect, IAromaSourceSelectProps} from "@/sdk/api/mixture/inventory/mixture/aroma";
import {FC} from "react";

export interface IMixtureAromaSelectProps extends Partial<IAromaSourceSelectProps> {
}

export const MixtureAromaSelect: FC<IMixtureAromaSelectProps> = props => {
	return <AromaSourceControlProvider>
		<AromaSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: <AromaNameInline aroma={item}/>
			})}
			{...props}
		/>
	</AromaSourceControlProvider>;
};
