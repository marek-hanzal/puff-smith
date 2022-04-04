import {IInventoryBoostersSourceSelectProps, InventoryBoostersSourceSelect} from "@/sdk/api/booster/inventory/booster/query";
import {FC} from "react";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster";

export interface IInventoryBoosterSelectProps extends Partial<IInventoryBoostersSourceSelectProps> {
}

export const InventoryBoosterSelect: FC<IInventoryBoosterSelectProps> = props => {
	return <InventoryBoostersSourceSelect
		showSearch
		allowClear
		toOption={booster => ({
			label: <BoosterNameInline booster={booster}/>,
			value: booster.id,
		})}
		{...props}
	/>
}
