import {IComment} from "@/puff-smith/service/comment/interface";
import {useDeleteMutation} from "@/sdk/api/comment/delete";
import {DeleteItemIcon, IModalButtonProps, ModalButton} from "@leight-core/client";
import {FC} from "react";

export interface ICommentDeleteButtonProps extends Partial<IModalButtonProps> {
	comment: IComment;
	onSuccess?: () => Promise<any>;
}

export const CommentDeleteButton: FC<ICommentDeleteButtonProps> = ({comment, onSuccess, ...props}) => {
	const deleteMutation = useDeleteMutation();
	return <ModalButton
		button={{
			size: "large",
			icon: <DeleteItemIcon/>,
			type: "text",
			danger: true,
			children: "shared.comment.delete.button",
			loading: deleteMutation.isLoading,
		}}
		okButtonProps={{
			size: "large",
			icon: <DeleteItemIcon/>,
			type: "text",
			danger: true,
			loading: deleteMutation.isLoading,
		}}
		cancelButtonProps={{
			size: "large",
			type: "link",
		}}
		onOk={() => {
			deleteMutation.mutate([comment.id], {
				onSuccess: () => onSuccess?.(),
			});
		}}
		title={"shared.comment.delete.title"}
		{...props}
	>
		shared.comment.delete.content
	</ModalButton>;
};
