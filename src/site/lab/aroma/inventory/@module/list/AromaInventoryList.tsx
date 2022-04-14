import {AromaNameInline} from "@/puff-smith/site/shared/aroma";
import {AromasInventoryListSource, IAromasInventoryListSourceProps} from "@/sdk/api/aroma/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAromaInventoryListProps extends Partial<IAromasInventoryListSourceProps> {
}

export const AromaInventoryList: FC<IAromaInventoryListProps> = props => {
	return <AromasInventoryListSource
		{...props}
	>
		{aromaInventory => <ListItem key={aromaInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AromaNameInline aroma={aromaInventory.aroma}/>
				</Space>}
			/>
		</ListItem>}
	</AromasInventoryListSource>;
};
