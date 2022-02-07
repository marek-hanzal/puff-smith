import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {FC} from "react";
import {Space, Typography} from "antd";
import {isBrowser} from "react-device-detect";

export interface IAtomizerInlineProps {
	atomizer: AtomizerDto;
	inline?: boolean;
}

export const AtomizerInline: FC<IAtomizerInlineProps> = ({atomizer, inline = false}) => {
	return <Space direction={(isBrowser || inline) ? 'horizontal' : 'vertical'}>
		<span>{atomizer.name}</span>
		<Typography.Text type={'secondary'}>{atomizer.vendor.name}</Typography.Text>
	</Space>
}
