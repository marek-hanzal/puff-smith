import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {ModInventoryList} from "@/puff-smith/site/inventory/mod/@module/list/ModInventoryList";
import {ModInventoryProviderControl} from "@/sdk/api/inventory/mod/query";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.mod.index"}
		menuSelection={["/inventory/mod"]}
		icon={<ModIcon/>}
	>
		<ModInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<ModInventoryList/>
		</ModInventoryProviderControl>
	</InventoryPage>;
});
