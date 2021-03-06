import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {ModRatingButton} from "@/puff-smith/site/inventory/mod/@module/button/ModRatingButton";
import {ModListEmpty} from "@/puff-smith/site/inventory/mod/@module/list/ModListEmpty";
import {ModNameInline} from "@/puff-smith/site/shared/mod/@module/inline/ModNameInline";
import {IModInventoryListSourceProps, ModInventoryListSource} from "@/sdk/api/inventory/mod/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IModInventoryListProps extends Partial<IModInventoryListSourceProps> {
}

export const ModInventoryList: FC<IModInventoryListProps> = props => {
	return <ModInventoryListSource
		emptyText={<ModListEmpty/>}
		{...props}
	>
		{modInventory => <ListItem
			key={modInventory.id}
			extra={<ModRatingButton modInventory={modInventory}/>}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={modInventory}/>
					<ModNameInline mod={modInventory.mod}/>
					{modInventory.mod.cells.length > 0 && <Tags tags={modInventory.mod.cells}/>}
				</Space>}
			/>
		</ListItem>}
	</ModInventoryListSource>;
};
