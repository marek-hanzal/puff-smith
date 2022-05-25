import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {CellInventoryList} from "@/puff-smith/site/lab/cell/inventory/@module/list/CellInventoryList";
import {CellInventoryProviderControl} from "@/sdk/api/cell/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cell.inventory.index"}
		menuSelection={["/lab/cell/inventory"]}
		icon={<CellIcon/>}
	>
		<CellInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<CellInventoryList/>
		</CellInventoryProviderControl>
	</LabPage>;
});
