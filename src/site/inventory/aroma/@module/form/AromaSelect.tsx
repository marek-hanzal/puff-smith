import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaInventoryProviderControl, AromaInventorySourceSelect, IAromaInventorySourceSelectProps} from "@/sdk/api/inventory/aroma/query";
import {FC} from "react";

export interface IAromaSelectProps extends Partial<IAromaInventorySourceSelectProps> {
}

export const AromaSelect: FC<IAromaSelectProps> = props => {
	return <AromaInventoryProviderControl>
		<AromaInventorySourceSelect
			showSearch
			allowClear
			toOption={aromaInventory => ({
				value: aromaInventory.aromaId,
				label: <AromaNameInline aroma={aromaInventory.aroma}/>,
			})}
			{...props}
		/>
	</AromaInventoryProviderControl>;
};
