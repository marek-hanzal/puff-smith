import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {AromaInventoryCreateButton} from "@/puff-smith/site/market/aroma/@module/button/AromaInventoryCreateButton";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromasMarketListSource, IAromasMarketListSourceProps} from "@/sdk/api/aroma/market/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAromaListProps extends Partial<IAromasMarketListSourceProps> {
}

export const AromaList: FC<IAromaListProps> = props => {
	return <AromasMarketListSource
		{...props}
	>
		{({aroma, isOwned}) => <ListItem key={aroma.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AromaNameInline aroma={aroma}/>
					<PgVgInline pgvg={aroma}/>
					<AromaContentInline aroma={aroma}/>
					{aroma.tastes.length > 0 && <Tags color={"magenta"} tags={aroma.tastes} translation={"common.taste"}/>}
					{isOwned ? <BoolInline bool={isOwned}/> : <AromaInventoryCreateButton type={"link"} aroma={aroma}/>}
				</Space>}
			/>
		</ListItem>}
	</AromasMarketListSource>;
};
