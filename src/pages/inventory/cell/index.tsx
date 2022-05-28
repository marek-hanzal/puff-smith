import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {CellInventoryList} from "@/puff-smith/site/inventory/cell/@module/list/CellInventoryList";
import {CellInventoryProviderControl} from "@/sdk/api/inventory/cell/query";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.cell.index"}
		menuSelection={["/inventory/cell"]}
		icon={<CellIcon/>}
	>
		<CellInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<CellInventoryList/>
		</CellInventoryProviderControl>
	</InventoryPage>;
});
