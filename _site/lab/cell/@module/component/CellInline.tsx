import {CellDto} from "@/sdk/puff-smith/voucher/dto";
import {Space, Typography} from "antd";
import {FC} from "react";
import {useIsMobile} from "@leight-core/common";

export interface ICellInlineProps {
	voucher: CellDto;
}

export const CellInline: FC<ICellInlineProps> = ({voucher}) => {
	const isMobile = useIsMobile();
	return <Space direction={isMobile ? 'vertical' : 'horizontal'}>
		{voucher.name}<Typography.Text type={'secondary'}>{voucher.vendor.name}</Typography.Text>
	</Space>;
}
