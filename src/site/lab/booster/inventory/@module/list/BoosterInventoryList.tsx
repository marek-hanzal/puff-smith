import {BoostersInventoryListSource, IBoostersInventoryListSourceProps} from "@/sdk/api/booster/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface IBoosterInventoryListProps extends Partial<IBoostersInventoryListSourceProps> {
}

export const BoosterInventoryList: FC<IBoosterInventoryListProps> = props => {
	return <BoostersInventoryListSource
		{...props}
	>
		{boosterInventory => <ListItem key={boosterInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{boosterInventory.booster.name}
					<Typography.Text type={"secondary"}>{boosterInventory.booster.vendor.name}</Typography.Text>
				</Space>}
			/>
		</ListItem>}
	</BoostersInventoryListSource>;
};
