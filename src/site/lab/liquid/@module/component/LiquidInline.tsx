import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {Space, Typography} from "antd";
import {useIsMobile} from "@leight-core/common";

export interface ILiquidInlineProps {
	liquid: LiquidDto;
}

export const LiquidInline: FC<ILiquidInlineProps> = ({liquid}) => {
	const isMobile = useIsMobile();
	return <Space direction={isMobile ? 'vertical' : 'horizontal'}>
		{liquid.name}
		<Typography.Text type={'secondary'}>{liquid.vendor.name}</Typography.Text>
	</Space>
}
