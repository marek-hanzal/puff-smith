import {BoosterIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BoostersSourceControlProvider} from "@/sdk/api/booster/query";
import {BoosterInventoryList} from "@/puff-smith/site/lab/booster/inventory";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.booster.inventory.index"}
		menuSelection={['/lab/booster/inventory']}
		icon={<BoosterIcon/>}
	>
		<BoostersSourceControlProvider>
			<BoosterInventoryList/>
		</BoostersSourceControlProvider>
	</LabPage>;
});
