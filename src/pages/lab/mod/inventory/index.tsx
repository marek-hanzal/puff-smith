import {ModIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {ModInventoryList} from "@/puff-smith/site/lab/mod/inventory";
import {ModsInventorySourceControlProvider} from "@/sdk/api/mod/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mod.inventory.index"}
		menuSelection={["/lab/mod/inventory"]}
		icon={<ModIcon/>}
	>
		<ModsInventorySourceControlProvider>
			<ModInventoryList/>
		</ModsInventorySourceControlProvider>
	</LabPage>;
});
