import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {asDayjs, Preview, PreviewBool, toLocalDate} from "@leight-core/leight";
import {FC} from "react";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";
import {Divider, Space, Typography} from "antd";
import {BaseInline} from "@/puff-smith/site/lab/base";
import {BoosterInline} from "@/puff-smith/site/lab/booster";
import {CreateCommentForm, MixtureAge, MixtureSteeping} from "@/puff-smith/site/lab/mixture";
import {CommentsSource, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/mixture/comment/endpoint";
import {CommentList} from "@/puff-smith/site/lab/comment";

export interface IMixturePreviewProps {
	mixture: MixtureDto
}

export const MixturePreview: FC<IMixturePreviewProps> = ({mixture}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <>
		<Preview translation={'lab.mixture.preview'}>
			{{
				"name": <Space>
					<span>{mixture.name}</span>
					<Typography.Text type={'secondary'}>{mixture.code}</Typography.Text>
				</Space>,
				"liquid": <LiquidInline liquid={mixture.liquid}/>,
				"active": <PreviewBool bool={mixture.active}/>,
				"base": <BaseInline base={mixture.base}/>,
				"booster": <BoosterInline booster={mixture.booster}/>,
				"pgvg": <span><span>{mixture.pg}</span>/<span>{mixture.vg}</span></span>,
				"nicotine": mixture.nicotine + 'mg',
				"age": <MixtureAge mixture={mixture}/>,
				"steep": <MixtureSteeping mixture={mixture}/>,
				"mixed": toLocalDate(mixture.mixed),
				"expires": asDayjs(mixture.expires)?.format('MMMM YYYY'),
				"volume": mixture.volume + 'ml',
			}}
		</Preview>
		<Divider/>
		<CommentsSource
			filter={{mixtureId: mixture.id}}
			defaultOrderBy={{stamp: false}}
		>
			<CommentList
				form={<CreateCommentForm mixture={mixture}/>}
				onEdit={() => commentsQueryInvalidate()}
				onDelete={() => commentsQueryInvalidate()}
			/>
		</CommentsSource>
	</>
}
