import {Tags} from "@/puff-smith/component/Tags";
import {ModListEmpty} from "@/puff-smith/site/lab/mod/inventory/@module/list/ModListEmpty";
import {ModNameInline} from "@/puff-smith/site/shared/mod/@module/inline/ModNameInline";
import {IModsInventoryListSourceProps, ModsInventoryListSource} from "@/sdk/api/mod/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IModInventoryListProps extends Partial<IModsInventoryListSourceProps> {
}

export const ModInventoryList: FC<IModInventoryListProps> = props => {
	return <ModsInventoryListSource
		locale={{
			emptyText: <ModListEmpty/>,
		}}
		{...props}
	>
		{modInventory => <ListItem key={modInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<ModNameInline mod={modInventory.mod}/>
					{modInventory.mod.cells.length > 0 && <Tags tags={modInventory.mod.cells}/>}
				</Space>}
			/>
		</ListItem>}
	</ModsInventoryListSource>;
};
