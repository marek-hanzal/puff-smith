import {FC} from "react";
import {CommentsSource, ICommentsSourceProps, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/comment/endpoint";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {LiquidCommentDto} from "@/sdk/puff-smith/liquid/dto/comment";
import {Divider, Space} from "antd";
import {CreateCommentForm} from "../form/CreateCommentForm";
import {Comments} from "../../../comment/@module/table/Comments";
import {LiquidInline} from "./LiquidInline";

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
					<LiquidInline liquid={dto.liquid}/>
				</Space>,
			})}
			onEdit={commentsQueryInvalidate}
			onDelete={commentsQueryInvalidate}
		/>
	</CommentsSource>
}
