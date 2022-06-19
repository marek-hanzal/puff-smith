import {CommentItem} from "@/puff-smith/site/shared/comment/@module/component/CommentItem";
import {BuildCommentListSource, IBuildCommentListSourceProps, useBuildCommentCountQueryInvalidate, useBuildCommentQueryInvalidate} from "@/sdk/api/lab/build/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {Template} from "@leight-core/client";
import {FC} from "react";

export interface ICommentListProps extends Partial<IBuildCommentListSourceProps> {
}

export const CommentList: FC<ICommentListProps> = props => {
	const buildCommentQueryInvalidate = useBuildCommentQueryInvalidate();
	const buildCommentCountQueryInvalidate = useBuildCommentCountQueryInvalidate();
	return <BuildCommentListSource
		locale={{
			emptyText: <Template
				icon={<CommentOutlined/>}
				label={"shared.comment.empty"}
			/>,
		}}
		{...props}
	>
		{buildComment => <CommentItem
			comment={buildComment}
			onDelete={async () => {
				await buildCommentQueryInvalidate();
				await buildCommentCountQueryInvalidate();
			}}
		/>}
	</BuildCommentListSource>;
};
