import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {AromaFilter} from "@/puff-smith/site/inventory/aroma/@module/filter/AromaFilter";
import {AromaInventoryList} from "@/puff-smith/site/inventory/aroma/@module/list/AromaInventoryList";
import {AromaListToolbar} from "@/puff-smith/site/inventory/aroma/@module/list/AromaListToolbar";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {AromaInventoryProviderControl} from "@/sdk/api/inventory/aroma/query";
import {SelectionProvider} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <LabPage
		onBack={navigate => navigate("/lab/liquid")}
		title={"lab.liquid.create"}
		menuSelection={["/lab/liquid"]}
		icon={<LiquidIcon/>}
	>
		<AromaInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<SelectionProvider type={"multi"}>
				<AromaInventoryList
					header={() => <RowInline
						extra={<AromaListToolbar/>}
					>
						<AromaFilter
							toFilter={filter => ({aroma: filter})}
						/>
					</RowInline>}
				/>
			</SelectionProvider>
		</AromaInventoryProviderControl>
	</LabPage>;
});
