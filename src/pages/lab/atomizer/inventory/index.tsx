import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {AtomizerInventoryList} from "@/puff-smith/site/lab/atomizer/inventory/@module/list/AtomizerInventoryList";
import {AtomizerInventorySourceControlProvider} from "@/sdk/api/atomizer/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.atomizer.inventory.index"}
		menuSelection={["/lab/atomizer/inventory"]}
		icon={<AtomizerIcon/>}
	>
		<AtomizerInventorySourceControlProvider
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<AtomizerInventoryList/>
		</AtomizerInventorySourceControlProvider>
	</LabPage>;
});
