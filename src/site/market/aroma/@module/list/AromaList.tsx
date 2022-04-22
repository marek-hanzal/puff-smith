import {PgVgInline, Tags} from "@/puff-smith";
import {AromaInventoryCreateButton} from "@/puff-smith/site/market/aroma";
import {AromaContentInline, AromaNameInline} from "@/puff-smith/site/shared/aroma";
import {AromasMarketListSource, IAromasMarketListSourceProps} from "@/sdk/api/aroma/market/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAromaListProps extends Partial<IAromasMarketListSourceProps> {
}

export const AromaList: FC<IAromaListProps> = props => {
	return <AromasMarketListSource
		{...props}
	>
		{aromaMarket => <ListItem key={aromaMarket.aroma.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AromaNameInline aroma={aromaMarket.aroma}/>
					<PgVgInline pgvg={aromaMarket.aroma}/>
					<AromaContentInline aroma={aromaMarket.aroma}/>
					{aromaMarket.aroma.tastes.length > 0 && <Tags color={"magenta"} tags={aromaMarket.aroma.tastes} translation={"common.taste"}/>}
					<AromaInventoryCreateButton disabled={aromaMarket.isOwned} type={"link"} aroma={aromaMarket.aroma}/>
				</Space>}
			/>
		</ListItem>}
	</AromasMarketListSource>;
};
