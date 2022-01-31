import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps} from "antd";

export interface IBuildDeleteButtonProps extends Partial<ButtonProps> {
	build: BuildDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const BuildDeleteButton: FC<IBuildDeleteButtonProps> = ({build, onOk, ...props}) => {
	const {t} = useTranslation();
	return <ModalButton
		title={'lab.build.button.delete.confirm.title'}
		okText={t('lab.build.button.delete.confirm.ok')}
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
			children: 'lab.build.button.delete',
			...props,
		}}
	>
		lab.build.button.delete.confirm
	</ModalButton>
}
