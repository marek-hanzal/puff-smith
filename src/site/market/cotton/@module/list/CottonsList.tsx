import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Divider, Space, Typography} from "antd";
import {CottonsListSource, ICottonsListSourceProps} from "@/sdk/api/cotton/query";
import {CottonTransactionCreateButton} from "@/puff-smith/site/market/cotton";

export interface ICottonsListProps extends Partial<ICottonsListSourceProps> {
}

export const CottonsList: FC<ICottonsListProps> = props => {
	return <CottonsListSource
		itemLayout={'vertical'}
		{...props}
	>
		{cotton => <ListItem key={cotton.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{cotton.name}
					<Typography.Text type={'secondary'}>{cotton.vendor.name}</Typography.Text>
					<CottonTransactionCreateButton type={'link'} cotton={cotton}/>
				</Space>}
			/>
		</ListItem>}
	</CottonsListSource>;
}
