import {FC} from "react";
import {DrawerButton, IDrawerButtonProps, IFormOnSuccess} from "@leight-core/leight";
import {CommentDto} from "@/sdk/puff-smith/comment/dto";
import {PatchCommentForm} from "@/puff-smith/site/lab/comment";

export interface IDrawerCommentEditButtonProps extends Partial<IDrawerButtonProps> {
	comment: CommentDto;
	onSuccess?: IFormOnSuccess<CommentDto, CommentDto>
}

export const DrawerCommentEditButton: FC<IDrawerCommentEditButtonProps> = ({comment, onSuccess, ...props}) => {
	return <DrawerButton
		width={600}
		{...props}
	>
		<PatchCommentForm
			onSuccess={onSuccess}
			comment={comment}
		/>
	</DrawerButton>
}
