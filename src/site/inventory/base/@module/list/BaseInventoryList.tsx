import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {BaseRatingButton} from "@/puff-smith/site/inventory/base/@module/button/BaseRatingButton";
import {BaseListEmpty} from "@/puff-smith/site/inventory/base/@module/list/BaseListEmpty";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseInventoryListSource, IBaseInventoryListSourceProps} from "@/sdk/api/inventory/base/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBaseInventoryListProps extends Partial<IBaseInventoryListSourceProps> {
}

export const BaseInventoryList: FC<IBaseInventoryListProps> = props => {
	return <BaseInventoryListSource
		emptyText={<BaseListEmpty/>}
		{...props}
	>
		{baseInventory => <ListItem
			key={baseInventory.id}
			extra={<BaseRatingButton baseInventory={baseInventory}/>}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={baseInventory}/>
					<BaseNameInline base={baseInventory.base}/>
					<VgPgInline vgpg={baseInventory.base}/>
				</Space>}
			/>
		</ListItem>}
	</BaseInventoryListSource>;
};
