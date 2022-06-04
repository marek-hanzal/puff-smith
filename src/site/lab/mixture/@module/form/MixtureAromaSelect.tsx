import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {IMixtureAromaSourceSelectProps, MixtureAromaProviderControl, MixtureAromaSourceSelect} from "@/sdk/api/inventory/mixture/aroma/query";
import {ComponentProps, FC} from "react";

export interface IMixtureAromaSelectProps extends Partial<IMixtureAromaSourceSelectProps> {
	control?: ComponentProps<typeof MixtureAromaProviderControl>;
}

export const MixtureAromaSelect: FC<IMixtureAromaSelectProps> = ({control, ...props}) => {
	return <MixtureAromaProviderControl
		{...control}
	>
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
