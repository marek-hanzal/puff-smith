import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {IMixtureAromaSourceSelectProps, MixtureAromaSourceSelect} from "@/sdk/api/mixture/inventory/aroma/query";
import {FC} from "react";

export interface IMixtureAromaSelectProps extends Partial<IMixtureAromaSourceSelectProps> {
}

export const MixtureAromaSelect: FC<IMixtureAromaSelectProps> = props => {
	return <MixtureAromaSourceSelect
		showSearch
		toOption={item => ({
			value: item.id,
			label: <AromaNameInline aroma={item}/>
		})}
		{...props}
	/>;
};
