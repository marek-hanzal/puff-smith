import {IInventoryBasesSourceSelectProps, InventoryBasesSourceSelect} from "@/sdk/api/base/inventory/base/query";
import {FC} from "react";
import {BaseNameInline} from "@/puff-smith/site/shared/base";

export interface IInventoryBaseSelectProps extends Partial<IInventoryBasesSourceSelectProps> {
}

export const InventoryBaseSelect: FC<IInventoryBaseSelectProps> = props => {
	return <InventoryBasesSourceSelect
		showSearch
		allowClear
		toOption={base => ({
			label: <BaseNameInline base={base}/>,
			value: base.id,
		})}
		{...props}
	/>
}
