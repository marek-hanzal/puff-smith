import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {List} from "antd";
import {AtomizerQuickMenu} from "../component/AtomizerQuickMenu";
import {AtomizerPreviewButton} from "../component/button/AtomizerPreviewButton";

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
