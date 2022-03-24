import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {CellDto} from "@/sdk/puff-smith/voucher/dto";
import {List} from "antd";
import {CellQuickMenu} from "../component/CellQuickMenu";
import {CellPreviewButton} from "../component/button/CellPreviewButton";

export interface ICellListItemProps extends Partial<ListItemProps> {
	voucher: CellDto;
}

export const CellListItem: FC<ICellListItemProps> = ({voucher, ...props}) => {
	return <List.Item
		actions={[<CellQuickMenu key={'quick-menu'} voucher={voucher}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<CellPreviewButton
				icon={null}
				style={{padding: 0}}
				title={voucher.name}
				voucher={voucher}/>
			}
			description={voucher.vendor.name}
		/>
	</List.Item>;
}
