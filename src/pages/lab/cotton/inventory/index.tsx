import {CottonIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CottonsSourceControlProvider} from "@/sdk/api/cotton/query";
import {CottonInventoryList} from "@/puff-smith/site/lab/cotton/inventory";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cotton.inventory.index"}
		menuSelection={['/lab/cotton/inventory']}
		icon={<CottonIcon/>}
	>
		<CottonsSourceControlProvider>
			<CottonInventoryList/>
		</CottonsSourceControlProvider>
	</LabPage>;
});
