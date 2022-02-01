import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {Space, Typography} from "antd";
import {isMobile} from "react-device-detect";

export interface ILiquidInlineProps {
	liquid: LiquidDto;
}

export const LiquidInline: FC<ILiquidInlineProps> = ({liquid}) => {
	return <Space direction={isMobile ? 'vertical' : 'horizontal'}>
		{liquid.name}
		<Typography.Text type={'secondary'}>{liquid.vendor.name}</Typography.Text>
	</Space>
}
