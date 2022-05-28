import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {BoosterInventoryCreateButton} from "@/puff-smith/site/market/booster/@module/button/BoosterInventoryCreateButton";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterMarketListSource, IBoosterMarketListSourceProps} from "@/sdk/api/market/booster/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBoosterListProps extends Partial<IBoosterMarketListSourceProps> {
}

export const BoosterList: FC<IBoosterListProps> = props => {
	return <BoosterMarketListSource
		{...props}
	>
		{({booster, isOwned}) => <ListItem key={booster.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<BoosterNameInline booster={booster}/>
					<VgPgInline vgpg={booster}/>
					<NicotineInline nicotine={booster.nicotine}/>
					{isOwned ? <BoolInline bool={isOwned}/> : <BoosterInventoryCreateButton type={"link"} booster={booster}/>}
				</Space>}
			/>
		</ListItem>}
	</BoosterMarketListSource>;
};
