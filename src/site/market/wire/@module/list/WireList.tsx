import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {WireInventoryCreateButton} from "@/puff-smith/site/market/wire/@module/button/WireInventoryCreateButton";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {IWireMarketListSourceProps, WireMarketInfiniteListSource, WireMarketListSource} from "@/sdk/api/market/wire/query";
import {BoolInline, BrowserContent, InfiniteListItem, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IWireListProps extends Partial<IWireMarketListSourceProps> {
}

export const WireList: FC<IWireListProps> = props => {
	return <>
		<BrowserContent>
			<WireMarketListSource
				{...props}
			>
				{({wire, isOwned}) => <ListItem
					key={wire.id}
					extra={isOwned ? <BoolInline bool={isOwned}/> : <WireInventoryCreateButton type={"link"} wire={wire}/>}
				>
					<ListItemMeta
						title={<Space size={0} split={<Divider type={"vertical"}/>}>
							<SelectionBool selection={wire}/>
							<WireNameInline wire={wire}/>
							{wire.draws.length > 0 && <Tags tags={wire.draws} translation={"common.draw"}/>}
							{wire.fibers.length > 0 && <WireFiberInline wire={wire}/>}
						</Space>}
					/>
				</ListItem>}
			</WireMarketListSource>
		</BrowserContent>
		<MobileContent>
			<WireMarketInfiniteListSource
				withFulltext
			>
				{wireMarket => <InfiniteListItem
					key={wireMarket.wire.id}
					onClick={navigate => navigate("/market/wire/[wireId]", {wireId: wireMarket.wire.id})}
				>
					<WireNameInline split={null} direction={"vertical"} wire={wireMarket.wire}/>
				</InfiniteListItem>}
			</WireMarketInfiniteListSource>
		</MobileContent>
	</>;
};
