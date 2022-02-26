import {ButtonLink, IButtonLinkProps} from "@leight-core/common";
import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {BarChartOutlined} from "@ant-design/icons";

export interface ILiquidPlotButtonProps extends Partial<IButtonLinkProps> {
	liquid: LiquidDto
}

export const LiquidPlotButton: FC<ILiquidPlotButtonProps> = ({liquid, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/liquid/[liquidId]/plot'}
		query={{liquidId: liquid.id}}
		icon={<BarChartOutlined/>}
		title={'lab.liquid.button.plot'}
		{...props}
	/>;
}
