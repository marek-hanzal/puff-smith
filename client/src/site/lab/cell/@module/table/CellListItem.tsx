import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {CellDto} from "@/sdk/puff-smith/cell/dto";
import {List} from "antd";
import {CellQuickMenu} from "@/puff-smith/site/lab/cell/@module/component/CellQuickMenu";
import {CellPreviewButton} from "@/puff-smith/site/lab/cell/@module/component/button/CellPreviewButton";

export interface ICellListItemProps extends Partial<ListItemProps> {
	cell: CellDto;
}

export const CellListItem: FC<ICellListItemProps> = ({cell, ...props}) => {
	return <List.Item
		actions={[<CellQuickMenu key={'quick-menu'} cell={cell}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<CellPreviewButton
				icon={null}
				style={{padding: 0}}
				title={cell.name}
				cell={cell}/>
			}
			description={cell.vendor.name}
		/>
	</List.Item>;
}
