import {Tags} from "@/puff-smith/component/Tags";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {MixtureInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureInline";
import {IMixtureMarketListSourceProps, MixtureMarketListSource} from "@/sdk/api/mixture/market/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IMixtureListProps extends Partial<IMixtureMarketListSourceProps> {
}

export const MixtureList: FC<IMixtureListProps> = props => {
	return <MixtureMarketListSource
		{...props}
	>
		{({mixture, aroma, booster, base}) => <ListItem
			key={mixture.id}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AromaNameInline aroma={mixture.aroma}/>
					{mixture.aroma.tastes.length > 0 && <Tags color={"magenta"} tags={mixture.aroma.tastes} translation={"common.taste"}/>}
					{mixture.draws.length > 0 && <Tags tags={mixture.draws} color={"geekblue"} translation={"common.draw"}/>}
					{/*{isOwned ? <BoolInline bool={isOwned}/> : <MixtureInventoryCreateButton type={"link"} mixture={mixture}/>}*/}
				</Space>}
				description={<MixtureInline mixture={mixture}/>}
			/>
		</ListItem>}
	</MixtureMarketListSource>;
};
