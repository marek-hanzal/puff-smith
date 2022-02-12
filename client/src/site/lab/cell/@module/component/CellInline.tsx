import {CellDto} from "@/sdk/puff-smith/cell/dto";
import {Space, Typography} from "antd";
import {FC} from "react";
import {useIsMobile} from "@leight-core/leight";

export interface ICellInlineProps {
	cell: CellDto;
}

export const CellInline: FC<ICellInlineProps> = ({cell}) => {
	const isMobile = useIsMobile();
	return <Space direction={isMobile ? 'vertical' : 'horizontal'}>
		{cell.name}<Typography.Text type={'secondary'}>{cell.vendor.name}</Typography.Text>
	</Space>;
}
