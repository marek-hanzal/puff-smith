import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {AtomizerRatingButton} from "@/puff-smith/site/inventory/atomizer/@module/button/AtomizerRatingButton";
import {AtomizerListEmpty} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerListEmpty";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerInventoryListSource, IAtomizerInventoryListSourceProps} from "@/sdk/api/inventory/atomizer/query";
import {ButtonBar, ButtonLink, ListItem, ListItemMeta, useIsMobile, useOptionalSelectionContext} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export type IAtomizerInventoryListItems = "rating";

export interface IAtomizerInventoryListProps extends Partial<IAtomizerInventoryListSourceProps> {
	hidden?: IAtomizerInventoryListItems[];
}

export const AtomizerInventoryList: FC<IAtomizerInventoryListProps> = ({hidden = [], ...props}) => {
	const optionalSelectionContext = useOptionalSelectionContext();
	const isMobile = useIsMobile();
	return <AtomizerInventoryListSource
		emptyText={<AtomizerListEmpty/>}
		{...props}
	>
		{atomizerInventory => <ListItem
			key={atomizerInventory.id}
			extra={<ButtonBar align={"baseline"}>
				{!hidden?.includes("rating") && <AtomizerRatingButton atomizerInventory={atomizerInventory}/>}
				<ButtonLink
					href={"/lab/build/create/atomizer/[atomizerId]"}
					query={{atomizerId: atomizerInventory.atomizerId}}
					icon={<BuildIcon/>}
					label={"inventory.atomizer.build.button"}
				/>
			</ButtonBar>}
		>
			<ListItemMeta
				title={<Space direction={isMobile ? "vertical" : "horizontal"} size={0} split={isMobile ? undefined : <Divider type={"vertical"}/>}>
					{optionalSelectionContext && <SelectionBool selection={atomizerInventory}/>}
					<AtomizerNameInline atomizer={atomizerInventory.atomizer}/>
					{atomizerInventory.atomizer.draws.length > 0 && <Tags color={"geekblue"} tags={atomizerInventory.atomizer.draws} translation={"common.draw"}/>}
				</Space>}
			/>
		</ListItem>}
	</AtomizerInventoryListSource>;
};
