import {ModIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mod.inventory.index"}
		menuSelection={['/lab/mod/inventory']}
		icon={<ModIcon/>}
	>

	</LabPage>;
});
