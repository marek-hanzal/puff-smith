import {CellsInventoryListSource, ICellsInventoryListSourceProps} from "@/sdk/api/cell/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface ICellInventoryListProps extends Partial<ICellsInventoryListSourceProps> {
}

export const CellInventoryList: FC<ICellInventoryListProps> = props => {
	return <CellsInventoryListSource
		{...props}
	>
		{cellInventory => <ListItem key={cellInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{cellInventory.cell.name}
					<Typography.Text type={"secondary"}>{cellInventory.cell.vendor.name}</Typography.Text>
				</Space>}
			/>
		</ListItem>}
	</CellsInventoryListSource>;
};
