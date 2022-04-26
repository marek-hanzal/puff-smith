import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {AromaInventoryList} from "@/puff-smith/site/lab/aroma/inventory/@module/list/AromaInventoryList";
import {AromasInventorySourceControlProvider} from "@/sdk/api/aroma/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.aroma.inventory.index"}
		menuSelection={["/lab/aroma/inventory"]}
		icon={<LiquidIcon/>}
	>
		<AromasInventorySourceControlProvider>
			<AromaInventoryList/>
		</AromasInventorySourceControlProvider>
	</LabPage>;
});
