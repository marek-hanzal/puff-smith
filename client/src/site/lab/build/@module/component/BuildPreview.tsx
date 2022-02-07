import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {IPreviewProps, Preview, PreviewBool, toLocalDateTime} from "@leight-core/leight";
import {FC} from "react";
import {Divider, Space, Tabs} from "antd";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {CottonInline} from "@/puff-smith/site/lab/cotton";
import {CommentsSource, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {CommentList} from "@/puff-smith/site/lab/comment";
import {BuildAge, BuildPlotButton, BuildVapeButton, CreateCommentForm} from "@/puff-smith/site/lab/build";
import {useTranslation} from "react-i18next";
import {Uploader} from "@/puff-smith/site/shared/file";
import {FileImageOutlined} from "@ant-design/icons";
import {FilesSource} from "@/sdk/edde/api/shared/file/endpoint";
import {ImageGallery, Ohm, PreviewTag} from "@/puff-smith";
import {VapeComments, VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {CommentsFilterContext} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";

export type BuildPreviewTabs = 'common' | 'comments' | 'plot' | 'upload' | 'images' | string;

export interface IBuildPreviewProps extends Partial<IPreviewProps> {
	build: BuildDto
	hidden?: BuildPreviewTabs[];
}

export const BuildPreview: FC<IBuildPreviewProps> = ({build, hidden = [], ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const {t} = useTranslation();
	return <Tabs destroyInactiveTabPane size={'large'}>
		<Tabs.TabPane key={'common'} tab={t('lab.build.preview.tab')}>
			<Preview translation={'lab.build.preview'} {...props}>
				{{
					"coil": <CoilInline vertical coil={build.coil}/>,
					"cotton": <CottonInline cotton={build.cotton}/>,
					"ohm": <Ohm ohm={build?.ohm}/>,
					"age": <BuildAge build={build}/>,
					"coilOffset": <PreviewTag label={'lab.build.coilOffset.' + build.coilOffset}/>,
					"cottonOffset": <PreviewTag label={'lab.build.cottonOffset.' + build.cottonOffset}/>,
					"glow": build.glow ? <PreviewTag label={'lab.build.glow.' + build.glow}/> : '-',
					"coils": <PreviewTag label={'lab.build.coilCount.' + build.coils}/>,
					"created": toLocalDateTime(build.created),
					"active": <PreviewBool bool={build.active}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.build.comments.tab')}>
			<Tabs destroyInactiveTabPane size={'small'}>
				<Tabs.TabPane key={'build.comments'} tab={t('lab.build.comments.build.tab')}>
					<CommentsSource
						filter={{buildId: build.id}}
						defaultOrderBy={{stamp: false}}
					>
						<CommentList
							form={<CreateCommentForm build={build}/>}
							onEdit={() => commentsQueryInvalidate()}
							onDelete={() => commentsQueryInvalidate()}
						/>
					</CommentsSource>
				</Tabs.TabPane>
				<Tabs.TabPane key={'vape.comments'} tab={t('lab.build.comments.vape.tab')}>
					<CommentsFilterContext defaultFilter={{buildIds: [build.id]}}>
						<VapeComments/>
					</CommentsFilterContext>
				</Tabs.TabPane>
			</Tabs>
		</Tabs.TabPane>
		{!hidden?.includes('plot') && <Tabs.TabPane key={'plot'} tab={t('lab.build.vape.plot.tab')}>
			<VapesFilterContext defaultFilter={{buildIds: [build.id]}}>
				<Space>
					<VapeFilter disabled={['atomizerIds']}/>
					<BuildPlotButton
						build={build}
						title={null}
					/>
				</Space>
				<VapePlot
					selected={['median', 'count']}
					emptyResultProps={{
						extra: <BuildVapeButton type={'primary'} build={build}/>
					}}
				/>
				<Divider/>
				<VapeTable
					hidden={['atomizer']}
				/>
			</VapesFilterContext>
		</Tabs.TabPane>}
		{!hidden?.includes('upload') && <Tabs.TabPane key={'upload'} tab={t('lab.build.upload.tab')}>
			<Uploader
				icon={<FileImageOutlined/>}
				translation={'lab.build.image'}
				path={'/build/image/' + build.id}
			/>
		</Tabs.TabPane>}
		{!hidden?.includes('images') && <Tabs.TabPane key={'images'} tab={t('lab.build.images.tab')}>
			<FilesSource
				filter={{
					path: '/build/image/' + build.id,
				}}
			>
				<ImageGallery/>
			</FilesSource>
		</Tabs.TabPane>}
	</Tabs>
}
