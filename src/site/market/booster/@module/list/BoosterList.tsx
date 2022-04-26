import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {BoosterInventoryCreateButton} from "@/puff-smith/site/market/booster/@module/button/BoosterInventoryCreateButton";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoostersMarketListSource, IBoostersMarketListSourceProps} from "@/sdk/api/booster/market/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBoosterListProps extends Partial<IBoostersMarketListSourceProps> {
}

export const BoosterList: FC<IBoosterListProps> = props => {
	return <BoostersMarketListSource
		{...props}
	>
		{({booster, isOwned}) => <ListItem key={booster.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<BoosterNameInline booster={booster}/>
					<PgVgInline pgvg={booster}/>
					<NicotineInline nicotine={booster.nicotine}/>
					{isOwned ? <BoolInline bool={isOwned}/> : <BoosterInventoryCreateButton type={"link"} booster={booster}/>}
				</Space>}
			/>
		</ListItem>}
	</BoostersMarketListSource>;
};
