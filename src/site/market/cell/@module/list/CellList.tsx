import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {CellInventoryCreateButton} from "@/puff-smith/site/market/cell/@module/button/CellInventoryCreateButton";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {CellMarketInfiniteListSource, CellMarketListSource, ICellMarketListSourceProps} from "@/sdk/api/market/cell/query";
import {BoolInline, BrowserContent, InfiniteListItem, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {toHumanNumber} from "@leight-core/utils";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICellListProps extends Partial<ICellMarketListSourceProps> {
}

export const CellList: FC<ICellListProps> = props => {
	return <>
		<BrowserContent>
			<CellMarketListSource
				{...props}
			>
				{({cell, isOwned}) => <ListItem
					key={cell.id}
					extra={<CellInventoryCreateButton type={"link"} cell={cell}/>}
				>
					<ListItemMeta
						title={<Space size={0} split={<Divider type={"vertical"}/>}>
							<SelectionBool selection={cell}/>
							<CellNameInline cell={cell}/>
							{toHumanNumber(cell.capacity)}
							<Ohm ohm={cell.ohm} tooltip={"common.cell.ohm.tooltip"}/>
							<Tags tags={[cell.type]}/>
							{isOwned && <BoolInline bool={isOwned}/>}
						</Space>}
					/>
				</ListItem>}
			</CellMarketListSource>
		</BrowserContent>
		<MobileContent>
			<CellMarketInfiniteListSource
				withFulltext
			>
				{cellMarket => <InfiniteListItem
					key={cellMarket.cell.id}
					onClick={navigate => navigate("/market/cell/[cellId]", {cellId: cellMarket.cell.id})}
				>
					<CellNameInline split={null} direction={"vertical"} cell={cellMarket.cell}/>
				</InfiniteListItem>}
			</CellMarketInfiniteListSource>
		</MobileContent>
	</>;
};
