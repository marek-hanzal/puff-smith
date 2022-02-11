import {FC} from "react";
import {CommentsSource, ICommentsSourceProps, useCommentsOptionalFilterContext, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/comment/endpoint";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {AtomizerPreviewButton, CreateCommentForm} from "@/puff-smith/site/lab/atomizer";
import {AtomizerCommentDto} from "@/sdk/puff-smith/atomizer/dto/comment";
import {Comments} from "@/puff-smith/site/lab/comment";
import {Divider, Space} from "antd";

export interface IAtomizerCommentsProps extends Partial<ICommentsSourceProps> {
	atomizer?: AtomizerDto;
}

export const AtomizerComments: FC<IAtomizerCommentsProps> = ({atomizer, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const filterContext = useCommentsOptionalFilterContext();
	return <CommentsSource
		filter={filterContext?.filter}
		defaultFilter={atomizer && {atomizerId: atomizer.id}}
		{...props}
	>
		<Comments<AtomizerCommentDto>
			form={atomizer && <CreateCommentForm closeDrawer={false} atomizer={atomizer}/>}
			toComment={dto => dto.comment}
			toCommentProps={dto => ({
				author: <Space size={0} split={<Divider type={'vertical'}/>}>
					<AtomizerPreviewButton
						size={'small'}
						style={{padding: 0}}
						title={dto.atomizer.name}
						icon={null}
						atomizer={dto.atomizer}
					/>
				</Space>,
			})}
			onEdit={() => commentsQueryInvalidate()}
			onDelete={() => commentsQueryInvalidate()}
		/>
	</CommentsSource>
}
