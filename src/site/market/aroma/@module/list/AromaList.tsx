import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {AromaInventoryCreateButton} from "@/puff-smith/site/market/aroma/@module/button/AromaInventoryCreateButton";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaMarketInfiniteListSource, AromaMarketListSource, IAromaMarketListSourceProps} from "@/sdk/api/market/aroma/query";
import {BoolInline, BrowserContent, InfiniteListItem, LinkTo, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAromaListProps extends Partial<IAromaMarketListSourceProps> {
}

export const AromaList: FC<IAromaListProps> = props => {
	return <>
		<BrowserContent>
			<AromaMarketListSource
				{...props}
			>
				{({aroma, isOwned}) => <ListItem
					key={aroma.id}
					extra={isOwned ? <BoolInline bool={isOwned}/> : <AromaInventoryCreateButton type={"link"} aroma={aroma}/>}
				>
					<ListItemMeta
						title={<Space size={0} split={<Divider type={"vertical"}/>}>
							<SelectionBool selection={aroma}/>
							<LinkTo href={"/market/aroma/[aromaId]"} query={{aromaId: aroma.id}}>
								<AromaNameInline aroma={aroma}/>
							</LinkTo>
							<VgPgInline vgpg={aroma}/>
							<AromaContentInline aroma={aroma}/>
							{aroma.tastes.length > 0 && <Tags color={"magenta"} tags={aroma.tastes} translation={"common.taste"}/>}
						</Space>}
					/>
				</ListItem>}
			</AromaMarketListSource>
		</BrowserContent>
		<MobileContent>
			<AromaMarketInfiniteListSource
				withFulltext
			>
				{aromaMarket => <InfiniteListItem
					key={aromaMarket.aroma.id}
					onClick={navigate => navigate("/market/aroma/[aromaId]", {aromaId: aromaMarket.aroma.id})}
				>
					<AromaNameInline inline={false} aroma={aromaMarket.aroma}/>
				</InfiniteListItem>}
			</AromaMarketInfiniteListSource>
		</MobileContent>
	</>;
};
