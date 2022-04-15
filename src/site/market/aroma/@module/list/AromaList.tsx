import {PgVgInline} from "@/puff-smith";
import {AromaInventoryCreateButton} from "@/puff-smith/site/market/aroma";
import {AromaContentInline, AromaNameInline} from "@/puff-smith/site/shared/aroma";
import {AromasListSource, IAromasListSourceProps} from "@/sdk/api/aroma/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAromaListProps extends Partial<IAromasListSourceProps> {
}

export const AromaList: FC<IAromaListProps> = props => {
	return <AromasListSource
		{...props}
	>
		{aroma => <ListItem key={aroma.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AromaNameInline aroma={aroma}/>
					<PgVgInline pgvg={aroma}/>
					<AromaContentInline aroma={aroma}/>
					<AromaInventoryCreateButton type={"link"} aroma={aroma}/>
				</Space>}
			/>
		</ListItem>}
	</AromasListSource>;
};
