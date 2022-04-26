import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {Space, SpaceProps} from "antd";
import {FC} from "react";

export interface ILiquidNameInlineProps extends Partial<SpaceProps> {
	liquid: ILiquid;
}

export const LiquidNameInline: FC<ILiquidNameInlineProps> = ({liquid, ...props}) => {
	return <Space {...props}>
		{liquid.name}
	</Space>;
};
