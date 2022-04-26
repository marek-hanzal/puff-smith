import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BoosterInventoryList} from "@/puff-smith/site/lab/booster/inventory/@module/list/BoosterInventoryList";
import {QuickFilter} from "@/puff-smith/site/shared/booster/@module/filter/QuickFilter";
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
