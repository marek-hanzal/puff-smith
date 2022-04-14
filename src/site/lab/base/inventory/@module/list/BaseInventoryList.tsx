import {PgVgInline} from "@/puff-smith";
import {BaseNameInline} from "@/puff-smith/site/shared/base";
import {BasesInventoryListSource, IBasesInventoryListSourceProps} from "@/sdk/api/base/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBaseInventoryListProps extends Partial<IBasesInventoryListSourceProps> {
}

export const BaseInventoryList: FC<IBaseInventoryListProps> = props => {
	return <BasesInventoryListSource
		{...props}
	>
		{({base, id}) => <ListItem key={id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<BaseNameInline base={base}/>
					<PgVgInline pgvg={base}/>
				</Space>}
			/>
		</ListItem>}
	</BasesInventoryListSource>;
};
