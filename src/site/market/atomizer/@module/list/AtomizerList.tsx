import {Tags} from "@/puff-smith";
import {AtomizerInventoryCreateButton} from "@/puff-smith/site/market/atomizer";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer";
import {AtomizersListSource, IAtomizersListSourceProps} from "@/sdk/api/atomizer/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAtomizerListProps extends Partial<IAtomizersListSourceProps> {
}

export const AtomizerList: FC<IAtomizerListProps> = props => {
	return <AtomizersListSource
		{...props}
	>
		{atomizer => <ListItem key={atomizer.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AtomizerNameInline atomizer={atomizer}/>
					<Tags tags={atomizer.draws}/>
					<AtomizerInventoryCreateButton type={"link"} atomizer={atomizer}/>
				</Space>}
			/>
		</ListItem>}
	</AtomizersListSource>;
};
