import {ModIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.inventory.mod.index"}
		menuSelection={['/lab/inventory/mod']}
		icon={<ModIcon/>}
	>

	</LabPage>;
});
