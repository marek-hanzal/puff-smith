import {BoosterInventoryList} from "@/puff-smith/site/lab/booster/inventory/@module/list/BoosterInventoryList";
import {QuickFilter} from "@/puff-smith/site/shared/booster/@module/filter/QuickFilter";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {IInventoryBoostersSourceSelectProps, InventoryBoostersFilterProvider, InventoryBoostersOrderByProvider, InventoryBoostersSourceSelect} from "@/sdk/api/booster/inventory/booster/query";
import {FC} from "react";

export interface IInventoryBoosterSelectProps extends Partial<IInventoryBoostersSourceSelectProps> {
}

export const InventoryBoosterSelect: FC<IInventoryBoosterSelectProps> = props => {
	return <InventoryBoostersFilterProvider>
		<InventoryBoostersOrderByProvider
			defaultOrderBy={{
				pg: "desc",
			}}
		>
			<InventoryBoostersSourceSelect
				showSearch
				allowClear
				toOption={booster => ({
					label: <BoosterNameInline booster={booster}/>,
					value: booster.id,
				})}
				selectionList={() => <BoosterInventoryList
					header={() => <QuickFilter
						toFilter={filter => ({booster: filter})}
						fromFilter={filter => filter?.booster}
						direction={"vertical"}
					/>}
				/>}
				{...props}
			/>
		</InventoryBoostersOrderByProvider>
	</InventoryBoostersFilterProvider>;
};
