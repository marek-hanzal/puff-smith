import {BoosterIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.booster.inventory.index"}
		menuSelection={['/lab/booster/inventory']}
		icon={<BoosterIcon/>}
	>

	</LabPage>;
});
