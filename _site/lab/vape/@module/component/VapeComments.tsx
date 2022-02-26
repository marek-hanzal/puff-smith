import {FC} from "react";
import {CommentsSource, ICommentsSourceProps, useCommentsOptionalFilterContext, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {VapeCommentDto} from "@/sdk/puff-smith/vape/dto/comment";
import {Divider, Space} from "antd";
import {CreateCommentForm} from "../form/CreateCommentForm";
import {Comments} from "../../../comment/@module/table/Comments";

export interface IVapeCommentsProps extends Partial<ICommentsSourceProps> {
	vape?: VapeDto;
}

export const VapeComments: FC<IVapeCommentsProps> = ({vape, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const filterContext = useCommentsOptionalFilterContext();
	return <CommentsSource
		filter={filterContext?.filter}
		defaultFilter={vape && {vapeId: vape.id}}
		{...props}
	>
		<Comments<VapeCommentDto>
			form={vape && <CreateCommentForm vape={vape}/>}
			toComment={dto => dto.comment}
			toCommentProps={dto => ({
				author: <Space size={0} split={<Divider type={'vertical'}/>}>
					<span>{dto.vape.build.atomizer.name}</span>
					<span>{dto.vape.build.coil.wire.name}</span>
					<span>{dto.vape.mixture.liquid.name}</span>
				</Space>,
			})}
			onEdit={commentsQueryInvalidate}
			onDelete={commentsQueryInvalidate}
		/>
	</CommentsSource>
}
