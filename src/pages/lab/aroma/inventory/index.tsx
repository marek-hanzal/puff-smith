import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {AromaFilter} from "@/puff-smith/site/lab/aroma/inventory/@module/filter/AromaFilter";
import {AromaInventoryList} from "@/puff-smith/site/lab/aroma/inventory/@module/list/AromaInventoryList";
import {AromaListToolbar} from "@/puff-smith/site/lab/aroma/inventory/@module/list/AromaListToolbar";
import {AromaInventoryProviderControl} from "@/sdk/api/aroma/inventory/query";
import {SelectionProvider} from "@leight-core/client";
import {Space} from "antd";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.aroma.inventory.index"}
		menuSelection={["/lab/aroma/inventory"]}
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
	</LabPage>;
});
