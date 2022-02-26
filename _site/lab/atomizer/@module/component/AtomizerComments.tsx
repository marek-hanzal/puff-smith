import {FC} from "react";
import {CreateCommentForm} from "../form/CreateCommentForm";
import {Comments} from "../../../comment/@module/table/Comments";

export interface IAtomizerCommentsProps extends Partial<ICommentsSourceProps> {
	atomizer?: AtomizerDto;
}

export const AtomizerComments: FC<IAtomizerCommentsProps> = ({atomizer, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const filterContext = useCommentsOptionalFilterContext();
	return <CommentsSource
		filter={filterContext?.filter}
		defaultFilter={atomizer && {atomizerIds: [atomizer.id]}}
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
