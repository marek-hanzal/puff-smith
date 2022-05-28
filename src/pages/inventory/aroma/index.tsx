import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {AromaFilter} from "@/puff-smith/site/inventory/aroma/@module/filter/AromaFilter";
import {AromaInventoryList} from "@/puff-smith/site/inventory/aroma/@module/list/AromaInventoryList";
import {AromaListToolbar} from "@/puff-smith/site/inventory/aroma/@module/list/AromaListToolbar";
import {AromaInventoryProviderControl} from "@/sdk/api/inventory/aroma/query";
import {SelectionProvider} from "@leight-core/client";
import {Space} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.aroma.index"}
		menuSelection={["/inventory/aroma"]}
		icon={<LiquidIcon/>}
	>
		<AromaInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<SelectionProvider type={"multi"}>
				<AromaInventoryList
					header={() => <Space size={"large"}>
						<AromaFilter
							toFilter={filter => ({aroma: filter})}
						/>
						<AromaListToolbar/>
					</Space>}
				/>
			</SelectionProvider>
		</AromaInventoryProviderControl>
	</InventoryPage>;
});
