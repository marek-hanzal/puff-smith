import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {CottonInventoryList} from "@/puff-smith/site/inventory/cotton/@module/list/CottonInventoryList";
import {CottonInventoryProviderControl} from "@/sdk/api/inventory/cotton/query";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.cotton.index"}
		menuSelection={["/inventory/cotton"]}
		icon={<CottonIcon/>}
	>
		<CottonInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<CottonInventoryList/>
		</CottonInventoryProviderControl>
	</InventoryPage>;
});
