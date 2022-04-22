import {Tags} from "@/puff-smith";
import {CottonInventoryCreateButton} from "@/puff-smith/site/market/cotton";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton";
import {CottonsMarketListSource, ICottonsMarketListSourceProps} from "@/sdk/api/cotton/market/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICottonListProps extends Partial<ICottonsMarketListSourceProps> {
}

export const CottonList: FC<ICottonListProps> = props => {
	return <CottonsMarketListSource
		{...props}
	>
		{({cotton, isOwned}) => <ListItem key={cotton.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<CottonNameInline cotton={cotton}/>
					<Tags tags={cotton.draws}/>
					{isOwned ? <BoolInline bool={isOwned}/> : <CottonInventoryCreateButton type={"link"} cotton={cotton}/>}
				</Space>}
			/>
		</ListItem>}
	</CottonsMarketListSource>;
};
