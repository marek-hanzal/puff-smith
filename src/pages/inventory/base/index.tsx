import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {BaseFilter} from "@/puff-smith/site/inventory/base/@module/filter/BaseFilter";
import {BaseInventoryList} from "@/puff-smith/site/inventory/base/@module/list/BaseInventoryList";
import {BaseListToolbar} from "@/puff-smith/site/inventory/base/@module/list/BaseListToolbar";
import {BaseInventoryProviderControl} from "@/sdk/api/inventory/base/query";
import {SelectionProvider} from "@leight-core/client";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.base.index"}
		menuSelection={["/inventory/base"]}
		icon={<BaseIcon/>}
	>
		<BaseInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<SelectionProvider type={"multi"}>
				<BaseInventoryList
					header={() => <RowInline
						extra={<BaseListToolbar/>}
					>
						<BaseFilter
							toFilter={filter => ({base: filter})}
						/>
					</RowInline>}
				/>
			</SelectionProvider>
		</BaseInventoryProviderControl>
	</InventoryPage>;
});
