import {Tags} from "@/puff-smith/component/Tags";
import {WireInventoryCreateButton} from "@/puff-smith/site/market/wire/@module/button/WireInventoryCreateButton";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {IWireMarketListSourceProps, WireMarketListSource} from "@/sdk/api/wire/market/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IWireListProps extends Partial<IWireMarketListSourceProps> {
}

export const WireList: FC<IWireListProps> = props => {
	return <WireMarketListSource
		{...props}
	>
		{({wire, isOwned}) => <ListItem key={wire.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<WireNameInline wire={wire}/>
					{wire.draws.length > 0 && <Tags tags={wire.draws} translation={"common.draw"}/>}
					{wire.fibers.length > 0 && <WireFiberInline wire={wire}/>}
					{isOwned ? <BoolInline bool={isOwned}/> : <WireInventoryCreateButton type={"link"} wire={wire}/>}
				</Space>}
			/>
		</ListItem>}
	</WireMarketListSource>;
};
