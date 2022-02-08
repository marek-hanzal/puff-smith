import {FC} from "react";
import {CommentsSource, ICommentsSourceProps, useCommentsOptionalFilterContext, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {BuildPreviewButton, CreateCommentForm} from "@/puff-smith/site/lab/build";
import {BuildCommentDto} from "@/sdk/puff-smith/build/dto/comment";
import {Comments} from "@/puff-smith/site/lab/comment";
import {Divider, Space} from "antd";
import {CoilPreviewButton} from "@/puff-smith/site/lab/coil";

export interface IBuildCommentsProps extends Partial<ICommentsSourceProps> {
	build?: BuildDto;
}

export const BuildComments: FC<IBuildCommentsProps> = ({build, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const filterContext = useCommentsOptionalFilterContext();
	return <CommentsSource
		filter={filterContext?.filter}
		defaultFilter={build && {buildId: build.id}}
		{...props}
	>
		<Comments<BuildCommentDto>
			form={build && <CreateCommentForm build={build}/>}
			toComment={dto => dto.comment}
			toCommentProps={dto => ({
				author: <Space size={0} split={<Divider type={'vertical'}/>}>
					<BuildPreviewButton
						size={'small'}
						style={{padding: 0}}
						title={dto.build.atomizer.name}
						icon={null}
						build={dto.build}
					/>
					<CoilPreviewButton
						size={'small'}
						style={{padding: 0}}
						title={dto.build.coil.wire.name}
						icon={null}
						coil={dto.build.coil}
					/>
				</Space>,
			})}
			onEdit={() => commentsQueryInvalidate()}
			onDelete={() => commentsQueryInvalidate()}
		/>
	</CommentsSource>
}
