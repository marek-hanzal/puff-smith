import {DrawerCancelOk} from "@/puff-smith/component/button/DrawerCancelOk";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {IBase} from "@/puff-smith/service/base/interface";
import {BaseListEmpty} from "@/puff-smith/site/lab/base/inventory/@module/list/BaseListEmpty";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {useInventoryBasesOptionalSelectionContext} from "@/sdk/api/base/inventory/base/query";
import {BasesInventoryListSource, IBasesInventoryListSourceProps} from "@/sdk/api/base/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBaseInventoryListProps extends Partial<IBasesInventoryListSourceProps> {
}

export const BaseInventoryList: FC<IBaseInventoryListProps> = props => {
	const selectionContext = useInventoryBasesOptionalSelectionContext();
	return <BasesInventoryListSource
		locale={{
			emptyText: <BaseListEmpty/>,
		}}
		footer={() => <DrawerCancelOk<IBase> toForm={({single}) => single?.id}/>}
		{...props}
	>
		{baseInventory => <ListItem
			key={baseInventory.id}
			onClick={() => selectionContext?.item(baseInventory.base)}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{selectionContext && <SelectionBool selection={baseInventory.base}/>}
					<BaseNameInline base={baseInventory.base}/>
					<PgVgInline pgvg={baseInventory.base}/>
				</Space>}
			/>
		</ListItem>}
	</BasesInventoryListSource>;
};
