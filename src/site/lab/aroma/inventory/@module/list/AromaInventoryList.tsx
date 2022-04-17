import {DrawerCancelOk, PgVgInline, Tags} from "@/puff-smith";
import {IAromaInventory} from "@/puff-smith/service/aroma";
import {AromaListEmpty} from "@/puff-smith/site/lab/aroma/inventory";
import {AromaContentInline, AromaNameInline} from "@/puff-smith/site/shared/aroma";
import {AromasInventoryListSource, IAromasInventoryListSourceProps} from "@/sdk/api/aroma/inventory/query";
import {MinusCircleTwoTone} from "@ant-design/icons";
import {BoolInline, ListItem, ListItemMeta, useOptionalSelectionContext} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAromaInventoryListProps extends Partial<IAromasInventoryListSourceProps> {
}

export const AromaInventoryList: FC<IAromaInventoryListProps> = props => {
	const selectionContext = useOptionalSelectionContext<IAromaInventory>();
	return <AromasInventoryListSource
		locale={{
			emptyText: <AromaListEmpty/>,
		}}
		footer={selectionContext ? () => <DrawerCancelOk<IAromaInventory> toValue={selection => selection.aromaId}/> : () => null}
		{...props}
	>
		{aromaInventory => <ListItem
			key={aromaInventory.id}
			onClick={selectionContext ? () => selectionContext?.onSelectItem(aromaInventory) : () => null}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{selectionContext && <BoolInline bool={selectionContext.isSelectedItem(aromaInventory)} uncheckIcon={<MinusCircleTwoTone/>}/>}
					<AromaNameInline aroma={aromaInventory.aroma}/>
					<PgVgInline pgvg={aromaInventory.aroma}/>
					<AromaContentInline aroma={aromaInventory.aroma}/>
					<Tags color={"magenta"} tags={aromaInventory.aroma.tastes} translation={"common.taste"}/>
				</Space>}
			/>
		</ListItem>}
	</AromasInventoryListSource>;
};
