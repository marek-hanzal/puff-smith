import {BaseIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.inventory.base.index"}
		menuSelection={['/lab/inventory/base']}
		icon={<BaseIcon/>}
	>

	</LabPage>;
});
