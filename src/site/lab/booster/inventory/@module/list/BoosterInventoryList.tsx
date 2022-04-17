import {NicotineInline, PgVgInline} from "@/puff-smith";
import {BoosterListEmpty} from "@/puff-smith/site/lab/booster/inventory";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster";
import {BoostersInventoryListSource, IBoostersInventoryListSourceProps} from "@/sdk/api/booster/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBoosterInventoryListProps extends Partial<IBoostersInventoryListSourceProps> {
}

export const BoosterInventoryList: FC<IBoosterInventoryListProps> = props => {
	return <BoostersInventoryListSource
		locale={{
			emptyText: <BoosterListEmpty/>,
		}}
		{...props}
	>
		{({id, booster}) => <ListItem key={id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<BoosterNameInline booster={booster}/>
					<PgVgInline pgvg={booster}/>
					<NicotineInline nicotine={booster.nicotine}/>
				</Space>}
			/>
		</ListItem>}
	</BoostersInventoryListSource>;
};
