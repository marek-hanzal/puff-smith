import {FC} from "react";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps, message} from "antd";
import {UserAtomizerDto} from "@/sdk/puff-smith/user/dto/atomizer";
import {useDeleteMutation, useUserAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/user/atomizer/endpoint";
import {useAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";

export interface IUserAtomizerDeleteButtonProps extends Partial<ButtonProps> {
	userAtomizer: UserAtomizerDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const UserAtomizerDeleteButton: FC<IUserAtomizerDeleteButtonProps> = ({userAtomizer, onOk, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const atomizersQueryInvalidate = useAtomizersQueryInvalidate();
	const userAtomizersQueryInvalidate = useUserAtomizersQueryInvalidate();
	return <ModalButton
		title={'lab.atomizer.user.button.delete.confirm.title'}
		okText={t('lab.atomizer.user.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={setShow => {
			deleteMutation.mutate({
				id: userAtomizer.id,
			}, {
				onSuccess: response => {
					message.success(t('lab.atomizer.user.deleted.success', {data: response}))
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
			children: 'lab.atomizer.user.button.delete',
			...props,
		}}
	>
		lab.atomizer.user.button.delete.confirm
	</ModalButton>
}
