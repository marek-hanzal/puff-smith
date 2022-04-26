import {ICell} from "@/puff-smith/service/cell/interface";
import {Space, SpaceProps, Typography} from "antd";
import {FC} from "react";

export interface ICellNameInlineProps extends Partial<SpaceProps> {
	cell: ICell;
}

export const CellNameInline: FC<ICellNameInlineProps> = ({cell, ...props}) => {
	return <Space {...props}>
		{cell.name}
		<Typography.Text type={"secondary"}>{cell.vendor.name}</Typography.Text>
	</Space>;
};
