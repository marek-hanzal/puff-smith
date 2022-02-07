import {FC} from "react";
import {CommentsSource, useCommentsOptionalFilterContext, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {CommentList} from "@/puff-smith/site/lab/comment";

export interface IBuildCommentsProps {
}

export const BuildComments: FC<IBuildCommentsProps> = () => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const filterContext = useCommentsOptionalFilterContext();
	return <CommentsSource filter={filterContext?.filter}>
		<CommentList
			onEdit={() => commentsQueryInvalidate()}
			onDelete={() => commentsQueryInvalidate()}
		/>
	</CommentsSource>
}
