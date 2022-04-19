import {BoosterInventoryList} from "@/puff-smith/site/lab/booster/inventory";
import {BoosterNameInline, QuickFilter} from "@/puff-smith/site/shared/booster";
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
				style={{width: "100%"}}
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
