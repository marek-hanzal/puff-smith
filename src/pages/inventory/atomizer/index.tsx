import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {AtomizerFilter} from "@/puff-smith/site/inventory/atomizer/@module/filter/AtomizerFilter";
import {AtomizerInventoryList} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerInventoryList";
import {AtomizerListToolbar} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerListToolbar";
import {AtomizerInventoryProviderControl} from "@/sdk/api/inventory/atomizer/query";
import {SelectionProvider} from "@leight-core/client";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.atomizer.index"}
		menuSelection={["/inventory/atomizer"]}
		icon={<AtomizerIcon/>}
	>
		<AtomizerInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<SelectionProvider type={"multi"}>
				<AtomizerInventoryList
					header={() => <RowInline
						extra={<AtomizerListToolbar/>}
					>
						<AtomizerFilter
							toFilter={values => ({atomizer: values})}
						/>
					</RowInline>}
				/>
			</SelectionProvider>
		</AtomizerInventoryProviderControl>
	</InventoryPage>;
});
