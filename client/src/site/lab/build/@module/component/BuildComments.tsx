import {FC} from "react";
import {CommentsSource, ICommentsSourceProps, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {BuildCommentDto} from "@/sdk/puff-smith/build/dto/comment";
import {Divider, Space} from "antd";
import {CreateCommentForm} from "@/puff-smith/site/lab/build/@module/form/CreateCommentForm";
import {Comments} from "@/puff-smith/site/lab/comment/@module/table/Comments";

export interface IBuildCommentsProps extends Partial<ICommentsSourceProps> {
	build?: BuildDto;
}

export const BuildComments: FC<IBuildCommentsProps> = ({build, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <CommentsSource
		defaultFilter={build && {buildId: build.id}}
		{...props}
	>
		<Comments<BuildCommentDto>
			form={build && <CreateCommentForm build={build}/>}
			toComment={dto => dto.comment}
			toCommentProps={dto => ({
				author: <Space size={0} split={<Divider type={'vertical'}/>}>
					<span>{dto.build.atomizer.name}</span>
					<span>{dto.build.coil.wire.name}</span>
				</Space>,
			})}
			onEdit={commentsQueryInvalidate}
			onDelete={commentsQueryInvalidate}
		/>
	</CommentsSource>
}
