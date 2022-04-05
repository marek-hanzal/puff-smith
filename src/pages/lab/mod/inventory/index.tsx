import {ModIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {ModInventoryList} from "@/puff-smith/site/lab/mod/inventory";
import {ModsSourceControlProvider} from "@/sdk/api/mod/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mod.inventory.index"}
		menuSelection={["/lab/mod/inventory"]}
		icon={<ModIcon/>}
	>
		<ModsSourceControlProvider>
			<ModInventoryList/>
		</ModsSourceControlProvider>
	</LabPage>;
});
