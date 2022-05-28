import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {CottonInventoryList} from "@/puff-smith/site/lab/cotton/inventory/@module/list/CottonInventoryList";
import {CottonInventoryProviderControl} from "@/sdk/api/inventory/cotton/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cotton.inventory.index"}
		menuSelection={["/lab/cotton/inventory"]}
		icon={<CottonIcon/>}
	>
		<CottonInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<CottonInventoryList/>
		</CottonInventoryProviderControl>
	</LabPage>;
});
