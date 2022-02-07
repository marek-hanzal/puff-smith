import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {CoilPreviewButton, CoilQuickMenu} from "@/puff-smith/site/lab/coil";
import {List} from "antd";

export interface ICoilListItemProps extends Partial<ListItemProps> {
	coil: CoilDto;
}

export const CoilListItem: FC<ICoilListItemProps> = ({coil, ...props}) => {
	return <List.Item
		actions={[<CoilQuickMenu key={'quick-menu'} coil={coil}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<CoilPreviewButton
				icon={null}
				style={{padding: 0}}
				title={coil.wire.name}
				coil={coil}/>
			}
			description={coil.wire.vendor.name}
		/>
	</List.Item>;
}