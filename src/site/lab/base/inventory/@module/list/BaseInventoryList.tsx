import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {BaseListEmpty} from "@/puff-smith/site/lab/base/inventory/@module/list/BaseListEmpty";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseInventoryListSource, IBaseInventoryListSourceProps} from "@/sdk/api/base/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBaseInventoryListProps extends Partial<IBaseInventoryListSourceProps> {
}

export const BaseInventoryList: FC<IBaseInventoryListProps> = props => {
	return <BaseInventoryListSource
		locale={{
			emptyText: <BaseListEmpty/>,
		}}
		{...props}
	>
		{baseInventory => <ListItem
			key={baseInventory.id}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={baseInventory}/>
					<BaseNameInline base={baseInventory.base}/>
					<PgVgInline pgvg={baseInventory.base}/>
				</Space>}
			/>
		</ListItem>}
	</BaseInventoryListSource>;
};
