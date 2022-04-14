import {Tags} from "@/puff-smith";
import {CottonInventoryCreateButton} from "@/puff-smith/site/market/cotton";
import {CottonsListSource, ICottonsListSourceProps} from "@/sdk/api/cotton/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface ICottonListProps extends Partial<ICottonsListSourceProps> {
}

export const CottonList: FC<ICottonListProps> = props => {
	return <CottonsListSource
		{...props}
	>
		{cotton => <ListItem key={cotton.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{cotton.name}
					<Typography.Text type={"secondary"}>{cotton.vendor.name}</Typography.Text>
					<Tags tags={cotton.draws}/>
					<CottonInventoryCreateButton type={"link"} cotton={cotton}/>
				</Space>}
			/>
		</ListItem>}
	</CottonsListSource>;
};
