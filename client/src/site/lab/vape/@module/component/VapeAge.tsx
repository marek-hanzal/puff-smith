import {FC} from "react";
import {durationOf, toLocalDateTime} from "@leight-core/leight";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {Space, Typography} from "antd";

export interface IVapeAgeProps {
	vape: VapeDto;
}

export const VapeAge: FC<IVapeAgeProps> = ({vape}) => {
	return <Space>
		<span>({durationOf(vape.stamp).humanize()})</span>
		<Typography.Text type={'secondary'}>{toLocalDateTime(vape.stamp)}</Typography.Text>
	</Space>;
}
