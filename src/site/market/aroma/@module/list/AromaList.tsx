import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {AromaInventoryCreateButton} from "@/puff-smith/site/market/aroma/@module/button/AromaInventoryCreateButton";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaMarketListSource, IAromaMarketListSourceProps} from "@/sdk/api/aroma/market/query";
import {useMixtureUpdateMutation} from "@/sdk/api/mixture/aroma/update";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Button, Divider, Space} from "antd";
import {FC} from "react";

export interface IAromaListProps extends Partial<IAromaMarketListSourceProps> {
}

export const AromaList: FC<IAromaListProps> = props => {
	const mixtureUpdateMutation = useMixtureUpdateMutation();
	return <AromaMarketListSource
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
					<Button
						size={"large"}
						type={"link"}
						icon={<LiquidIcon/>}
						onClick={() => mixtureUpdateMutation.mutate({aromaId: aroma.id})}
						loading={mixtureUpdateMutation.isLoading}
					>Mixture!</Button>
				</Space>}
			/>
		</ListItem>}
	</AromaMarketListSource>;
};
