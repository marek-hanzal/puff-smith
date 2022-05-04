import {AromaInventoryList} from "@/puff-smith/site/lab/aroma/inventory/@module/list/AromaInventoryList";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {IInventoryAromasSourceSelectProps, InventoryAromasSourceControlProvider, InventoryAromasSourceSelect} from "@/sdk/api/aroma/inventory/aroma/query";
import {FC} from "react";

export interface IInventoryAromaSelectProps extends Partial<IInventoryAromasSourceSelectProps> {
}

export const InventoryAromaSelect: FC<IInventoryAromaSelectProps> = props => {
	return <InventoryAromasSourceControlProvider>
		<InventoryAromasSourceSelect
			showSearch
			allowClear
			toOption={aroma => ({
				label: <AromaNameInline aroma={aroma}/>,
				value: aroma.id,
			})}
			selectionList={() => <AromaInventoryList/>}
			{...props}
		/>
	</InventoryAromasSourceControlProvider>;
};
