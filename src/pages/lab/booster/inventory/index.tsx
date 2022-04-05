import {BoosterIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BoosterInventoryList} from "@/puff-smith/site/lab/booster/inventory";
import {BoostersSourceControlProvider} from "@/sdk/api/booster/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.booster.inventory.index"}
		menuSelection={["/lab/booster/inventory"]}
		icon={<BoosterIcon/>}
	>
		<BoostersSourceControlProvider>
			<BoosterInventoryList/>
		</BoostersSourceControlProvider>
	</LabPage>;
});
