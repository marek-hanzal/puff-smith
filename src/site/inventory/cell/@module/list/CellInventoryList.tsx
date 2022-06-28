import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {CellRatingButton} from "@/puff-smith/site/inventory/cell/@module/button/CellRatingButton";
import {CellListEmpty} from "@/puff-smith/site/inventory/cell/@module/list/CellListEmpty";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {CellInventoryListSource, ICellInventoryListSourceProps} from "@/sdk/api/inventory/cell/query";
import {ButtonLink, ListItem, ListItemMeta} from "@leight-core/client";
import {toHumanNumber} from "@leight-core/utils";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICellInventoryListProps extends Partial<ICellInventoryListSourceProps> {
}

export const CellInventoryList: FC<ICellInventoryListProps> = props => {
	return <CellInventoryListSource
		emptyText={<CellListEmpty/>}
		{...props}
	>
		{cellInventory => <ListItem
			key={cellInventory.id}
			extra={<CellRatingButton cellInventory={cellInventory}/>}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={cellInventory}/>
					<ButtonLink
						size={"small"}
						type={"link"}
						href={"/inventory/cell/[cellInventoryId]"}
						query={{
							cellInventoryId: cellInventory.id,
						}}
						label={<CellNameInline cell={cellInventory.cell}/>}
					/>
					<Ohm ohm={cellInventory.cell.ohm} tooltip={"common.cell.ohm.tooltip"}/>
					<CodeInline code={cellInventory}/>
					{toHumanNumber(cellInventory.cell.capacity)}
					<Tags tags={[cellInventory.cell.type]}/>
				</Space>}
			/>
		</ListItem>}
	</CellInventoryListSource>;
};
