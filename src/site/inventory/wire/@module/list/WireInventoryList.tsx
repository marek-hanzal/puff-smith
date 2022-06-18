import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {WireRatingButton} from "@/puff-smith/site/inventory/wire/@module/button/WireRatingButton";
import {WireListEmpty} from "@/puff-smith/site/inventory/wire/@module/list/WireListEmpty";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {IWireInventoryListSourceProps, WireInventoryListSource} from "@/sdk/api/inventory/wire/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IWireInventoryListProps extends Partial<IWireInventoryListSourceProps> {
}

export const WireInventoryList: FC<IWireInventoryListProps> = props => {
	return <WireInventoryListSource
		locale={{
			emptyText: <WireListEmpty/>
		}}
		{...props}
	>
		{wireInventory => <ListItem
			key={wireInventory.id}
			extra={<WireRatingButton wireInventory={wireInventory}/>}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={wireInventory}/>
					<WireNameInline wire={wireInventory.wire}/>
					<CodeInline code={wireInventory}/>
				</Space>}
				description={<Space size={0} split={<Divider type={"vertical"}/>}>
					{wireInventory.wire.draws.length > 0 && <Tags tags={wireInventory.wire.draws} translation={"common.draw"}/>}
					{wireInventory.wire.fibers.length > 0 && <WireFiberInline wire={wireInventory.wire}/>}
				</Space>}
			/>
		</ListItem>}
	</WireInventoryListSource>;
};
