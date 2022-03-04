import {FC, ReactNode} from "react";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";

export interface IFormTooltipProps extends Partial<IDrawerButtonProps> {
	icon?: ReactNode
	label?: string
}

export const FormTooltip: FC<IFormTooltipProps> = ({icon, label, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'middle'}
		icon={<PlusOutlined/>}
		title={label + '.tooltip.create'}
		{...props}
	/>
}