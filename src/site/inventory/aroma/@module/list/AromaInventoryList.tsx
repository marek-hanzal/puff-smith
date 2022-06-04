import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {AromaListEmpty} from "@/puff-smith/site/inventory/aroma/@module/list/AromaListEmpty";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaInventoryListSource, IAromaInventoryListSourceProps} from "@/sdk/api/inventory/aroma/query";
import {ButtonLink, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAromaInventoryListProps extends Partial<IAromaInventoryListSourceProps> {
}

export const AromaInventoryList: FC<IAromaInventoryListProps> = props => {
	return <AromaInventoryListSource
		locale={{
			emptyText: <AromaListEmpty/>,
		}}
		{...props}
	>
		{aromaInventory => <ListItem
			key={aromaInventory.id}
			extra={<ButtonLink
				href={"/lab/liquid/create/aroma/[aromaId]"}
				query={{aromaId: aromaInventory.aromaId}}
				icon={<AromaIcon/>}
				label={"inventory.liquid.create.button"}
			/>}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={aromaInventory}/>
					<AromaNameInline aroma={aromaInventory.aroma}/>
				</Space>}
				description={<Space size={0} split={<Divider type={"vertical"}/>}>
					<VgPgInline vgpg={aromaInventory.aroma}/>
					<AromaContentInline aroma={aromaInventory.aroma}/>
					{aromaInventory.aroma.tastes.length > 0 && <Tags color={"magenta"} tags={aromaInventory.aroma.tastes} translation={"common.taste"}/>}
				</Space>}
			/>
		</ListItem>}
	</AromaInventoryListSource>;
};
