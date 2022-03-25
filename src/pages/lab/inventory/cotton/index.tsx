import {CottonIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.inventory.cotton.index"}
		menuSelection={['/lab/inventory/cotton']}
		icon={<CottonIcon/>}
	>

	</LabPage>;
});
