import {BaseIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BaseInventoryList} from "@/puff-smith/site/lab/base/inventory";
import {BasesSourceControlProvider} from "@/sdk/api/base/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.base.inventory.index"}
		menuSelection={["/lab/base/inventory"]}
		icon={<BaseIcon/>}
	>
		<BasesSourceControlProvider>
			<BaseInventoryList/>
		</BasesSourceControlProvider>
	</LabPage>;
});
