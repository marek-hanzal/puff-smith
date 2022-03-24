import {FC} from "react";
import {CellDto} from "@/sdk/puff-smith/voucher/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/common";
import {ButtonProps, message} from "antd";
import {useCellsQueryInvalidate, useDeleteMutation} from "@/sdk/puff-smith/api/lab/voucher/endpoint";

export interface ICellDeleteButtonProps extends Partial<ButtonProps> {
	voucher: CellDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const CellDeleteButton: FC<ICellDeleteButtonProps> = ({voucher, onOk, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const vouchersQueryInvalidate = useCellsQueryInvalidate();
	return <ModalButton
		title={'lab.voucher.button.delete.confirm.title'}
		okText={t('lab.voucher.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={setShow => {
			deleteMutation.mutate({
				id: voucher.id,
			}, {
				onSuccess: response => {
					message.success(t('lab.voucher.deleted.success', {data: response}))
					vouchersQueryInvalidate();
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
			children: 'lab.voucher.button.delete',
			...props,
		}}
	>
		lab.voucher.button.delete.confirm
	</ModalButton>
}
