import {BoosterNameInline} from "@/puff-smith/site/shared/booster";
import {IInventoryBoostersSourceSelectProps, InventoryBoostersFilterProvider, InventoryBoostersSourceSelect} from "@/sdk/api/booster/inventory/booster/query";
import {FC} from "react";

export interface IInventoryBoosterSelectProps extends Partial<IInventoryBoostersSourceSelectProps> {
}

export const InventoryBoosterSelect: FC<IInventoryBoosterSelectProps> = props => {
	return <InventoryBoostersFilterProvider>
		<InventoryBoostersSourceSelect
			showSearch
			allowClear
			toOption={booster => ({
				label: <BoosterNameInline booster={booster}/>,
				value: booster.id,
			})}
			{...props}
		/>
	</InventoryBoostersFilterProvider>;
};
