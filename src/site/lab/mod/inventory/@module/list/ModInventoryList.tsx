import {FC} from "react";
import {IModsInventoryListSourceProps, ModsInventoryListSource} from "@/sdk/api/mod/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";

export interface IModInventoryListProps extends Partial<IModsInventoryListSourceProps> {
}

export const ModInventoryList: FC<IModInventoryListProps> = props => {
	return <ModsInventoryListSource
		{...props}
	>
		{modInventory => <ListItem key={modInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{modInventory.mod.name}
					<Typography.Text type={'secondary'}>{modInventory.mod.vendor.name}</Typography.Text>
				</Space>}
			/>
		</ListItem>}
	</ModsInventoryListSource>
}
