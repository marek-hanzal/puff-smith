import {FC} from "react";
import {CommentsSource, useCommentsOptionalFilterContext} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {CommentList} from "@/puff-smith/site/lab/comment";
import {useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";

export interface IVapeCommentsProps {
}

export const VapeComments: FC<IVapeCommentsProps> = () => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const filterContext = useCommentsOptionalFilterContext();
	return <CommentsSource filter={filterContext?.filter}>
		<CommentList
			onEdit={() => commentsQueryInvalidate()}
			onDelete={() => commentsQueryInvalidate()}
		/>
	</CommentsSource>
}
