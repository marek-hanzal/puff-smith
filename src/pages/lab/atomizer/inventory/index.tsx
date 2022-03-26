import {AtomizerIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.atomizer.inventory.index"}
		menuSelection={['/lab/atomizer/inventory']}
		icon={<AtomizerIcon/>}
	>

	</LabPage>;
});
