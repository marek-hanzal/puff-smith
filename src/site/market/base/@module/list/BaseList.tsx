import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {BaseInventoryCreateButton} from "@/puff-smith/site/market/base/@module/button/BaseInventoryCreateButton";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseMarketInfiniteListSource, BaseMarketListSource, IBaseMarketListSourceProps} from "@/sdk/api/market/base/query";
import {BoolInline, BrowserContent, InfiniteListItem, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBaseListProps extends Partial<IBaseMarketListSourceProps> {
}

export const BaseList: FC<IBaseListProps> = props => {
	return <>
		<BrowserContent>
			<BaseMarketListSource
				{...props}
			>
				{({base, isOwned}) => <ListItem
					key={base.id}
					extra={isOwned ? <BoolInline bool={isOwned}/> : <BaseInventoryCreateButton type={"link"} base={base}/>}
				>
					<ListItemMeta
						title={<Space size={0} split={<Divider type={"vertical"}/>}>
							<SelectionBool selection={base}/>
							<BaseNameInline base={base}/>
							<VgPgInline vgpg={base}/>
						</Space>}
					/>
				</ListItem>}
			</BaseMarketListSource>
		</BrowserContent>
		<MobileContent>
			<BaseMarketInfiniteListSource
				withFulltext
			>
				{baseMarket => <InfiniteListItem
					key={baseMarket.base.id}
					onClick={navigate => navigate("/market/base/[baseId]", {baseId: baseMarket.base.id})}
				>
					<BaseNameInline split={null} direction={"vertical"} base={baseMarket.base}/>
				</InfiniteListItem>}
			</BaseMarketInfiniteListSource>
		</MobileContent>
	</>;
};
