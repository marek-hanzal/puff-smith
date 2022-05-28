import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BoosterFilter} from "@/puff-smith/site/lab/booster/inventory/@module/filter/BoosterFilter";
import {BoosterInventoryList} from "@/puff-smith/site/lab/booster/inventory/@module/list/BoosterInventoryList";
import {BoosterListToolbar} from "@/puff-smith/site/lab/booster/inventory/@module/list/BoosterListToolbar";
import {BoosterInventoryProviderControl} from "@/sdk/api/inventory/booster/query";
import {SelectionProvider} from "@leight-core/client";
import {Space} from "antd";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.booster.inventory.index"}
		menuSelection={["/lab/booster/inventory"]}
		icon={<BoosterIcon/>}
	>
		<BoosterInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<SelectionProvider type={"multi"}>
				<BoosterInventoryList
					header={() => <Space size={"large"}>
						<BoosterFilter
							toFilter={filter => ({booster: filter})}
						/>
						<BoosterListToolbar/>
					</Space>}
				/>
			</SelectionProvider>
		</BoosterInventoryProviderControl>
	</LabPage>;
});
