import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps} from "antd";

export interface ICoilDeleteButtonProps extends Partial<ButtonProps> {
	coil: CoilDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const CoilDeleteButton: FC<ICoilDeleteButtonProps> = ({coil, onOk, ...props}) => {
	const {t} = useTranslation();
	return <ModalButton
		title={'lab.coil.button.delete.confirm.title'}
		okText={t('lab.coil.button.delete.confirm.ok')}
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
			children: 'lab.coil.button.delete',
			...props,
		}}
	>
		lab.coil.button.delete.confirm
	</ModalButton>
}
