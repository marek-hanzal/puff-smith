import {BoosterInventoryList} from "@/puff-smith/site/lab/booster/inventory/@module/list/BoosterInventoryList";
import {BoosterFilter} from "@/puff-smith/site/shared/booster/@module/filter/BoosterFilter";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {IInventoryBoosterSourceSelectProps, InventoryBoosterSourceControlProvider, InventoryBoosterSourceSelect} from "@/sdk/api/booster/inventory/booster/query";
import {FC} from "react";

export interface IInventoryBoosterSelectProps extends Partial<IInventoryBoosterSourceSelectProps> {
}

export const InventoryBoosterSelect: FC<IInventoryBoosterSelectProps> = props => {
	return <InventoryBoosterSourceControlProvider
		defaultOrderBy={{
			pg: "desc",
		}}
	>
		<InventoryBoosterSourceSelect
			showSearch
			allowClear
			toOption={booster => ({
				label: <BoosterNameInline booster={booster}/>,
				value: booster.id,
			})}
			selectionList={() => <BoosterInventoryList
				header={() => <BoosterFilter
					toFilter={filter => ({booster: filter})}
				/>}
			/>}
			{...props}
		/>
	</InventoryBoosterSourceControlProvider>;
};
