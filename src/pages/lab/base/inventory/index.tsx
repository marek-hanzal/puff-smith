import {BaseIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BaseInventoryList} from "@/puff-smith/site/lab/base/inventory";
import {QuickFilter} from "@/puff-smith/site/shared/base";
import {BasesInventorySourceControlProvider} from "@/sdk/api/base/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.base.inventory.index"}
		menuSelection={["/lab/base/inventory"]}
		icon={<BaseIcon/>}
	>
		<BasesInventorySourceControlProvider>
			<BaseInventoryList
				header={() => <QuickFilter
					toFilter={filter => ({base: filter})}
					fromFilter={filter => filter?.base}
				/>}
			/>
		</BasesInventorySourceControlProvider>
	</LabPage>;
});
