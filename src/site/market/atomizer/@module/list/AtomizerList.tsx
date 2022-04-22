import {Tags} from "@/puff-smith";
import {AtomizerInventoryCreateButton} from "@/puff-smith/site/market/atomizer";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer";
import {AtomizersMarketListSource, IAtomizersMarketListSourceProps} from "@/sdk/api/atomizer/market/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAtomizerListProps extends Partial<IAtomizersMarketListSourceProps> {
}

export const AtomizerList: FC<IAtomizerListProps> = props => {
	return <AtomizersMarketListSource
		{...props}
	>
		{({atomizer, isOwned}) => <ListItem key={atomizer.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AtomizerNameInline atomizer={atomizer}/>
					<Tags tags={atomizer.draws}/>
					{isOwned ? <BoolInline bool={isOwned}/> : <AtomizerInventoryCreateButton type={"link"} atomizer={atomizer}/>}
				</Space>}
			/>
		</ListItem>}
	</AtomizersMarketListSource>;
};
