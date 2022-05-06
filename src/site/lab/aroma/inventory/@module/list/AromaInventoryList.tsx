import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {AromaListEmpty} from "@/puff-smith/site/lab/aroma/inventory/@module/list/AromaListEmpty";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromasInventoryListSource, IAromasInventoryListSourceProps} from "@/sdk/api/aroma/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAromaInventoryListProps extends Partial<IAromasInventoryListSourceProps> {
}

export const AromaInventoryList: FC<IAromaInventoryListProps> = props => {
	return <AromasInventoryListSource
		locale={{
			emptyText: <AromaListEmpty/>,
		}}
		{...props}
	>
		{aromaInventory => <ListItem
			key={aromaInventory.id}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AromaNameInline aroma={aromaInventory.aroma}/>
				</Space>}
				description={<Space size={0} split={<Divider type={"vertical"}/>}>
					<PgVgInline pgvg={aromaInventory.aroma}/>
					<AromaContentInline aroma={aromaInventory.aroma}/>
					{aromaInventory.aroma.tastes.length > 0 && <Tags color={"magenta"} tags={aromaInventory.aroma.tastes} translation={"common.taste"}/>}
				</Space>}
			/>
		</ListItem>}
	</AromasInventoryListSource>;
};
