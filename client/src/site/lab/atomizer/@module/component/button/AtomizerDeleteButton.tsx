import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps} from "antd";

export interface IAtomizerDeleteButtonProps extends Partial<ButtonProps> {
	atomizer: AtomizerDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const AtomizerDeleteButton: FC<IAtomizerDeleteButtonProps> = ({atomizer, onOk, ...props}) => {
	const {t} = useTranslation();
	return <ModalButton
		title={'lab.atomizer.button.delete.confirm.title'}
		okText={t('lab.atomizer.button.delete.confirm.ok')}
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
			children: 'lab.atomizer.button.delete',
			...props,
		}}
	>
		lab.atomizer.button.delete.confirm
	</ModalButton>
}
