import {CommentItem} from "@/puff-smith/site/shared/comment/@module/component/CommentItem";
import {AtomizerInventoryCommentListSource, IAtomizerInventoryCommentListSourceProps, useAtomizerInventoryCommentQueryInvalidate} from "@/sdk/api/inventory/atomizer/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {Template} from "@leight-core/client";
import {FC} from "react";

export interface ICommentListProps extends Partial<IAtomizerInventoryCommentListSourceProps> {
}

export const CommentList: FC<ICommentListProps> = props => {
	const atomizerInventoryCommentQueryInvalidate = useAtomizerInventoryCommentQueryInvalidate();
	return <AtomizerInventoryCommentListSource
		emptyText={<Template
			icon={<CommentOutlined/>}
			label={"shared.comment.empty"}
		/>}
		{...props}
	>
		{buildComment => <CommentItem
			comment={buildComment}
			onDelete={async () => atomizerInventoryCommentQueryInvalidate()}
			onEdit={async () => atomizerInventoryCommentQueryInvalidate()}
		/>}
	</AtomizerInventoryCommentListSource>;
};
