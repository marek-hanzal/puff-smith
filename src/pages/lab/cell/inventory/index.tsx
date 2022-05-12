import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {CellInventoryList} from "@/puff-smith/site/lab/cell/inventory/@module/list/CellInventoryList";
import {CellInventorySourceControlProvider} from "@/sdk/api/cell/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cell.inventory.index"}
		menuSelection={["/lab/cell/inventory"]}
		icon={<CellIcon/>}
	>
		<CellInventorySourceControlProvider
			defaultSize={10}
		>
			<CellInventoryList/>
		</CellInventorySourceControlProvider>
	</LabPage>;
});
