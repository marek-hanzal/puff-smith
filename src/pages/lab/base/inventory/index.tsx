import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BaseInventoryList} from "@/puff-smith/site/lab/base/inventory/@module/list/BaseInventoryList";
import {QuickFilter} from "@/puff-smith/site/shared/base/@module/filter/QuickFilter";
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
