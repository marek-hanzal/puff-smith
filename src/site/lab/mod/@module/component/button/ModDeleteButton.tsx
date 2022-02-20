import {FC} from "react";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps, message} from "antd";
import {useDeleteMutation, useModsQueryInvalidate} from "@/sdk/puff-smith/api/lab/mod/endpoint";

export interface IModDeleteButtonProps extends Partial<ButtonProps> {
	mod: ModDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const ModDeleteButton: FC<IModDeleteButtonProps> = ({mod, onOk, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const modsQueryInvalidate = useModsQueryInvalidate();
	return <ModalButton
		title={'lab.mod.button.delete.confirm.title'}
		okText={t('lab.mod.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={setShow => {
			deleteMutation.mutate({
				id: mod.id,
			}, {
				onSuccess: response => {
					message.success(t('lab.mod.deleted.success', {data: response}))
					modsQueryInvalidate();
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
			children: 'lab.mod.button.delete',
			...props,
		}}
	>
		lab.mod.button.delete.confirm
	</ModalButton>
}
