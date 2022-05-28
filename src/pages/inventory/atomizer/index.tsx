import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {AtomizerInventoryList} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerInventoryList";
import {AtomizerInventoryProviderControl} from "@/sdk/api/inventory/atomizer/query";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.atomizer.index"}
		menuSelection={["/inventory/atomizer"]}
		icon={<AtomizerIcon/>}
	>
		<AtomizerInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<AtomizerInventoryList/>
		</AtomizerInventoryProviderControl>
	</InventoryPage>;
});
