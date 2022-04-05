import {AtomizersInventoryListSource, IAtomizersInventoryListSourceProps} from "@/sdk/api/atomizer/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
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
					{atomizerInventory.atomizer.name}
					<Typography.Text type={"secondary"}>{atomizerInventory.atomizer.vendor.name}</Typography.Text>
				</Space>}
			/>
		</ListItem>}
	</AtomizersInventoryListSource>;
};
