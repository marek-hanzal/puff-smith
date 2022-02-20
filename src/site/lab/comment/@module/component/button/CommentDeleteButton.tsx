import {FC} from "react";
import {CommentDto} from "@/sdk/puff-smith/comment/dto";
import {useTranslation} from "react-i18next";
import {DeleteItemIcon, ModalButton} from "@leight-core/leight";
import {ButtonProps} from "antd";

export interface ICommentDeleteButtonProps extends Partial<ButtonProps> {
	comment: CommentDto;
	onOk?: (setShow: (show: boolean) => void) => void,
	label?: string | null
}

export const CommentDeleteButton: FC<ICommentDeleteButtonProps> = ({comment, onOk, label = 'lab.comment.button.delete', ...props}) => {
	const {t} = useTranslation();
	return <ModalButton
		title={'lab.comment.button.delete.confirm.title'}
		okText={t('lab.comment.button.delete.confirm.ok')}
		cancelText={t('common.cancel')}
		onOk={onOk}
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
			children: label,
			...props,
		}}
	>
		lab.comment.button.delete.confirm
	</ModalButton>
}
