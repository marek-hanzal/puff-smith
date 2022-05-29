import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {CottonInventoryList} from "@/puff-smith/site/inventory/cotton/@module/list/CottonInventoryList";
import {CottonListToolbar} from "@/puff-smith/site/inventory/cotton/@module/list/CottonListToolbar";
import {CottonInventoryProviderControl} from "@/sdk/api/inventory/cotton/query";
import {SelectionProvider} from "@leight-core/client";
import {Space} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.cotton.index"}
		menuSelection={["/inventory/cotton"]}
		icon={<CottonIcon/>}
	>
		<CottonInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<SelectionProvider type={"multi"}>
				<CottonInventoryList
					header={() => <Space size={"large"}>
						<CottonListToolbar/>
					</Space>}
				/>
			</SelectionProvider>
		</CottonInventoryProviderControl>
	</InventoryPage>;
});
