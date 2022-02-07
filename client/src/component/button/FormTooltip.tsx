import {FC, ReactNode} from "react";
import {CreateTemplate, DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {PlusOutlined} from "@ant-design/icons";

export interface IFormTooltipProps extends Partial<IDrawerButtonProps> {
	icon?: ReactNode
	label?: string
}

export const FormTooltip: FC<IFormTooltipProps> = ({icon, label, children, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'middle'}
		icon={<PlusOutlined/>}
		title={label + '.tooltip.create'}
		{...props}
	>
		<CreateTemplate
			icon={icon}
			isMobile
			span={24}
		>
			{children}
		</CreateTemplate>
	</DrawerButton>
}
