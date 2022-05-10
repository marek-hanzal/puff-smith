import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {Tags} from "@/puff-smith/component/Tags";
import {CellListEmpty} from "@/puff-smith/site/lab/cell/inventory/@module/list/CellListEmpty";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {CellInventoryListSource, ICellInventoryListSourceProps} from "@/sdk/api/cell/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICellInventoryListProps extends Partial<ICellInventoryListSourceProps> {
}

export const CellInventoryList: FC<ICellInventoryListProps> = props => {
	return <CellInventoryListSource
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
	</CellInventoryListSource>;
};
