import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BaseInventoryList} from "@/puff-smith/site/lab/base/inventory/@module/list/BaseInventoryList";
import {BaseFilter} from "@/puff-smith/site/shared/base/@module/filter/BaseFilter";
import {BasesInventorySourceControlProvider} from "@/sdk/api/base/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.base.inventory.index"}
		menuSelection={["/lab/base/inventory"]}
		icon={<BaseIcon/>}
	>
		<BasesInventorySourceControlProvider>
			<BaseInventoryList
				header={() => <BaseFilter
					toFilter={filter => ({base: filter})}
					toForm={filter => filter?.base}
				/>}
			/>
		</BasesInventorySourceControlProvider>
	</LabPage>;
});
