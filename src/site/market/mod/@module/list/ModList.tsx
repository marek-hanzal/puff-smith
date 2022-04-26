import {Tags} from "@/puff-smith/component/Tags";
import {ModInventoryCreateButton} from "@/puff-smith/site/market/mod/@module/button/ModInventoryCreateButton";
import {ModNameInline} from "@/puff-smith/site/shared/mod/@module/inline/ModNameInline";
import {IModsMarketListSourceProps, ModsMarketListSource} from "@/sdk/api/mod/market/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IModListProps extends Partial<IModsMarketListSourceProps> {
}

export const ModList: FC<IModListProps> = props => {
	return <ModsMarketListSource
		{...props}
	>
		{({mod, isOwned}) => <ListItem key={mod.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<ModNameInline mod={mod}/>
					{mod.cells.length > 0 && <Tags tags={mod.cells}/>}
					{isOwned ? <BoolInline bool={isOwned}/> : <ModInventoryCreateButton type={"link"} mod={mod}/>}
				</Space>}
			/>
		</ListItem>}
	</ModsMarketListSource>;
};
