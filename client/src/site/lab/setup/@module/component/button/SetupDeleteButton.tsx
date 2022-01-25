import {FC} from "react";
import {SetupDto} from "@/sdk/puff-smith/setup/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps} from "antd";

export interface ISetupDeleteButtonProps extends Partial<ButtonProps> {
	setup: SetupDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const SetupDeleteButton: FC<ISetupDeleteButtonProps> = ({setup, onOk, ...props}) => {
	const {t} = useTranslation();
	return <ModalButton
		title={'lab.setup.button.delete.confirm.title'}
		okText={t('lab.setup.button.delete.confirm.ok')}
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
			children: 'lab.setup.button.delete',
			...props,
		}}
	>
		lab.setup.button.delete.confirm
	</ModalButton>
}
