import {Tags} from "@/puff-smith";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton";
import {CottonsInventoryListSource, ICottonsInventoryListSourceProps} from "@/sdk/api/cotton/inventory/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICottonInventoryListProps extends Partial<ICottonsInventoryListSourceProps> {
}

export const CottonInventoryList: FC<ICottonInventoryListProps> = props => {
	return <CottonsInventoryListSource
		{...props}
	>
		{cottonInventory => <ListItem key={cottonInventory.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<CottonNameInline cotton={cottonInventory.cotton}/>
					<Tags tags={cottonInventory.cotton.draws}/>
				</Space>}
			/>
		</ListItem>}
	</CottonsInventoryListSource>;
};
