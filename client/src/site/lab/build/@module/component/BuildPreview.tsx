import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {IPreviewProps, Preview, PreviewBool, toLocalDateTime} from "@leight-core/leight";
import {FC} from "react";
import {Divider, Slider, Space, Tabs} from "antd";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {CottonInline} from "@/puff-smith/site/lab/cotton";
import {CommentsSource, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {CommentList} from "@/puff-smith/site/lab/comment";
import {BuildPlotButton, BuildVapeButton, CreateCommentForm} from "@/puff-smith/site/lab/build";
import {useTranslation} from "react-i18next";
import {Uploader} from "@/puff-smith/site/shared/file";
import {FileImageOutlined} from "@ant-design/icons";
import {FilesSource} from "@/sdk/edde/api/shared/file/endpoint";
import {ImageGallery} from "@/puff-smith";
import {VapeComments, VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {CommentsFilterContext} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";

export interface IBuildPreviewProps extends Partial<IPreviewProps> {
	build: BuildDto
}

export const BuildPreview: FC<IBuildPreviewProps> = ({build, ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const {t} = useTranslation();
	return <Tabs destroyInactiveTabPane>
		<Tabs.TabPane key={'common'} tab={t('lab.build.preview.tab')}>
			<Preview translation={'lab.build.preview'} {...props}>
				{{
					"coil": <CoilInline coil={build.coil}/>,
					"cotton": <CottonInline cotton={build.cotton}/>,
					"ohm": build.ohm.toFixed(2) + " ohm",
					"coilOffset": <Slider
						included={false}
						tipFormatter={null}
						marks={{
							"-2": -2,
							"-1": -1,
							"0": 0,
							"1": 1,
							"2": 2,
						}}
						value={build.coilOffset}
						min={-2}
						max={2}
					/>,
					"cottonOffset": <Slider
						included={false}
						tipFormatter={null}
						marks={{
							"-2": -2,
							"-1": -1,
							"0": 0,
							"1": 1,
							"2": 2,
						}}
						value={build.cottonOffset}
						min={-2}
						max={2}
					/>,
					"coils": <Slider
						included={false}
						tipFormatter={null}
						marks={{
							1: 1,
							2: 2,
							3: 3,
							4: 4,
						}}
						min={1}
						max={4}
						value={build.coils}
					/>,
					"created": toLocalDateTime(build.created),
					"active": <PreviewBool bool={build.active}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.build.comments.tab')}>
			<Tabs destroyInactiveTabPane>
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
		<Tabs.TabPane key={'graph'} tab={t('lab.build.vape.plot.tab')}>
			<VapesFilterContext defaultFilter={{buildIds: [build.id]}}>
				<Space>
					<VapeFilter disabled={['atomizerIds']}/>
					<BuildPlotButton
						build={build}
						title={'lab.build.vape.plot.redirect'}
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
		</Tabs.TabPane>
		<Tabs.TabPane key={'upload'} tab={t('lab.build.upload.tab')}>
			<Uploader
				icon={<FileImageOutlined/>}
				translation={'lab.build.image'}
				path={'/build/image/' + build.id}
			/>
		</Tabs.TabPane>
		<Tabs.TabPane key={'images'} tab={t('lab.build.images.tab')}>
			<FilesSource
				filter={{
					path: '/build/image/' + build.id,
				}}
			>
				<ImageGallery/>
			</FilesSource>
		</Tabs.TabPane>
	</Tabs>
}
