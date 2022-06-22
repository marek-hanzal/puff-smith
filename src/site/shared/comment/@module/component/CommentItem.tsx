import {IComment} from "@/puff-smith/service/comment/interface";
import {CommentDeleteButton} from "@/puff-smith/site/shared/comment/@module/button/CommentDeleteButton";
import {CommentEditButton} from "@/puff-smith/site/shared/comment/@module/button/CommentEditButton";
import {ButtonBar, ListItem, toLocalDateTime} from "@leight-core/client";
import {Comment, Divider} from "antd";
import {FC} from "react";

export interface ICommentItemProps {
	comment: {
		id: string;
		comment: IComment;
	};

	onDelete?(): Promise<any>;

	onEdit?(): Promise<any>;
}

export const CommentItem: FC<ICommentItemProps> = ({comment, onDelete, onEdit}) => {
	return <ListItem key={comment.id}>
		<Comment
			content={<div style={{whiteSpace: "pre-wrap"}}>
				{comment.comment.comment}
			</div>}
			datetime={toLocalDateTime(comment.comment.created)}
			actions={[<ButtonBar key={"actions"} split={<Divider type={"vertical"}/>}>
				<CommentEditButton
					comment={comment.comment}
					onSuccess={async () => onEdit?.()}
				/>
				<CommentDeleteButton
					comment={comment.comment}
					onSuccess={async () => onDelete?.()}
				/>
			</ButtonBar>]}
		/>
	</ListItem>;
};
