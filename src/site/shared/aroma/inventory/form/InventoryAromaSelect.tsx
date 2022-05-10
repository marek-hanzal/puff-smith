import {AromaInventoryList} from "@/puff-smith/site/lab/aroma/inventory/@module/list/AromaInventoryList";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {IInventoryAromaSourceSelectProps, InventoryAromaSourceControlProvider, InventoryAromaSourceSelect} from "@/sdk/api/aroma/inventory/aroma/query";
import {FC} from "react";

export interface IInventoryAromaSelectProps extends Partial<IInventoryAromaSourceSelectProps> {
}

export const InventoryAromaSelect: FC<IInventoryAromaSelectProps> = props => {
	return <InventoryAromaSourceControlProvider>
		<InventoryAromaSourceSelect
			showSearch
			allowClear
			toOption={aroma => ({
				label: <AromaNameInline aroma={aroma}/>,
				value: aroma.id,
			})}
			selectionList={() => <AromaInventoryList/>}
			{...props}
		/>
	</InventoryAromaSourceControlProvider>;
};
