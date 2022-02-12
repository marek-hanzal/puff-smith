import {FC} from "react";
import {CommentsSource, ICommentsSourceProps, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/comment/endpoint";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {LiquidCommentDto} from "@/sdk/puff-smith/liquid/dto/comment";
import {Divider, Space} from "antd";
import {CreateCommentForm} from "@/puff-smith/site/lab/liquid/@module/form/CreateCommentForm";
import {LiquidPreviewButton} from "@/puff-smith/site/lab/liquid/@module/component/button/LiquidPreviewButton";
import {Comments} from "@/puff-smith/site/lab/comment/@module/table/Comments";

export interface ILiquidCommentsProps extends Partial<ICommentsSourceProps> {
	liquid?: LiquidDto;
}

export const LiquidComments: FC<ILiquidCommentsProps> = ({liquid, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <CommentsSource
		defaultFilter={liquid && {liquidId: liquid.id}}
		{...props}
	>
		<Comments<LiquidCommentDto>
			form={liquid && <CreateCommentForm liquid={liquid}/>}
			toComment={dto => dto.comment}
			toCommentProps={dto => ({
				author: <Space size={0} split={<Divider type={'vertical'}/>}>
					<LiquidPreviewButton
						size={'small'}
						style={{padding: 0}}
						title={dto.liquid.name}
						icon={null}
						liquid={dto.liquid}
					/>
				</Space>,
			})}
			onEdit={commentsQueryInvalidate}
			onDelete={commentsQueryInvalidate}
		/>
	</CommentsSource>
}
