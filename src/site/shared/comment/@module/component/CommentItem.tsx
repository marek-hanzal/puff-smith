import {IComment} from "@/puff-smith/service/comment/interface";
import {CommentDeleteButton} from "@/puff-smith/site/shared/comment/@module/button/CommentDeleteButton";
import {ListItem, toLocalDateTime} from "@leight-core/client";
import {Comment} from "antd";
import {FC} from "react";

export interface ICommentItemProps {
	comment: {
		id: string;
		comment: IComment;
	};

	onDelete?(): Promise<any>;
}

export const CommentItem: FC<ICommentItemProps> = ({comment, onDelete}) => {
	return <ListItem key={comment.id}>
		<Comment
			content={<div style={{whiteSpace: "pre-wrap"}}>
				{comment.comment.comment}
			</div>}
			datetime={toLocalDateTime(comment.comment.created)}
			actions={[
				<CommentDeleteButton
					key={comment.id}
					comment={comment.comment}
					onSuccess={async () => onDelete?.()}
				/>,
			]}
		/>
	</ListItem>;
};
