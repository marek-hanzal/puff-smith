import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {BoosterInventoryCreateButton} from "@/puff-smith/site/market/booster/@module/button/BoosterInventoryCreateButton";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterMarketInfiniteListSource, BoosterMarketListSource, IBoosterMarketListSourceProps} from "@/sdk/api/market/booster/query";
import {BoolInline, BrowserContent, InfiniteListItem, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBoosterListProps extends Partial<IBoosterMarketListSourceProps> {
}

export const BoosterList: FC<IBoosterListProps> = props => {
	return <>
		<BrowserContent>
			<BoosterMarketListSource
				{...props}
			>
				{({booster, isOwned}) => <ListItem
					key={booster.id}
					extra={isOwned ? <BoolInline bool={isOwned}/> : <BoosterInventoryCreateButton type={"link"} booster={booster}/>}
				>
					<ListItemMeta
						title={<Space size={0} split={<Divider type={"vertical"}/>}>
							<SelectionBool selection={booster}/>
							<BoosterNameInline booster={booster}/>
							<VgPgInline vgpg={booster}/>
							<NicotineInline nicotine={booster.nicotine}/>
							<CodeInline code={booster}/>
						</Space>}
					/>
				</ListItem>}
			</BoosterMarketListSource>
		</BrowserContent>
		<MobileContent>
			<BoosterMarketInfiniteListSource
				withFulltext
			>
				{boosterMarket => <InfiniteListItem
					key={boosterMarket.booster.id}
					onClick={navigate => navigate("/market/booster/[boosterId]", {boosterId: boosterMarket.booster.id})}
				>
					<BoosterNameInline split={null} direction={"vertical"} booster={boosterMarket.booster}/>
				</InfiniteListItem>}
			</BoosterMarketInfiniteListSource>
		</MobileContent>
	</>;
};
