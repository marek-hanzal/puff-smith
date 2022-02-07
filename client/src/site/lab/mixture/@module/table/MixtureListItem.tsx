import {ListItemProps} from "antd/lib/list";
import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {MixturePreviewButton, MixtureQuickMenu} from "@/puff-smith/site/lab/mixture";
import {List} from "antd";

export interface IMixtureListItemProps extends Partial<ListItemProps> {
	mixture: MixtureDto;
}

export const MixtureListItem: FC<IMixtureListItemProps> = ({mixture, ...props}) => {
	return <List.Item
		className={mixture.active ? 'active' : 'inactive'}
		actions={[<MixtureQuickMenu key={'quick-menu'} mixture={mixture}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<MixturePreviewButton
				style={{padding: 0}}
				title={mixture.liquid.name}
				mixture={mixture}
			/>}
			description={mixture.liquid.vendor.name}
		/>
	</List.Item>;
}
