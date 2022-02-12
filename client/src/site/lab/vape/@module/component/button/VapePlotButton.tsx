import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {BarChartOutlined} from "@ant-design/icons";

export interface IVapePlotButtonProps extends Partial<IButtonLinkProps> {
}

export const VapePlotButton: FC<IVapePlotButtonProps> = props => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/vape/plot'}
		icon={<BarChartOutlined/>}
		title={'lab.vape.button.plot'}
		{...props}
	/>;
}
