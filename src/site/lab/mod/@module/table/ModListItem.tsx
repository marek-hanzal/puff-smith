import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {List} from "antd";
import {ModQuickMenu} from "@/puff-smith/site/lab/mod/@module/component/ModQuickMenu";
import {ModPreviewButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModPreviewButton";

export interface IModListItemProps extends Partial<ListItemProps> {
	mod: ModDto;
}

export const ModListItem: FC<IModListItemProps> = ({mod, ...props}) => {
	return <List.Item
		actions={[<ModQuickMenu key={'quick-menu'} mod={mod}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<ModPreviewButton
				icon={null}
				style={{padding: 0}}
				title={mod.name}
				mod={mod}/>
			}
			description={mod.vendor.name}
		/>
	</List.Item>;
}
