import {FC} from "react";
import {VendorDto} from "@/sdk/puff-smith/vendor/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps, message} from "antd";
import {useDeleteMutation, useVendorsQueryInvalidate} from "@/sdk/puff-smith/api/lab/vendor/endpoint";

export interface IVendorDeleteButtonProps extends Partial<ButtonProps> {
	vendor: VendorDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const VendorDeleteButton: FC<IVendorDeleteButtonProps> = ({vendor, onOk, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const vendorsQueryInvalidate = useVendorsQueryInvalidate();
	return <ModalButton
		title={'lab.vendor.button.delete.confirm.title'}
		okText={t('lab.vendor.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={setShow => {
			deleteMutation.mutate({
				id: vendor.id,
			}, {
				onSuccess: response => {
					message.success(t('lab.vendor.deleted.success', {data: response}))
					vendorsQueryInvalidate();
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
			children: 'lab.vendor.button.delete',
			...props,
		}}
	>
		lab.vendor.button.delete.confirm
	</ModalButton>
}
