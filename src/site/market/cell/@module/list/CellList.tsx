import {CellInventoryCreateButton} from "@/puff-smith/site/market/cell";
import {CellsListSource, ICellsListSourceProps} from "@/sdk/api/cell/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface ICellListProps extends Partial<ICellsListSourceProps> {
}

export const CellList: FC<ICellListProps> = props => {
	return <CellsListSource
		{...props}
	>
		{cell => <ListItem key={cell.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{cell.name}
					<Typography.Text type={"secondary"}>{cell.vendor.name}</Typography.Text>
					<CellInventoryCreateButton type={"link"} cell={cell}/>
				</Space>}
			/>
		</ListItem>}
	</CellsListSource>;
};
