import {CottonIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cotton.inventory.index"}
		menuSelection={['/lab/cotton/inventory']}
		icon={<CottonIcon/>}
	>

	</LabPage>;
});
