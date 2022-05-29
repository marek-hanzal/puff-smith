import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {CellInventoryList} from "@/puff-smith/site/inventory/cell/@module/list/CellInventoryList";
import {CellListToolbar} from "@/puff-smith/site/inventory/cell/@module/list/CellListToolbar";
import {CellInventoryProviderControl} from "@/sdk/api/inventory/cell/query";
import {SelectionProvider} from "@leight-core/client";
import {Space} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.cell.index"}
		menuSelection={["/inventory/cell"]}
		icon={<CellIcon/>}
	>
		<CellInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<SelectionProvider type={"multi"}>
				<CellInventoryList
					header={() => <Space size={"large"}>
						<CellListToolbar/>
					</Space>}
				/>
			</SelectionProvider>
		</CellInventoryProviderControl>
	</InventoryPage>;
});
