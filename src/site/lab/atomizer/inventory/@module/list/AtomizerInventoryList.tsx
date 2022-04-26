import {Tags} from "@/puff-smith/component/Tags";
import {AtomizerListEmpty} from "@/puff-smith/site/lab/atomizer/inventory/@module/list/AtomizerListEmpty";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizersInventoryListSource, IAtomizersInventoryListSourceProps} from "@/sdk/api/atomizer/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAtomizerInventoryListProps extends Partial<IAtomizersInventoryListSourceProps> {
}

export const AtomizerInventoryList: FC<IAtomizerInventoryListProps> = props => {
	return <AtomizersInventoryListSource
		locale={{
			emptyText: <AtomizerListEmpty/>
		}}
		{...props}
	>
		{atomizerInventory => <ListItem key={atomizerInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AtomizerNameInline atomizer={atomizerInventory.atomizer}/>
					<Tags tags={atomizerInventory.atomizer.draws}/>
				</Space>}
			/>
		</ListItem>}
	</AtomizersInventoryListSource>;
};
