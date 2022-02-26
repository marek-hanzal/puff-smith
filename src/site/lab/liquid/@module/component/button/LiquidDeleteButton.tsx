import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/common";
import {ButtonProps, message} from "antd";
import {useDeleteMutation, useLiquidsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/endpoint";

export interface ILiquidDeleteButtonProps extends Partial<ButtonProps> {
	liquid: LiquidDto;
	onOk?: (setShow: (show: boolean) => void) => void,
}

export const LiquidDeleteButton: FC<ILiquidDeleteButtonProps> = ({liquid, onOk, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	return <ModalButton
		title={'lab.liquid.button.delete.confirm.title'}
		okText={t('lab.liquid.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={setShow => {
			deleteMutation.mutate({
				id: liquid.id,
			}, {
				onSuccess: response => {
					message.success(t('lab.liquid.deleted.success', {data: response}))
					liquidsQueryInvalidate();
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
			children: 'lab.liquid.button.delete',
			...props,
		}}
	>
		lab.liquid.button.delete.confirm
	</ModalButton>
}
