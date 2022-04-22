import {CodeInline, Tags} from "@/puff-smith";
import {CellListEmpty} from "@/puff-smith/site/lab/cell/inventory";
import {CellNameInline} from "@/puff-smith/site/shared/cell";
import {CellsInventoryListSource, ICellsInventoryListSourceProps} from "@/sdk/api/cell/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICellInventoryListProps extends Partial<ICellsInventoryListSourceProps> {
}

export const CellInventoryList: FC<ICellInventoryListProps> = props => {
	return <CellsInventoryListSource
		locale={{
			emptyText: <CellListEmpty/>
		}}
		{...props}
	>
		{cellInventory => <ListItem key={cellInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<CellNameInline cell={cellInventory.cell}/>
					<CodeInline code={cellInventory}/>
					<Tags tags={[cellInventory.cell.type]}/>
				</Space>}
			/>
		</ListItem>}
	</CellsInventoryListSource>;
};
