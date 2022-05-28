import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {BoosterFilter} from "@/puff-smith/site/inventory/booster/@module/filter/BoosterFilter";
import {BoosterInventoryList} from "@/puff-smith/site/inventory/booster/@module/list/BoosterInventoryList";
import {BoosterListToolbar} from "@/puff-smith/site/inventory/booster/@module/list/BoosterListToolbar";
import {BoosterInventoryProviderControl} from "@/sdk/api/inventory/booster/query";
import {SelectionProvider} from "@leight-core/client";
import {Space} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.booster.index"}
		menuSelection={["/inventory/booster"]}
		icon={<BoosterIcon/>}
	>
		<BoosterInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<SelectionProvider type={"multi"}>
				<BoosterInventoryList
					header={() => <Space size={"large"}>
						<BoosterFilter
							toFilter={filter => ({booster: filter})}
						/>
						<BoosterListToolbar/>
					</Space>}
				/>
			</SelectionProvider>
		</BoosterInventoryProviderControl>
	</InventoryPage>;
});
