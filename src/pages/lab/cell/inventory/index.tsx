import {CellIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CellInventoryList} from "@/puff-smith/site/lab/cell/inventory";
import {CellsSourceControlProvider} from "@/sdk/api/cell/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cell.inventory.index"}
		menuSelection={["/lab/cell/inventory"]}
		icon={<CellIcon/>}
	>
		<CellsSourceControlProvider>
			<CellInventoryList/>
		</CellsSourceControlProvider>
	</LabPage>;
});
