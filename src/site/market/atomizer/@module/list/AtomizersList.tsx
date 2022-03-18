import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Space, Typography} from "antd";
import {AtomizersListSource, IAtomizersListSourceProps} from "@/sdk/api/atomizer/query";

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
			/>
		</ListItem>}
	</AtomizersListSource>;
}
