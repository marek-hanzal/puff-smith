import {Tags} from "@/puff-smith/component/Tags";
import {CottonListEmpty} from "@/puff-smith/site/inventory/cotton/@module/list/CottonListEmpty";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {CottonInventoryListSource, ICottonInventoryListSourceProps} from "@/sdk/api/inventory/cotton/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICottonInventoryListProps extends Partial<ICottonInventoryListSourceProps> {
}

export const CottonInventoryList: FC<ICottonInventoryListProps> = props => {
	return <CottonInventoryListSource
		locale={{
			emptyText: <CottonListEmpty/>,
		}}
		{...props}
	>
		{cottonInventory => <ListItem key={cottonInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<CottonNameInline cotton={cottonInventory.cotton}/>
					{cottonInventory.cotton.draws.length > 0 && <Tags tags={cottonInventory.cotton.draws}/>}
				</Space>}
			/>
		</ListItem>}
	</CottonInventoryListSource>;
};
