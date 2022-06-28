import {CommentItem} from "@/puff-smith/site/shared/comment/@module/component/CommentItem";
import {AtomizerCommentListSource, IAtomizerCommentListSourceProps, useAtomizerCommentQueryInvalidate} from "@/sdk/api/atomizer/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {Template} from "@leight-core/client";
import {FC} from "react";

export interface ICommentListProps extends Partial<IAtomizerCommentListSourceProps> {
}

export const CommentList: FC<ICommentListProps> = props => {
	const atomizerCommentQueryInvalidate = useAtomizerCommentQueryInvalidate();
	return <AtomizerCommentListSource
		emptyText={<Template
			icon={<CommentOutlined/>}
			label={"shared.comment.empty"}
		/>}
		{...props}
	>
		{atomizerComment => <CommentItem
			comment={atomizerComment}
			onDelete={async () => atomizerCommentQueryInvalidate()}
			onEdit={async () => atomizerCommentQueryInvalidate()}
		/>}
	</AtomizerCommentListSource>;
};
