import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {Volt} from "@/puff-smith/component/inline/Volt";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {CellInventorySource} from "@/puff-smith/service/cell/inventory/CellInventorySource";
import {ICellInventoryFetch} from "@/puff-smith/service/cell/inventory/interface";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {CellIndexMenu} from "@/puff-smith/site/inventory/cell/@module/menu/CellIndexMenu";
import {CellInfoCreateButton} from "@/puff-smith/site/inventory/cell/info/@module/button/CellInfoCreateButton";
import {CellInfoList} from "@/puff-smith/site/inventory/cell/info/@module/list/CellInfoList";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {CellInfoProviderControl} from "@/sdk/api/cell/info/query";
import {ToolOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs} from "@leight-core/client";
import {toHumanNumber} from "@leight-core/utils";
import {Divider, Space} from "antd";

export default withInventoryLayout(function Info({cellInventory}: ICellInventoryFetch) {
	return <InventoryPage
		title={"inventory.cell.info"}
		menuSelection={["/inventory/cell", "/inventory/cell/[cellInventoryId]/info"]}
		icon={<ToolOutlined/>}
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
				icon={<ToolOutlined/>}
				label={"inventory.cell.info.label"}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "inventory.cell.info",
		}}
		footer={<CellIndexMenu cellInventory={cellInventory}/>}
	>
		<CellInfoProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				cellInventoryId: cellInventory.id,
			}}
			defaultOrderBy={{
				created: "desc",
			}}
		>
			<CellInfoList
				header={() => <RowInline
					extra={<CellInfoCreateButton cellInventory={cellInventory}/>}
				>
					<Space split={<Divider type={"vertical"}/>} size={4}>
						<CellNameInline cell={cellInventory.cell}/>
						<CodeInline code={cellInventory}/>
						<Volt volt={cellInventory.cell.voltageMax}/>
						{toHumanNumber(cellInventory.cell.capacity)}
					</Space>
				</RowInline>}
			/>
		</CellInfoProviderControl>
	</InventoryPage>;
});

export const getServerSideProps = CellInventorySource().withFetch("cellInventory", "cellInventoryId");
