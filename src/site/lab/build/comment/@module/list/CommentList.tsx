import {CommentDeleteButton} from "@/puff-smith/site/shared/comment/@module/button/CommentDeleteButton";
import {BuildCommentListSource, IBuildCommentListSourceProps, useBuildCommentCountQueryInvalidate, useBuildCommentQueryInvalidate} from "@/sdk/api/lab/build/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {ListItem, Template, TextArea, toLocalDateTime} from "@leight-core/client";
import {Comment} from "antd";
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
		{buildComment => <ListItem>
			<Comment
				content={<TextArea
					style={{padding: 0}}
					autoSize
					bordered={false}
					readOnly
					value={buildComment.comment.comment}
				/>}
				datetime={toLocalDateTime(buildComment.comment.created)}
				actions={[
					<CommentDeleteButton
						key={buildComment.id}
						comment={buildComment.comment}
						onSuccess={async () => {
							await buildCommentQueryInvalidate();
							await buildCommentCountQueryInvalidate();
						}}
					/>,
				]}
			/>
		</ListItem>}
	</BuildCommentListSource>;
};
