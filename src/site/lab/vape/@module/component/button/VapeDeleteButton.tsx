import {FC} from "react";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/common";
import {ButtonProps, message} from "antd";
import {useDeleteMutation, usePlotQueryInvalidate, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";

export interface IVapeDeleteButtonProps extends Partial<ButtonProps> {
	vape: VapeDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const VapeDeleteButton: FC<IVapeDeleteButtonProps> = ({vape, onOk, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	const plotQueryInvalidate = usePlotQueryInvalidate();
	return <ModalButton
		title={'lab.vape.button.delete.confirm.title'}
		okText={t('lab.vape.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={setShow => {
			deleteMutation.mutate({
				id: vape.id,
			}, {
				onSuccess: () => {
					message.success(t('lab.vape.deleted.success'))
					vapesQueryInvalidate();
					plotQueryInvalidate();
				},
			})
			onOk ? onOk(setShow) : setShow(false);
		}}
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
			children: 'lab.vape.button.delete',
			...props,
		}}
	>
		lab.vape.button.delete.confirm
	</ModalButton>
}
