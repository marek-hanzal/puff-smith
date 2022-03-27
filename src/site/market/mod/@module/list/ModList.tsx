import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Divider, Space, Typography} from "antd";
import {IModsListSourceProps, ModsListSource} from "@/sdk/api/mod/query";
import {ModInventoryCreateButton} from "@/puff-smith/site/market/mod";

export interface IModListProps extends Partial<IModsListSourceProps> {
}

export const ModList: FC<IModListProps> = props => {
	return <ModsListSource
		itemLayout={'vertical'}
		{...props}
	>
		{mod => <ListItem key={mod.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{mod.name}
					<Typography.Text type={'secondary'}>{mod.vendor.name}</Typography.Text>
					<ModInventoryCreateButton type={'link'} mod={mod}/>
				</Space>}
			/>
		</ListItem>}
	</ModsListSource>;
}