import {DrawerCancelOk, NicotineInline, PgVgInline, SelectionBool} from "@/puff-smith";
import {IBoosterInventory} from "@/puff-smith/service/booster";
import {BoosterListEmpty} from "@/puff-smith/site/lab/booster/inventory";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster";
import {BoostersInventoryListSource, IBoostersInventoryListSourceProps, useBoostersInventoryOptionalSelectionContext} from "@/sdk/api/booster/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBoosterInventoryListProps extends Partial<IBoostersInventoryListSourceProps> {
}

export const BoosterInventoryList: FC<IBoosterInventoryListProps> = props => {
	const selectionContext = useBoostersInventoryOptionalSelectionContext();
	return <BoostersInventoryListSource
		locale={{
			emptyText: <BoosterListEmpty/>,
		}}
		footer={() => <DrawerCancelOk<IBoosterInventory> toValue={selection => selection.boosterId}/>}
		{...props}
	>
		{boosterInventory => <ListItem
			key={boosterInventory.id}
			onClick={() => selectionContext?.onSelectItem(boosterInventory)}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={boosterInventory}/>
					<BoosterNameInline booster={boosterInventory.booster}/>
					<PgVgInline pgvg={boosterInventory.booster}/>
					<NicotineInline nicotine={boosterInventory.booster.nicotine}/>
				</Space>}
			/>
		</ListItem>}
	</BoostersInventoryListSource>;
};
