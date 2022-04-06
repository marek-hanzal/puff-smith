import {NicotineInline, PgVgInline} from "@/puff-smith";
import {BoosterInventoryCreateButton} from "@/puff-smith/site/market/booster";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster";
import {BoostersListSource, IBoostersListSourceProps} from "@/sdk/api/booster/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBoosterListProps extends Partial<IBoostersListSourceProps> {
}

export const BoosterList: FC<IBoosterListProps> = props => {
	return <BoostersListSource
		itemLayout={"vertical"}
		{...props}
	>
		{booster => <ListItem key={booster.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<BoosterNameInline booster={booster}/>
					<PgVgInline pgvg={booster}/>
					<NicotineInline nicotine={booster.nicotine}/>
					<BoosterInventoryCreateButton type={"link"} booster={booster}/>
				</Space>}
			/>
		</ListItem>}
	</BoostersListSource>;
};
