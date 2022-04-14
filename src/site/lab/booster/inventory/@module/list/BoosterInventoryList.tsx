import {NicotineInline, PgVgInline} from "@/puff-smith";
import {BoosterInventoryCreateButton} from "@/puff-smith/site/market/booster";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster";
import {BoostersInventoryListSource, IBoostersInventoryListSourceProps} from "@/sdk/api/booster/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBoosterInventoryListProps extends Partial<IBoostersInventoryListSourceProps> {
}

export const BoosterInventoryList: FC<IBoosterInventoryListProps> = props => {
	return <BoostersInventoryListSource
		{...props}
	>
		{({id, booster}) => <ListItem key={id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<BoosterNameInline booster={booster}/>
					<PgVgInline pgvg={booster}/>
					<NicotineInline nicotine={booster.nicotine}/>
					<BoosterInventoryCreateButton type={"link"} booster={booster}/>
				</Space>}
			/>
		</ListItem>}
	</BoostersInventoryListSource>;
};
