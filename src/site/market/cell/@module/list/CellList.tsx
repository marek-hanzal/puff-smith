import {Tags} from "@/puff-smith";
import {CellInventoryCreateButton} from "@/puff-smith/site/market/cell";
import {CellNameInline} from "@/puff-smith/site/shared/cell";
import {CellsListSource, ICellsListSourceProps} from "@/sdk/api/cell/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
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
					<CellNameInline cell={cell}/>
					<Tags tags={[cell.type]}/>
					<CellInventoryCreateButton type={"link"} cell={cell}/>
				</Space>}
			/>
		</ListItem>}
	</CellsListSource>;
};
