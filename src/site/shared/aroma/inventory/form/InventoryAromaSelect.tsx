import {AromaInventoryList} from "@/puff-smith/site/lab/aroma/inventory";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma";
import {IInventoryAromasSourceSelectProps, InventoryAromasFilterProvider, InventoryAromasOrderByProvider, InventoryAromasSourceSelect} from "@/sdk/api/aroma/inventory/aroma/query";
import {FC} from "react";

export interface IInventoryAromaSelectProps extends Partial<IInventoryAromasSourceSelectProps> {
}

export const InventoryAromaSelect: FC<IInventoryAromaSelectProps> = props => {
	return <InventoryAromasFilterProvider>
		<InventoryAromasOrderByProvider>
			<InventoryAromasSourceSelect
				showSearch
				allowClear
				style={{width: "100%"}}
				toOption={aroma => ({
					label: <AromaNameInline aroma={aroma}/>,
					value: aroma.id,
				})}
				selectionList={() => <AromaInventoryList/>}
				{...props}
			/>
		</InventoryAromasOrderByProvider>
	</InventoryAromasFilterProvider>;
};
