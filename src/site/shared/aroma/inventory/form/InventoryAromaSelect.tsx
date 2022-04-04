import {IInventoryAromasSourceSelectProps, InventoryAromasFilterProvider, InventoryAromasSourceSelect} from "@/sdk/api/aroma/inventory/aroma/query";
import {FC} from "react";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma";

export interface IInventoryAromaSelectProps extends Partial<IInventoryAromasSourceSelectProps> {
}

export const InventoryAromaSelect: FC<IInventoryAromaSelectProps> = props => {
	return <InventoryAromasFilterProvider>
		<InventoryAromasSourceSelect
			showSearch
			allowClear
			toOption={aroma => ({
				label: <AromaNameInline aroma={aroma}/>,
				value: aroma.id,
			})}
			{...props}
		/>
	</InventoryAromasFilterProvider>
}
