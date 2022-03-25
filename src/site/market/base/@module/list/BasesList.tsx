import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Divider, Space, Typography} from "antd";
import {BasesListSource, IBasesListSourceProps} from "@/sdk/api/base/query";
import {BaseTransactionCreateButton} from "@/puff-smith/site/market/base";

export interface IBasesListProps extends Partial<IBasesListSourceProps> {
}

export const BasesList: FC<IBasesListProps> = props => {
	return <BasesListSource
		itemLayout={'vertical'}
		{...props}
	>
		{base => <ListItem key={base.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{base.name}
					<Typography.Text type={'secondary'}>{base.vendor.name}</Typography.Text>
					<BaseTransactionCreateButton type={'link'} base={base}/>
				</Space>}
			/>
		</ListItem>}
	</BasesListSource>;
}
