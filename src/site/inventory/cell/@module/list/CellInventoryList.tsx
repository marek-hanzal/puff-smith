import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {CellListEmpty} from "@/puff-smith/site/inventory/cell/@module/list/CellListEmpty";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {CellInventoryListSource, ICellInventoryListSourceProps} from "@/sdk/api/inventory/cell/query";
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
					<SelectionBool selection={cellInventory}/>
					<CellNameInline cell={cellInventory.cell}/>
					<CodeInline code={cellInventory}/>
					<Tags tags={[cellInventory.cell.type]}/>
				</Space>}
			/>
		</ListItem>}
	</CellInventoryListSource>;
};
