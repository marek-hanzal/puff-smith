import {FC} from "react";
import {CommentsSource, ICommentsSourceProps, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/comment/endpoint";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {AtomizerCommentDto} from "@/sdk/puff-smith/atomizer/dto/comment";
import {CreateCommentForm} from "@/puff-smith/site/lab/atomizer/@module/form/CreateCommentForm";
import {Comments} from "@/puff-smith/site/lab/comment/@module/table/Comments";

export interface IAtomizerCommentsProps extends Partial<ICommentsSourceProps> {
	atomizer?: AtomizerDto;
}

export const AtomizerComments: FC<IAtomizerCommentsProps> = ({atomizer, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <CommentsSource
		defaultFilter={atomizer && {atomizerId: atomizer.id}}
		{...props}
	>
		<Comments<AtomizerCommentDto>
			form={atomizer && <CreateCommentForm closeDrawer={false} atomizer={atomizer}/>}
			toComment={dto => dto.comment}
			toCommentProps={dto => ({
				author: dto.atomizer.name,
			})}
			onEdit={commentsQueryInvalidate}
			onDelete={commentsQueryInvalidate}
		/>
	</CommentsSource>
}
