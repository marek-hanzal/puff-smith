import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BoosterFilter} from "@/puff-smith/site/lab/booster/inventory/@module/filter/BoosterFilter";
import {BoosterInventoryList} from "@/puff-smith/site/lab/booster/inventory/@module/list/BoosterInventoryList";
import {BoosterInventorySourceControlProvider} from "@/sdk/api/booster/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.booster.inventory.index"}
		menuSelection={["/lab/booster/inventory"]}
		icon={<BoosterIcon/>}
	>
		<BoosterInventorySourceControlProvider>
			<BoosterInventoryList
				header={() => <BoosterFilter
					toFilter={filter => ({booster: filter})}
				/>}
			/>
		</BoosterInventorySourceControlProvider>
	</LabPage>;
});
