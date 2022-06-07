import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {BoosterFilter} from "@/puff-smith/site/inventory/booster/@module/filter/BoosterFilter";
import {BoosterInventoryList} from "@/puff-smith/site/inventory/booster/@module/list/BoosterInventoryList";
import {BoosterListToolbar} from "@/puff-smith/site/inventory/booster/@module/list/BoosterListToolbar";
import {BoosterInventoryProviderControl} from "@/sdk/api/inventory/booster/query";
import {SelectionProvider} from "@leight-core/client";

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
					header={() => <RowInline
						extra={<BoosterListToolbar/>}
					>
						<BoosterFilter
							toFilter={filter => ({booster: filter})}
						/>
					</RowInline>}
				/>
			</SelectionProvider>
		</BoosterInventoryProviderControl>
	</InventoryPage>;
});
