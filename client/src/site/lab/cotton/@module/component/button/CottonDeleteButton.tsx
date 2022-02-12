import {FC} from "react";
import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps, message} from "antd";
import {useCottonsQueryInvalidate, useDeleteMutation} from "@/sdk/puff-smith/api/lab/cotton/endpoint";

export interface ICottonDeleteButtonProps extends Partial<ButtonProps> {
	cotton: CottonDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const CottonDeleteButton: FC<ICottonDeleteButtonProps> = ({cotton, onOk, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const cottonsQueryInvalidate = useCottonsQueryInvalidate();
	return <ModalButton
		title={'lab.cotton.button.delete.confirm.title'}
		okText={t('lab.cotton.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={setShow => {
			deleteMutation.mutate({
				id: cotton.id,
			}, {
				onSuccess: response => {
					message.success(t('lab.cotton.deleted.success', {data: response}))
					cottonsQueryInvalidate();
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
			children: 'lab.cotton.button.delete',
			...props,
		}}
	>
		lab.cotton.button.delete.confirm
	</ModalButton>
}
