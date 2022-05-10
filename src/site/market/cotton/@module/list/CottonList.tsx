import {Tags} from "@/puff-smith/component/Tags";
import {CottonInventoryCreateButton} from "@/puff-smith/site/market/cotton/@module/button/CottonInventoryCreateButton";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {CottonMarketListSource, ICottonMarketListSourceProps} from "@/sdk/api/cotton/market/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICottonListProps extends Partial<ICottonMarketListSourceProps> {
}

export const CottonList: FC<ICottonListProps> = props => {
	return <CottonMarketListSource
		{...props}
	>
		{({cotton, isOwned}) => <ListItem key={cotton.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<CottonNameInline cotton={cotton}/>
					{cotton.draws.length > 0 && <Tags tags={cotton.draws}/>}
					{isOwned ? <BoolInline bool={isOwned}/> : <CottonInventoryCreateButton type={"link"} cotton={cotton}/>}
				</Space>}
			/>
		</ListItem>}
	</CottonMarketListSource>;
};
