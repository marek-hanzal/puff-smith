import {FC, ReactNode} from "react";
import {useTranslation} from "react-i18next";
import {CreateTemplate, DrawerButton} from "@leight-core/leight/dist";
import {PlusOutlined} from "@ant-design/icons";

export interface IFormTooltipProps {
	icon: ReactNode
	label: string
}

export const FormTooltip: FC<IFormTooltipProps> = ({icon, label, children}) => {
	const {t} = useTranslation();
	return <DrawerButton
		type={'link'}
		size={'small'}
		icon={<PlusOutlined/>}
		title={label + '.tooltip.create'}
		width={600}
	>
		<CreateTemplate
			icon={icon}
			label={label}
			span={24}
		>
			{children}
		</CreateTemplate>
	</DrawerButton>
}
