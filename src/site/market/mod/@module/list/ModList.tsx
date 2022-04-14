import {Tags} from "@/puff-smith";
import {ModInventoryCreateButton} from "@/puff-smith/site/market/mod";
import {ModNameInline} from "@/puff-smith/site/shared/mod";
import {IModsListSourceProps, ModsListSource} from "@/sdk/api/mod/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IModListProps extends Partial<IModsListSourceProps> {
}

export const ModList: FC<IModListProps> = props => {
	return <ModsListSource
		{...props}
	>
		{mod => <ListItem key={mod.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<ModNameInline mod={mod}/>
					<Tags tags={mod.cells}/>
					<ModInventoryCreateButton type={"link"} mod={mod}/>
				</Space>}
			/>
		</ListItem>}
	</ModsListSource>;
};
