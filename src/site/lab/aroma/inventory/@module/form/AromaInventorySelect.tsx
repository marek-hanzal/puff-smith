import {AromaInventoryList} from "@/puff-smith/site/lab/aroma/inventory/@module/list/AromaInventoryList";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaInventoryProviderControl, AromaInventorySourceSelect, IAromaInventorySourceSelectProps} from "@/sdk/api/inventory/aroma/query";
import {FC} from "react";

export interface IAromaInventorySelectProps extends Partial<IAromaInventorySourceSelectProps> {
}

export const AromaInventorySelect: FC<IAromaInventorySelectProps> = props => {
	return <AromaInventoryProviderControl>
		<AromaInventorySourceSelect
			showSearch
			allowClear
			toOption={({aroma}) => ({
				label: <AromaNameInline aroma={aroma}/>,
				value: aroma.id,
			})}
			selectionList={() => <AromaInventoryList/>}
			{...props}
		/>
	</AromaInventoryProviderControl>;
};
