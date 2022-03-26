import {LiquidIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {AromaInventoryList} from "@/puff-smith/site/lab/aroma/inventory";
import {AromasSourceControlProvider} from "@/sdk/api/aroma/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.aroma.inventory.index"}
		menuSelection={['/lab/aroma/inventory']}
		icon={<LiquidIcon/>}
	>
		<AromasSourceControlProvider>
			<AromaInventoryList/>
		</AromasSourceControlProvider>
	</LabPage>;
});
