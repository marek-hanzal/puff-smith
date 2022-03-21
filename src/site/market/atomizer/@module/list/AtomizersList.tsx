import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Space, Typography} from "antd";
import {AtomizersListSource, IAtomizersListSourceProps} from "@/sdk/api/atomizer/query";
import {AtomizerTransactionCreateButton} from "@/puff-smith/site/market/atomizer";

export interface IAtomizersListProps extends Partial<IAtomizersListSourceProps> {
}

export const AtomizersList: FC<IAtomizersListProps> = props => {
	return <AtomizersListSource
		itemLayout={'vertical'}
		{...props}
	>
		{atomizer => <ListItem key={atomizer.id}>
			<ListItemMeta
				title={<Space>
					{atomizer.name}
					<Typography.Text type={'secondary'}>{atomizer.vendor.name}</Typography.Text>
				</Space>}
				description={<AtomizerTransactionCreateButton atomizer={atomizer}/>}
			/>
		</ListItem>}
	</AtomizersListSource>;
}
