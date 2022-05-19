import {BoosterInventoryList} from "@/puff-smith/site/lab/booster/inventory/@module/list/BoosterInventoryList";
import {BoosterFilter} from "@/puff-smith/site/shared/booster/@module/filter/BoosterFilter";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterInventorySourceControlProvider, BoosterInventorySourceSelect, IBoosterInventorySourceSelectProps} from "@/sdk/api/booster/inventory/query";
import {FC} from "react";

export interface IBoosterInventorySelectProps extends Partial<IBoosterInventorySourceSelectProps> {
}

export const BoosterInventorySelect: FC<IBoosterInventorySelectProps> = props => {
	return <BoosterInventorySourceControlProvider
		defaultOrderBy={{
			booster: {pg: "desc"},
		}}
	>
		<BoosterInventorySourceSelect
			showSearch
			allowClear
			toOption={({booster}) => ({
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
	</BoosterInventorySourceControlProvider>;
};
