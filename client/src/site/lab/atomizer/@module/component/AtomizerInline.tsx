import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {FC} from "react";
import {Space, Typography} from "antd";
import {isMobile} from "react-device-detect";

export interface IAtomizerInlineProps {
	atomizer: AtomizerDto;
}

export const AtomizerInline: FC<IAtomizerInlineProps> = ({atomizer}) => {
	return <Space direction={isMobile ? 'vertical' : 'horizontal'}>
		<span>{atomizer.name}</span>
		<Typography.Text type={'secondary'}>{atomizer.vendor.name}</Typography.Text>
	</Space>
}
