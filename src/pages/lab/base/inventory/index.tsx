import {BaseIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BasesSourceControlProvider} from "@/sdk/api/base/query";
import {BaseInventoryList} from "@/puff-smith/site/lab/base/inventory";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.base.inventory.index"}
		menuSelection={['/lab/base/inventory']}
		icon={<BaseIcon/>}
	>
		<BasesSourceControlProvider>
			<BaseInventoryList/>
		</BasesSourceControlProvider>
	</LabPage>;
});
