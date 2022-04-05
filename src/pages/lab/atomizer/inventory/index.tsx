import {AtomizerIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerInventoryList} from "@/puff-smith/site/lab/atomizer/inventory";
import {AtomizersSourceControlProvider} from "@/sdk/api/atomizer/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.atomizer.inventory.index"}
		menuSelection={["/lab/atomizer/inventory"]}
		icon={<AtomizerIcon/>}
	>
		<AtomizersSourceControlProvider>
			<AtomizerInventoryList/>
		</AtomizersSourceControlProvider>
	</LabPage>;
});
