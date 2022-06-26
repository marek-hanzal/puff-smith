import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {CellInventorySource} from "@/puff-smith/service/cell/inventory/CellInventorySource";
import {ICellInventoryFetch} from "@/puff-smith/service/cell/inventory/interface";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {CellIndexMenu} from "@/puff-smith/site/inventory/cell/@module/menu/CellIndexMenu";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {CommentOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs} from "@leight-core/client";

export default withInventoryLayout(function Comment({cellInventory}: ICellInventoryFetch) {
	return <InventoryPage
		title={"inventory.cell.comment"}
		menuSelection={["/inventory/cell", "/inventory/cell/[cellInventoryId]/comment"]}
		icon={<CommentOutlined/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/inventory"}
				icon={<InventoryIcon/>}
			/>
			<BreadcrumbButton
				href={"/inventory/cell"}
				label={"inventory.cell.label"}
			/>
			<BreadcrumbButton
				href={"/inventory/cell/[cellInventoryId]"}
				query={{cellInventoryId: cellInventory.id}}
				label={<CellNameInline cell={cellInventory.cell}/>}
			/>
			<BreadcrumbIcon
				icon={<CommentOutlined/>}
				label={"inventory.cell.comment.label"}
			/>
		</Breadcrumbs>}
		headerProps={{
			footer: <CellIndexMenu cellInventory={cellInventory}/>,
		}}
	>
		komenty budou
	</InventoryPage>;
});

export const getServerSideProps = CellInventorySource().withFetch("cellInventory", "cellInventoryId");
