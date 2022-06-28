import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {CellInventorySource} from "@/puff-smith/service/cell/inventory/CellInventorySource";
import {ICellInventoryFetch} from "@/puff-smith/service/cell/inventory/interface";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {CellIndexMenu} from "@/puff-smith/site/inventory/cell/@module/menu/CellIndexMenu";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {CellView} from "@/puff-smith/site/shared/cell/@module/view/CellView";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, Template} from "@leight-core/client";

export default withInventoryLayout(function Index({cellInventory}: ICellInventoryFetch) {
	return <InventoryPage
		title={"inventory.cell.cell"}
		menuSelection={["/inventory/cell", "/inventory/cell/[cellInventoryId]"]}
		icon={<CellIcon/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/inventory"}
				icon={<InventoryIcon/>}
			/>
			<BreadcrumbButton
				href={"/inventory/cell"}
				label={"inventory.cell.label"}
			/>
			<BreadcrumbIcon
				icon={<CellIcon/>}
				label={<CellNameInline cell={cellInventory.cell}/>}
			/>
		</Breadcrumbs>}
		footer={<CellIndexMenu cellInventory={cellInventory}/>}
	>
		<Template>
			<CellView cell={cellInventory.cell}/>
		</Template>
	</InventoryPage>;
});

export const getServerSideProps = CellInventorySource().withFetch("cellInventory", "cellInventoryId");
