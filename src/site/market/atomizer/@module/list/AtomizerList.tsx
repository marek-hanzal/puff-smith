import {Tags} from "@/puff-smith";
import {AtomizerInventoryCreateButton} from "@/puff-smith/site/market/atomizer";
import {AtomizersListSource, IAtomizersListSourceProps} from "@/sdk/api/atomizer/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
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
					{atomizer.name}
					<Typography.Text type={"secondary"}>{atomizer.vendor.name}</Typography.Text>
					<Tags tags={atomizer.draws}/>
					<AtomizerInventoryCreateButton type={"link"} atomizer={atomizer}/>
				</Space>}
			/>
		</ListItem>}
	</AtomizersListSource>;
};
