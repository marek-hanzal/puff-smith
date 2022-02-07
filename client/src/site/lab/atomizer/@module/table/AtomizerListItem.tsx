import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {AtomizerPreviewButton, AtomizerQuickMenu} from "@/puff-smith/site/lab/atomizer";
import {List} from "antd";

export interface IAtomizerListItemProps extends Partial<ListItemProps> {
	atomizer: AtomizerDto;
}

export const AtomizerListItem: FC<IAtomizerListItemProps> = ({atomizer, ...props}) => {
	return <List.Item
		actions={[<AtomizerQuickMenu key={'quick-menu'} atomizer={atomizer}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<AtomizerPreviewButton
				icon={null}
				style={{padding: 0}}
				title={atomizer.name}
				atomizer={atomizer}/>
			}
			description={atomizer.vendor.name}
		/>
	</List.Item>;
}
