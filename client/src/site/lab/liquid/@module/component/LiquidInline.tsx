import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {Typography} from "antd";

export interface ILiquidInlineProps {
	liquid: LiquidDto;
}

export const LiquidInline: FC<ILiquidInlineProps> = ({liquid}) => {
	return <>
		{liquid.name}&nbsp;<Typography.Text type={'secondary'}>{liquid.vendor.name}</Typography.Text>
	</>
}
