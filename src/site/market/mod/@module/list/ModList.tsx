import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {ModInventoryCreateButton} from "@/puff-smith/site/market/mod/@module/button/ModInventoryCreateButton";
import {ModNameInline} from "@/puff-smith/site/shared/mod/@module/inline/ModNameInline";
import {IModMarketListSourceProps, ModMarketInfiniteListSource, ModMarketListSource} from "@/sdk/api/market/mod/query";
import {BoolInline, BrowserContent, InfiniteListItem, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IModListProps extends Partial<IModMarketListSourceProps> {
}

export const ModList: FC<IModListProps> = props => {
	return <>
		<BrowserContent>
			<ModMarketListSource
				{...props}
			>
				{({mod, isOwned}) => <ListItem
					key={mod.id}
					extra={isOwned ? <BoolInline bool={isOwned}/> : <ModInventoryCreateButton type={"link"} mod={mod}/>}
				>
					<ListItemMeta
						title={<Space size={0} split={<Divider type={"vertical"}/>}>
							<SelectionBool selection={mod}/>
							<ModNameInline mod={mod}/>
							{mod.cells.length > 0 && <Tags tags={mod.cells}/>}
						</Space>}
					/>
				</ListItem>}
			</ModMarketListSource>
		</BrowserContent>
		<MobileContent>
			<ModMarketInfiniteListSource
				withFulltext
			>
				{modMarket => <InfiniteListItem
					key={modMarket.mod.id}
					onClick={navigate => navigate("/market/mod/[modId]", {modId: modMarket.mod.id})}
				>
					<ModNameInline split={null} direction={"vertical"} mod={modMarket.mod}/>
				</InfiniteListItem>}
			</ModMarketInfiniteListSource>
		</MobileContent>
	</>;
};
