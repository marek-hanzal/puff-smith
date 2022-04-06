import {PgVgInline} from "@/puff-smith";
import {BaseInventoryCreateButton} from "@/puff-smith/site/market/base";
import {BaseNameInline} from "@/puff-smith/site/shared/base";
import {BasesListSource, IBasesListSourceProps} from "@/sdk/api/base/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
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
					<BaseNameInline base={base}/>
					<PgVgInline pgvg={base}/>
					<BaseInventoryCreateButton type={"link"} base={base}/>
				</Space>}
			/>
		</ListItem>}
	</BasesListSource>;
};
