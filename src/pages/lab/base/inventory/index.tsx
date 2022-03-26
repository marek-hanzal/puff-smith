import {BaseIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.base.inventory.index"}
		menuSelection={['/lab/base/inventory']}
		icon={<BaseIcon/>}
	>

	</LabPage>;
});
