import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {MixtureBaseInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBaseInline";
import {MixtureBoosterInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBoosterInline";
import {IMixtureMarketListSourceProps, MixtureMarketListSource} from "@/sdk/api/market/mixture/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IMixtureListProps extends Partial<IMixtureMarketListSourceProps> {
}

export const MixtureList: FC<IMixtureListProps> = props => {
	return <MixtureMarketListSource
		{...props}
	>
		{({mixture, booster, base}) => <ListItem
			key={mixture.id}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<VgPgInline vgpg={mixture}/>
					<NicotineInline nicotine={mixture.nicotine}/>
					{mixture.draws.length > 0 && <Tags tags={mixture.draws} color={"geekblue"} translation={"common.draw"}/>}
				</Space>}
				description={<Space split={<Divider type={"vertical"}/>}>
					{mixture.booster && <MixtureBoosterInline mixture={mixture} isOwned={booster.isOwned}/>}
					{mixture.base && <MixtureBaseInline mixture={mixture} isOwned={base.isOwned}/>}
				</Space>}
			/>
		</ListItem>}
	</MixtureMarketListSource>;
};
