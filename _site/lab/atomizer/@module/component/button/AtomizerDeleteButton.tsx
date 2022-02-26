import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/common";
import {ButtonProps, message} from "antd";
import {useAtomizersQueryInvalidate, useDeleteMutation} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {useUserAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/user/atomizer/endpoint";

export interface IAtomizerDeleteButtonProps extends Partial<ButtonProps> {
	atomizer: AtomizerDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const AtomizerDeleteButton: FC<IAtomizerDeleteButtonProps> = ({atomizer, onOk, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const atomizersQueryInvalidate = useAtomizersQueryInvalidate();
	const userAtomizersQueryInvalidate = useUserAtomizersQueryInvalidate();
	return <ModalButton
		title={'lab.atomizer.button.delete.confirm.title'}
		okText={t('lab.atomizer.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={setShow => {
			deleteMutation.mutate({
				id: atomizer.id,
			}, {
				onSuccess: response => {
					message.success(t('lab.atomizer.deleted.success', {data: response}))
					atomizersQueryInvalidate();
					userAtomizersQueryInvalidate();
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
			children: 'lab.atomizer.button.delete',
			...props,
		}}
	>
		lab.atomizer.button.delete.confirm
	</ModalButton>
}
