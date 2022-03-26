import {CellIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.cell.inventory.index"}
		menuSelection={['/lab/cell/inventory']}
		icon={<CellIcon/>}
	>

	</LabPage>;
});
