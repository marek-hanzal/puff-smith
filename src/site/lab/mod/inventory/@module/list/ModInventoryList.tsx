import {Tags} from "@/puff-smith";
import {ModListEmpty} from "@/puff-smith/site/lab/mod/inventory";
import {ModNameInline} from "@/puff-smith/site/shared/mod";
import {IModsInventoryListSourceProps, ModsInventoryListSource} from "@/sdk/api/mod/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IModInventoryListProps extends Partial<IModsInventoryListSourceProps> {
}

export const ModInventoryList: FC<IModInventoryListProps> = props => {
	return <ModsInventoryListSource
		locale={{
			emptyText: <ModListEmpty/>
		}}
		{...props}
	>
		{modInventory => <ListItem key={modInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<ModNameInline mod={modInventory.mod}/>
					<Tags tags={modInventory.mod.cells}/>
				</Space>}
			/>
		</ListItem>}
	</ModsInventoryListSource>;
};
