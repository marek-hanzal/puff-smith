import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {AtomizerListEmpty} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerListEmpty";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerInventoryListSource, IAtomizerInventoryListSourceProps} from "@/sdk/api/inventory/atomizer/query";
import {ButtonLink, ListItem, ListItemMeta, useOptionalSelectionContext} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAtomizerInventoryListProps extends Partial<IAtomizerInventoryListSourceProps> {
}

export const AtomizerInventoryList: FC<IAtomizerInventoryListProps> = props => {
	const optionalSelectionContext = useOptionalSelectionContext();
	return <AtomizerInventoryListSource
		locale={{
			emptyText: <AtomizerListEmpty/>
		}}
		{...props}
	>
		{atomizerInventory => <ListItem
			key={atomizerInventory.id}
			extra={<ButtonLink
				href={"/lab/build/create/atomizer/[atomizerId]"}
				query={{atomizerId: atomizerInventory.atomizerId}}
				icon={<BuildIcon/>}
				label={"inventory.atomizer.build.button"}
			/>}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{optionalSelectionContext && <SelectionBool selection={atomizerInventory}/>}
					<AtomizerNameInline atomizer={atomizerInventory.atomizer}/>
					<Tags tags={atomizerInventory.atomizer.draws} color={"geekblue"} translation={"common.draw"}/>
				</Space>}
			/>
		</ListItem>}
	</AtomizerInventoryListSource>;
};
