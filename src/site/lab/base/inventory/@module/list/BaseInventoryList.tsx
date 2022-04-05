import {BasesInventoryListSource, IBasesInventoryListSourceProps} from "@/sdk/api/base/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface IBaseInventoryListProps extends Partial<IBasesInventoryListSourceProps> {
}

export const BaseInventoryList: FC<IBaseInventoryListProps> = props => {
	return <BasesInventoryListSource
		{...props}
	>
		{baseInventory => <ListItem key={baseInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{baseInventory.base.name}
					<Typography.Text type={"secondary"}>{baseInventory.base.vendor.name}</Typography.Text>
				</Space>}
			/>
		</ListItem>}
	</BasesInventoryListSource>;
};
