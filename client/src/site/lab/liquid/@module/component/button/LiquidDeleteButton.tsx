import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps} from "antd";

export interface ILiquidDeleteButtonProps extends Partial<ButtonProps> {
	liquid: LiquidDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const LiquidDeleteButton: FC<ILiquidDeleteButtonProps> = ({liquid, onOk, ...props}) => {
	const {t} = useTranslation();
	return <ModalButton
		title={'lab.liquid.button.delete.confirm.title'}
		okText={t('lab.liquid.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={onOk}
		okButtonProps={{
			danger: true,
			size: 'large',
			icon: <DeleteItemIcon/>,
		}}
		button={{
			type: 'link',
			size: 'large',
			danger: true,
			icon: <DeleteItemIcon/>,
			children: 'lab.liquid.button.delete',
			...props,
		}}
	>
		lab.liquid.button.delete.confirm
	</ModalButton>
}
