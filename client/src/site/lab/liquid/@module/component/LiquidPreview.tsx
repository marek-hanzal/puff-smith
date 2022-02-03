import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {FilterContextProvider, IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";
import {Divider, Tabs} from "antd";
import {CommentsSource, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/comment/endpoint";
import {CommentList} from "@/puff-smith/site/lab/comment";
import {CreateCommentForm, LiquidInline} from "@/puff-smith/site/lab/liquid";
import {useTranslation} from "react-i18next";
import {Uploader} from "@/puff-smith/site/shared/file";
import {FileImageOutlined} from "@ant-design/icons";
import {FilesSource} from "@/sdk/edde/api/shared/file/endpoint";
import {ImageGallery} from "@/puff-smith";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";

export interface ILiquidPreviewProps extends Partial<IPreviewProps> {
	liquid: LiquidDto
}

export const LiquidPreview: FC<ILiquidPreviewProps> = ({liquid, ...props}) => {
	const {t} = useTranslation();
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <Tabs>
		<Tabs.TabPane key={'common'} tab={t('lab.liquid.common.tab')}>
			<Preview translation={'lab.liquid.preview'} {...props}>
				{{
					"name": <LiquidInline liquid={liquid}/>,
					'pgvg': <>{liquid.pg}/{liquid.vg}</>,
					'volume': liquid.volume + 'ml',
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.liquid.comments.tab')}>
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
		</Tabs.TabPane>
		<Tabs.TabPane key={'graph'} tab={t('lab.liquid.vape.plot.tab')}>
			<FilterContextProvider<VapeFilterDto> defaultFilter={{liquidIds: [liquid.id]}}>
				<VapeFilter
					disabled={['mixtureIds', 'liquidIds']}
				/>
				<VapePlot
					selected={['median', 'count']}
				/>
				<Divider/>
				<VapeTable/>
			</FilterContextProvider>
		</Tabs.TabPane>
		<Tabs.TabPane key={'upload'} tab={t('lab.liquid.upload.tab')}>
			<Uploader
				icon={<FileImageOutlined/>}
				translation={'lab.liquid.image'}
				path={'/liquid/image/' + liquid.id}
			/>
		</Tabs.TabPane>
		<Tabs.TabPane key={'images'} tab={t('lab.liquid.images.tab')}>
			<FilesSource
				filter={{
					path: '/liquid/image/' + liquid.id,
				}}
			>
				<ImageGallery/>
			</FilesSource>
		</Tabs.TabPane>
	</Tabs>
}
