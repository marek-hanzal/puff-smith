import {CommentItem} from "@/puff-smith/site/shared/comment/@module/component/CommentItem";
import {AromaInventoryCommentListSource, IAromaInventoryCommentListSourceProps, useAromaInventoryCommentQueryInvalidate} from "@/sdk/api/inventory/aroma/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {Template} from "@leight-core/client";
import {FC} from "react";

export interface ICommentListProps extends Partial<IAromaInventoryCommentListSourceProps> {
}

export const CommentList: FC<ICommentListProps> = props => {
	const aromaInventoryCommentQueryInvalidate = useAromaInventoryCommentQueryInvalidate();
	return <AromaInventoryCommentListSource
		emptyText={<Template
			icon={<CommentOutlined/>}
			label={"shared.comment.empty"}
		/>}
		withLoading={"isLoading"}
		{...props}
	>
		{buildComment => <CommentItem
			comment={buildComment}
			onDelete={async () => aromaInventoryCommentQueryInvalidate()}
			onEdit={async () => aromaInventoryCommentQueryInvalidate()}
		/>}
	</AromaInventoryCommentListSource>;
};
