import {FC} from "react";
import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/common";
import {ButtonProps, message} from "antd";
import {useDeleteMutation, useWiresQueryInvalidate} from "@/sdk/puff-smith/api/lab/wire/endpoint";

export interface IWireDeleteButtonProps extends Partial<ButtonProps> {
	wire: WireDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const WireDeleteButton: FC<IWireDeleteButtonProps> = ({wire, onOk, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const wiresQueryInvalidate = useWiresQueryInvalidate();
	return <ModalButton
		title={'lab.wire.button.delete.confirm.title'}
		okText={t('lab.wire.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={setShow => {
			deleteMutation.mutate({
				id: wire.id,
			}, {
				onSuccess: response => {
					message.success(t('lab.wire.deleted.success', {data: response}))
					wiresQueryInvalidate();
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
			children: 'lab.wire.button.delete',
			...props,
		}}
	>
		lab.wire.button.delete.confirm
	</ModalButton>
}
