import {BoosterIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BoosterInventoryList} from "@/puff-smith/site/lab/booster/inventory";
import {QuickFilter} from "@/puff-smith/site/shared/booster";
import {BoostersInventorySourceControlProvider} from "@/sdk/api/booster/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.booster.inventory.index"}
		menuSelection={["/lab/booster/inventory"]}
		icon={<BoosterIcon/>}
	>
		<BoostersInventorySourceControlProvider>
			<BoosterInventoryList
				header={() => <QuickFilter
					toFilter={filter => ({booster: filter})}
					fromFilter={filter => filter?.booster}
				/>}
			/>
		</BoostersInventorySourceControlProvider>
	</LabPage>;
});
