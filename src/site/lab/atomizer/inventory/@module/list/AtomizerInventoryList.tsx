import {Tags} from "@/puff-smith";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer";
import {AtomizersInventoryListSource, IAtomizersInventoryListSourceProps} from "@/sdk/api/atomizer/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAtomizerInventoryListProps extends Partial<IAtomizersInventoryListSourceProps> {
}

export const AtomizerInventoryList: FC<IAtomizerInventoryListProps> = props => {
	return <AtomizersInventoryListSource
		{...props}
	>
		{atomizerInventory => <ListItem key={atomizerInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AtomizerNameInline atomizer={atomizerInventory.atomizer}/>
					<Tags tags={atomizerInventory.atomizer.draws}/>
				</Space>}
			/>
		</ListItem>}
	</AtomizersInventoryListSource>;
};
