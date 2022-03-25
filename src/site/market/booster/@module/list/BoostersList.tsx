import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Divider, Space, Typography} from "antd";
import {BoostersListSource, IBoostersListSourceProps} from "@/sdk/api/booster/query";
import {BoosterTransactionCreateButton} from "@/puff-smith/site/market/booster";

export interface IBoostersListProps extends Partial<IBoostersListSourceProps> {
}

export const BoostersList: FC<IBoostersListProps> = props => {
	return <BoostersListSource
		itemLayout={'vertical'}
		{...props}
	>
		{booster => <ListItem key={booster.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{booster.name}
					<Typography.Text type={'secondary'}>{booster.vendor.name}</Typography.Text>
					<BoosterTransactionCreateButton type={'link'} booster={booster}/>
				</Space>}
			/>
		</ListItem>}
	</BoostersListSource>;
}
