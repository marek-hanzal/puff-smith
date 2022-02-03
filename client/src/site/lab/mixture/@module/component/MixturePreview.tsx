import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {asDayjs, Preview, PreviewBool, toLocalDate} from "@leight-core/leight";
import {FC} from "react";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";
import {Tabs} from "antd";
import {BaseInline} from "@/puff-smith/site/lab/base";
import {BoosterInline} from "@/puff-smith/site/lab/booster";
import {CreateCommentForm, MixtureAge, MixtureSteeping} from "@/puff-smith/site/lab/mixture";
import {CommentsSource, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/mixture/comment/endpoint";
import {CommentList} from "@/puff-smith/site/lab/comment";
import {useTranslation} from "react-i18next";

export interface IMixturePreviewProps {
	mixture: MixtureDto
}

export const MixturePreview: FC<IMixturePreviewProps> = ({mixture}) => {
	const {t} = useTranslation();
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <Tabs>
		<Tabs.TabPane key={'common'} tab={t('lab.mixture.common.tab')}>
			<Preview translation={'lab.mixture.preview'}>
				{{
					"liquid": <LiquidInline liquid={mixture.liquid}/>,
					"code": mixture.code,
					"base": <BaseInline base={mixture.base}/>,
					"booster": <BoosterInline booster={mixture.booster}/>,
					"pgvg": <span><span>{mixture.pg}</span>/<span>{mixture.vg}</span></span>,
					"nicotine": mixture.nicotine + 'mg',
					"age": <MixtureAge mixture={mixture}/>,
					"steep": <MixtureSteeping mixture={mixture}/>,
					"mixed": toLocalDate(mixture.mixed),
					"expires": asDayjs(mixture.expires)?.format('MMMM YYYY'),
					"volume": mixture.volume + 'ml',
					"active": <PreviewBool bool={mixture.active}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.mixture.comments.tab')}>
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
		</Tabs.TabPane>
	</Tabs>
}
