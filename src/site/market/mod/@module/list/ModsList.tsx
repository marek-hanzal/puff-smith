import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Divider, Space, Typography} from "antd";
import {IModsListSourceProps, ModsListSource} from "@/sdk/api/mod/query";
import {ModTransactionCreateButton} from "@/puff-smith/site/market/mod";

export interface IModsListProps extends Partial<IModsListSourceProps> {
}

export const ModsList: FC<IModsListProps> = props => {
	return <ModsListSource
		itemLayout={'vertical'}
		{...props}
	>
		{mod => <ListItem key={mod.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{mod.name}
					<Typography.Text type={'secondary'}>{mod.vendor.name}</Typography.Text>
					<ModTransactionCreateButton type={'link'} mod={mod}/>
				</Space>}
			/>
		</ListItem>}
	</ModsListSource>;
}
