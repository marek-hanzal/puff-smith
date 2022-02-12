import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {WirePreviewButton, WireQuickMenu} from "@/puff-smith/site/lab/wire";
import {List} from "antd";

export interface IWireListItemProps extends Partial<ListItemProps> {
	wire: WireDto;
}

export const WireListItem: FC<IWireListItemProps> = ({wire, ...props}) => {
	return <List.Item
		actions={[<WireQuickMenu key={'quick-menu'} wire={wire}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<WirePreviewButton
				icon={null}
				style={{padding: 0}}
				title={wire.name}
				wire={wire}/>
			}
			description={wire.vendor.name}
		/>
	</List.Item>;
}
