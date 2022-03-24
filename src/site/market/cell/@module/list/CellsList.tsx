import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Divider, Space, Typography} from "antd";
import {CellsListSource, ICellsListSourceProps} from "@/sdk/api/cell/query";
import {CellTransactionCreateButton} from "@/puff-smith/site/market/cell";

export interface ICellsListProps extends Partial<ICellsListSourceProps> {
}

export const CellsList: FC<ICellsListProps> = props => {
	return <CellsListSource
		itemLayout={'vertical'}
		{...props}
	>
		{cell => <ListItem key={cell.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{cell.name}
					<Typography.Text type={'secondary'}>{cell.vendor.name}</Typography.Text>
					<CellTransactionCreateButton type={'link'} cell={cell}/>
				</Space>}
			/>
		</ListItem>}
	</CellsListSource>;
}
