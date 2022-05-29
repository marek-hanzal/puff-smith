import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {WireInventoryList} from "@/puff-smith/site/inventory/wire/@module/list/WireInventoryList";
import {WireListToolbar} from "@/puff-smith/site/inventory/wire/@module/list/WireListToolbar";
import {WireInventoryProviderControl} from "@/sdk/api/inventory/wire/query";
import {SelectionProvider} from "@leight-core/client";
import {Space} from "antd";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.wire.index"}
		menuSelection={["/inventory/wire"]}
		icon={<WireIcon/>}
	>
		<WireInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<SelectionProvider type={"multi"}>
				<WireInventoryList
					header={() => <Space size={"large"}>
						<WireListToolbar/>
					</Space>}
				/>
			</SelectionProvider>
		</WireInventoryProviderControl>
	</InventoryPage>;
});
