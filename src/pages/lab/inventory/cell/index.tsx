import {CellIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.inventory.cell.index"}
		menuSelection={['/lab/inventory/cell']}
		icon={<CellIcon/>}
	>

	</LabPage>;
});
