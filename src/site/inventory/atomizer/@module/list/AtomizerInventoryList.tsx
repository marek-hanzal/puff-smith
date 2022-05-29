import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {AtomizerListEmpty} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerListEmpty";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerInventoryListSource, IAtomizerInventoryListSourceProps} from "@/sdk/api/inventory/atomizer/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAtomizerInventoryListProps extends Partial<IAtomizerInventoryListSourceProps> {
}

export const AtomizerInventoryList: FC<IAtomizerInventoryListProps> = props => {
	return <AtomizerInventoryListSource
		locale={{
			emptyText: <AtomizerListEmpty/>
		}}
		{...props}
	>
		{atomizerInventory => <ListItem key={atomizerInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={atomizerInventory}/>
					<AtomizerNameInline atomizer={atomizerInventory.atomizer}/>
					<Tags tags={atomizerInventory.atomizer.draws} color={"geekblue"} translation={"common.draw"}/>
				</Space>}
			/>
		</ListItem>}
	</AtomizerInventoryListSource>;
};
