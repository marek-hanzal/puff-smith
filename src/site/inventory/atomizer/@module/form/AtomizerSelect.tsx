import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerInventoryProviderControl, AtomizerInventorySourceSelect, IAtomizerInventorySourceSelectProps} from "@/sdk/api/inventory/atomizer/query";
import {FC} from "react";

export interface IAtomizerSelectProps extends Partial<IAtomizerInventorySourceSelectProps> {
}

export const AtomizerSelect: FC<IAtomizerSelectProps> = props => {
	return <AtomizerInventoryProviderControl>
		<AtomizerInventorySourceSelect
			showSearch
			toOption={({atomizer}) => ({
				value: atomizer.id,
				label: <AtomizerNameInline atomizer={atomizer}/>,
			})}
			{...props}
		/>
	</AtomizerInventoryProviderControl>;
};
