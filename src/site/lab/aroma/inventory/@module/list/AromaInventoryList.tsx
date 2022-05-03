import {DrawerCancelOk} from "@/puff-smith/component/button/DrawerCancelOk";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {IAromaInventory} from "@/puff-smith/service/aroma/inventory/interface";
import {AromaListEmpty} from "@/puff-smith/site/lab/aroma/inventory/@module/list/AromaListEmpty";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromasInventoryListSource, IAromasInventoryListSourceProps, useAromasInventoryOptionalSelectionContext} from "@/sdk/api/aroma/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAromaInventoryListProps extends Partial<IAromasInventoryListSourceProps> {
}

export const AromaInventoryList: FC<IAromaInventoryListProps> = props => {
	const selectionContext = useAromasInventoryOptionalSelectionContext();
	return <AromasInventoryListSource
		locale={{
			emptyText: <AromaListEmpty/>,
		}}
		footer={() => <DrawerCancelOk<IAromaInventory> toForm={({single}) => single?.aromaId}/>}
		{...props}
	>
		{aromaInventory => <ListItem
			key={aromaInventory.id}
			onClick={() => selectionContext?.item(aromaInventory)}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{selectionContext && <SelectionBool selection={aromaInventory}/>}
					<AromaNameInline aroma={aromaInventory.aroma}/>
					<PgVgInline pgvg={aromaInventory.aroma}/>
					<AromaContentInline aroma={aromaInventory.aroma}/>
					{aromaInventory.aroma.tastes.length > 0 && <Tags color={"magenta"} tags={aromaInventory.aroma.tastes} translation={"common.taste"}/>}
				</Space>}
			/>
		</ListItem>}
	</AromasInventoryListSource>;
};
