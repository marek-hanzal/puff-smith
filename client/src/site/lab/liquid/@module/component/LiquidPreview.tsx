import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";
import {Divider} from "antd";
import {CommentsSource, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/comment/endpoint";
import {CommentList} from "@/puff-smith/site/lab/comment";
import {CreateCommentForm, LiquidInline} from "@/puff-smith/site/lab/liquid";

export interface ILiquidPreviewProps extends Partial<IPreviewProps> {
	liquid: LiquidDto
}

export const LiquidPreview: FC<ILiquidPreviewProps> = ({liquid, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <>
		<Preview translation={'lab.liquid.preview'} {...props}>
			{{
				"name": <LiquidInline liquid={liquid}/>,
				'pgvg': <>{liquid.pg}/{liquid.vg}</>,
				'volume': liquid.volume + 'ml',
			}}
		</Preview>
		<Divider/>
		<CommentsSource
			filter={{liquidId: liquid.id}}
			defaultOrderBy={{stamp: false}}
		>
			<CommentList
				form={<CreateCommentForm liquid={liquid}/>}
				onEdit={() => commentsQueryInvalidate()}
				onDelete={() => commentsQueryInvalidate()}
			/>
		</CommentsSource>
	</>
}
