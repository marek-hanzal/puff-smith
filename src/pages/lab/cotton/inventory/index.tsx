import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {CottonInventoryList} from "@/puff-smith/site/lab/cotton/inventory/@module/list/CottonInventoryList";
import {CottonsInventorySourceControlProvider} from "@/sdk/api/cotton/inventory/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cotton.inventory.index"}
		menuSelection={["/lab/cotton/inventory"]}
		icon={<CottonIcon/>}
	>
		<CottonsInventorySourceControlProvider>
			<CottonInventoryList/>
		</CottonsInventorySourceControlProvider>
	</LabPage>;
});
