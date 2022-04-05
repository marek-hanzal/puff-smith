import {PgVgInline} from "@/puff-smith";
import {BaseInventoryCreateButton} from "@/puff-smith/site/market/base";
import {BasesListSource, IBasesListSourceProps} from "@/sdk/api/base/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface IBaseListProps extends Partial<IBasesListSourceProps> {
}

export const BaseList: FC<IBaseListProps> = props => {
	return <BasesListSource
		itemLayout={"vertical"}
		{...props}
	>
		{base => <ListItem key={base.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{base.name}
					<Typography.Text type={"secondary"}>{base.vendor.name}</Typography.Text>
					<PgVgInline pgvg={base}/>
					<BaseInventoryCreateButton type={"link"} base={base}/>
				</Space>}
			/>
		</ListItem>}
	</BasesListSource>;
};
