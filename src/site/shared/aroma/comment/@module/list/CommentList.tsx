import {CommentItem} from "@/puff-smith/site/shared/comment/@module/component/CommentItem";
import {AromaCommentListSource, IAromaCommentListSourceProps, useAromaCommentQueryInvalidate} from "@/sdk/api/aroma/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {Template} from "@leight-core/client";
import {FC} from "react";

export interface ICommentListProps extends Partial<IAromaCommentListSourceProps> {
}

export const CommentList: FC<ICommentListProps> = props => {
	const aromaCommentQueryInvalidate = useAromaCommentQueryInvalidate();
	return <AromaCommentListSource
		locale={{
			emptyText: <Template
				icon={<CommentOutlined/>}
				label={"shared.comment.empty"}
			/>,
		}}
		{...props}
	>
		{aromaComment => <CommentItem
			comment={aromaComment}
			onDelete={async () => aromaCommentQueryInvalidate()}
			onEdit={async () => aromaCommentQueryInvalidate()}
		/>}
	</AromaCommentListSource>;
};
