import {AromasInventoryListSource, IAromasInventoryListSourceProps} from "@/sdk/api/aroma/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface IAromaInventoryListProps extends Partial<IAromasInventoryListSourceProps> {
}

export const AromaInventoryList: FC<IAromaInventoryListProps> = props => {
	return <AromasInventoryListSource
		{...props}
	>
		{aromaInventory => <ListItem key={aromaInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{aromaInventory.aroma.name}
					<Typography.Text type={"secondary"}>{aromaInventory.aroma.vendor.name}</Typography.Text>
				</Space>}
			/>
		</ListItem>}
	</AromasInventoryListSource>;
};
