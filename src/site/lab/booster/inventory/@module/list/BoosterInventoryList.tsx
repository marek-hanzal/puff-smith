import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {BoosterListEmpty} from "@/puff-smith/site/lab/booster/inventory/@module/list/BoosterListEmpty";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterInventoryListSource, IBoosterInventoryListSourceProps} from "@/sdk/api/booster/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBoosterInventoryListProps extends Partial<IBoosterInventoryListSourceProps> {
}

export const BoosterInventoryList: FC<IBoosterInventoryListProps> = props => {
	return <BoosterInventoryListSource
		locale={{
			emptyText: <BoosterListEmpty/>,
		}}
		{...props}
	>
		{boosterInventory => <ListItem
			key={boosterInventory.id}
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
	</BoosterInventoryListSource>;
};
