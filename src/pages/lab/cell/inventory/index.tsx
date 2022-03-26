import {CellIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CellsSourceControlProvider} from "@/sdk/api/cell/query";
import {CellInventoryList} from "@/puff-smith/site/lab/cell/inventory";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cell.inventory.index"}
		menuSelection={['/lab/cell/inventory']}
		icon={<CellIcon/>}
	>
		<CellsSourceControlProvider>
			<CellInventoryList/>
		</CellsSourceControlProvider>
	</LabPage>;
});
