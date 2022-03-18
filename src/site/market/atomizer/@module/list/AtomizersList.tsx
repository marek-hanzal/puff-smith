import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Space, Typography} from "antd";
import {AtomizersListSource, IAtomizersListSourceProps} from "@/sdk/api/atomizer/query";
import {BuyAtomizerButton} from "@/puff-smith/site/market/atomizer";

export interface IAtomizersListProps extends Partial<IAtomizersListSourceProps> {
}

export const AtomizersList: FC<IAtomizersListProps> = props => {
	const {t} = useTranslation();
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
				description={<BuyAtomizerButton atomizer={atomizer}/>}
			/>
		</ListItem>}
	</AtomizersListSource>;
}
