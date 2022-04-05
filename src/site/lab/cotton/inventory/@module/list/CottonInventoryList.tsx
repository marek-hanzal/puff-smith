import {CottonsInventoryListSource, ICottonsInventoryListSourceProps} from "@/sdk/api/cotton/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface ICottonInventoryListProps extends Partial<ICottonsInventoryListSourceProps> {
}

export const CottonInventoryList: FC<ICottonInventoryListProps> = props => {
	return <CottonsInventoryListSource
		{...props}
	>
		{cottonInventory => <ListItem key={cottonInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{cottonInventory.cotton.name}
					<Typography.Text type={"secondary"}>{cottonInventory.cotton.vendor.name}</Typography.Text>
				</Space>}
			/>
		</ListItem>}
	</CottonsInventoryListSource>;
};
