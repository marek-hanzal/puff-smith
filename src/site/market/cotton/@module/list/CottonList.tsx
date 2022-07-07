import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {CottonInventoryCreateButton} from "@/puff-smith/site/market/cotton/@module/button/CottonInventoryCreateButton";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {CottonMarketInfiniteListSource, CottonMarketListSource, ICottonMarketListSourceProps} from "@/sdk/api/market/cotton/query";
import {BoolInline, BrowserContent, InfiniteListItem, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICottonListProps extends Partial<ICottonMarketListSourceProps> {
}

export const CottonList: FC<ICottonListProps> = props => {
	return <>
		<BrowserContent>
			<CottonMarketListSource
				{...props}
			>
				{({cotton, isOwned}) => <ListItem
					key={cotton.id}
					extra={isOwned ? <BoolInline bool={isOwned}/> : <CottonInventoryCreateButton type={"link"} cotton={cotton}/>}
				>
					<ListItemMeta
						title={<Space size={0} split={<Divider type={"vertical"}/>}>
							<SelectionBool selection={cotton}/>
							<CottonNameInline cotton={cotton}/>
							{cotton.draws.length > 0 && <Tags tags={cotton.draws} translation={"common.draw"}/>}
						</Space>}
					/>
				</ListItem>}
			</CottonMarketListSource>
		</BrowserContent>
		<MobileContent>
			<CottonMarketInfiniteListSource
				withFulltext
			>
				{cottonMarket => <InfiniteListItem
					key={cottonMarket.cotton.id}
					onClick={navigate => navigate("/market/cotton/[cottonId]", {cottonId: cottonMarket.cotton.id})}
				>
					<CottonNameInline split={null} direction={"vertical"} cotton={cottonMarket.cotton}/>
				</InfiniteListItem>}
			</CottonMarketInfiniteListSource>
		</MobileContent>
	</>;
};
