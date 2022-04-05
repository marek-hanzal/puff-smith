import {BaseNameInline} from "@/puff-smith/site/shared/base";
import {IInventoryBasesSourceSelectProps, InventoryBasesFilterProvider, InventoryBasesSourceSelect} from "@/sdk/api/base/inventory/base/query";
import {FC} from "react";

export interface IInventoryBaseSelectProps extends Partial<IInventoryBasesSourceSelectProps> {
}

export const InventoryBaseSelect: FC<IInventoryBaseSelectProps> = props => {
	return <InventoryBasesFilterProvider>
		<InventoryBasesSourceSelect
			showSearch
			allowClear
			toOption={base => ({
				label: <BaseNameInline base={base}/>,
				value: base.id,
			})}
			{...props}
		/>
	</InventoryBasesFilterProvider>;
};
