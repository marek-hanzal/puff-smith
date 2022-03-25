import {LiquidIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.inventory.aroma.index"}
		menuSelection={['/lab/inventory/aroma']}
		icon={<LiquidIcon/>}
	>

	</LabPage>;
});
