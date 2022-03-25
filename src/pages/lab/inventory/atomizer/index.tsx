import {AtomizerIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.inventory.atomizer.index"}
		menuSelection={['/lab/inventory/atomizer']}
		icon={<AtomizerIcon/>}
	>

	</LabPage>;
});
