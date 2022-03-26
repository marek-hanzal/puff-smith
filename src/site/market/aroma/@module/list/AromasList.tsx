import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Divider, Space, Typography} from "antd";
import {AromasListSource, IAromasListSourceProps} from "@/sdk/api/aroma/query";
import {AromaInventoryCreateButton} from "@/puff-smith/site/market/aroma";

export interface IAromasListProps extends Partial<IAromasListSourceProps> {
}

export const AromasList: FC<IAromasListProps> = props => {
	return <AromasListSource
		itemLayout={'vertical'}
		{...props}
	>
		{aroma => <ListItem key={aroma.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{aroma.name}
					<Typography.Text type={'secondary'}>{aroma.vendor.name}</Typography.Text>
					<AromaInventoryCreateButton type={'link'} aroma={aroma}/>
				</Space>}
			/>
		</ListItem>}
	</AromasListSource>;
}
