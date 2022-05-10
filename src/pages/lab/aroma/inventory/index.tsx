import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {AromaFilter} from "@/puff-smith/site/lab/aroma/inventory/@module/filter/AromaFilter";
import {AromaInventoryList} from "@/puff-smith/site/lab/aroma/inventory/@module/list/AromaInventoryList";
import {AromaInventorySourceControlProvider} from "@/sdk/api/aroma/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.aroma.inventory.index"}
		menuSelection={["/lab/aroma/inventory"]}
		icon={<LiquidIcon/>}
	>
		<AromaInventorySourceControlProvider>
			<AromaInventoryList
				header={() => <AromaFilter
					toFilter={filter => ({aroma: filter})}
				/>}
			/>
		</AromaInventorySourceControlProvider>
	</LabPage>;
});
