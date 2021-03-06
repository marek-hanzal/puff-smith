import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {BoosterRatingButton} from "@/puff-smith/site/inventory/booster/@module/button/BoosterRatingButton";
import {BoosterListEmpty} from "@/puff-smith/site/inventory/booster/@module/list/BoosterListEmpty";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterInventoryListSource, IBoosterInventoryListSourceProps} from "@/sdk/api/inventory/booster/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBoosterInventoryListProps extends Partial<IBoosterInventoryListSourceProps> {
}

export const BoosterInventoryList: FC<IBoosterInventoryListProps> = props => {
	return <BoosterInventoryListSource
		emptyText={<BoosterListEmpty/>}
		{...props}
	>
		{boosterInventory => <ListItem
			key={boosterInventory.id}
			extra={<BoosterRatingButton boosterInventory={boosterInventory}/>}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={boosterInventory}/>
					<BoosterNameInline booster={boosterInventory.booster}/>
					<VgPgInline vgpg={boosterInventory.booster}/>
					<NicotineInline nicotine={boosterInventory.booster.nicotine}/>
				</Space>}
			/>
		</ListItem>}
	</BoosterInventoryListSource>;
};
