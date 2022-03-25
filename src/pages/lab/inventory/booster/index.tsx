import {BoosterIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.inventory.booster.index"}
		menuSelection={['/lab/inventory/booster']}
		icon={<BoosterIcon/>}
	>

	</LabPage>;
});
