import {DrawerCancelOk, PgVgInline, SelectionBool, Tags} from "@/puff-smith";
import {IAromaInventory} from "@/puff-smith/service/aroma";
import {AromaListEmpty} from "@/puff-smith/site/lab/aroma/inventory";
import {AromaContentInline, AromaNameInline} from "@/puff-smith/site/shared/aroma";
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
		footer={() => <DrawerCancelOk<IAromaInventory> toForm={({single}) => ({aromaId: single?.aromaId})}/>}
		{...props}
	>
		{aromaInventory => <ListItem
			key={aromaInventory.id}
			onClick={() => selectionContext?.item(aromaInventory)}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={aromaInventory}/>
					<AromaNameInline aroma={aromaInventory.aroma}/>
					<PgVgInline pgvg={aromaInventory.aroma}/>
					<AromaContentInline aroma={aromaInventory.aroma}/>
					<Tags color={"magenta"} tags={aromaInventory.aroma.tastes} translation={"common.taste"}/>
				</Space>}
			/>
		</ListItem>}
	</AromasInventoryListSource>;
};
