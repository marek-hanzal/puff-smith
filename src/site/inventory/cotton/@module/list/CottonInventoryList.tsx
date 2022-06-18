import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {ICotton} from "@/puff-smith/service/cotton/interface";
import {CottonRatingButton} from "@/puff-smith/site/inventory/cotton/@module/button/CottonRatingButton";
import {CottonListEmpty} from "@/puff-smith/site/inventory/cotton/@module/list/CottonListEmpty";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {CottonInventoryListSource, ICottonInventoryListSourceProps} from "@/sdk/api/inventory/cotton/query";
import {ListItem, ListItemMeta, useOptionalSelectionContext} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC, ReactNode} from "react";

export interface ICottonInventoryListProps extends Partial<ICottonInventoryListSourceProps> {
	itemExtra?(cotton: ICotton): ReactNode;
}

export const CottonInventoryList: FC<ICottonInventoryListProps> = ({itemExtra, ...props}) => {
	const selectionContext = useOptionalSelectionContext();
	return <CottonInventoryListSource
		locale={{
			emptyText: <CottonListEmpty/>,
		}}
		{...props}
	>
		{cottonInventory => <ListItem
			key={cottonInventory.id}
			extra={itemExtra?.(cottonInventory.cotton) || <CottonRatingButton cottonInventory={cottonInventory}/>}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{selectionContext && <SelectionBool selection={cottonInventory}/>}
					<CottonNameInline cotton={cottonInventory.cotton}/>
					{cottonInventory.cotton.draws.length > 0 && <Tags tags={cottonInventory.cotton.draws} translation={"common.draw"}/>}
				</Space>}
			/>
		</ListItem>}
	</CottonInventoryListSource>;
};
