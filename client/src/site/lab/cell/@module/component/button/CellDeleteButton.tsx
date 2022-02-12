import {FC} from "react";
import {CellDto} from "@/sdk/puff-smith/cell/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps, message} from "antd";
import {useCellsQueryInvalidate, useDeleteMutation} from "@/sdk/puff-smith/api/lab/cell/endpoint";

export interface ICellDeleteButtonProps extends Partial<ButtonProps> {
	cell: CellDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const CellDeleteButton: FC<ICellDeleteButtonProps> = ({cell, onOk, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const cellsQueryInvalidate = useCellsQueryInvalidate();
	return <ModalButton
		title={'lab.cell.button.delete.confirm.title'}
		okText={t('lab.cell.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={setShow => {
			deleteMutation.mutate({
				id: cell.id,
			}, {
				onSuccess: response => {
					message.success(t('lab.cell.deleted.success', {data: response}))
					cellsQueryInvalidate();
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
			children: 'lab.cell.button.delete',
			...props,
		}}
	>
		lab.cell.button.delete.confirm
	</ModalButton>
}
