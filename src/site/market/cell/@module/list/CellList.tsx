import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {Tags} from "@/puff-smith/component/Tags";
import {CellInventoryCreateButton} from "@/puff-smith/site/market/cell/@module/button/CellInventoryCreateButton";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {CellMarketListSource, ICellMarketListSourceProps} from "@/sdk/api/cell/market/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICellListProps extends Partial<ICellMarketListSourceProps> {
}

export const CellList: FC<ICellListProps> = props => {
	return <CellMarketListSource
		{...props}
	>
		{({cell, isOwned}) => <ListItem key={cell.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<CellNameInline cell={cell}/>
					<Ohm ohm={cell.ohm} tooltip={"common.cell.ohm.tooltip"}/>
					<Tags tags={[cell.type]}/>
					{isOwned && <BoolInline bool={isOwned}/>}
					<CellInventoryCreateButton type={"link"} cell={cell}/>
				</Space>}
			/>
		</ListItem>}
	</CellMarketListSource>;
};
