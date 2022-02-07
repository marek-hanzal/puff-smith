import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";
import {AtomizerInline, AtomizerPlotButton, CreateCommentForm} from "@/puff-smith/site/lab/atomizer";
import {Divider, Space, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {CommentList} from "@/puff-smith/site/lab/comment";
import {CommentsSource, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/comment/endpoint";
import {CommentsFilterContext as BuildCommentsFilterContext} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {BuildComments} from "@/puff-smith/site/lab/build";
import {CommentsFilterContext as VapeCommentsFilterContext} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {VapeComments, VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";

export type AtomizerPreviewTabs = 'plot' | string;

export interface IAtomizerPreviewProps extends Partial<IPreviewProps> {
	atomizer: AtomizerDto;
	forceList?: boolean;
	hidden?: AtomizerPreviewTabs[];
}

export const AtomizerPreview: FC<IAtomizerPreviewProps> = ({atomizer, forceList = false, hidden = [], ...props}) => {
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const {t} = useTranslation();
	return <Tabs size={'large'}>
		<Tabs.TabPane key={'common'} tab={t('lab.atomizer.common.tab')}>
			<Preview translation={'lab.atomizer.preview'} {...props}>
				{{
					"name": <AtomizerInline atomizer={atomizer}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.atomizer.comments.tab')}>
			<Tabs destroyInactiveTabPane size={'small'}>
				<Tabs.TabPane key={'atomizer.comments'} tab={t('lab.atomizer.comments.atomizer.tab')}>
					<CommentsSource
						filter={{atomizerId: atomizer.id}}
						defaultOrderBy={{stamp: false}}
					>
						<CommentList
							form={<CreateCommentForm atomizer={atomizer}/>}
							onEdit={() => commentsQueryInvalidate()}
							onDelete={() => commentsQueryInvalidate()}
						/>
					</CommentsSource>
				</Tabs.TabPane>
				<Tabs.TabPane key={'build.comments'} tab={t('lab.atomizer.comments.build.tab')}>
					<BuildCommentsFilterContext defaultFilter={{atomizerIds: [atomizer.id]}}>
						<BuildComments/>
					</BuildCommentsFilterContext>
				</Tabs.TabPane>
				<Tabs.TabPane key={'vape.comments'} tab={t('lab.atomizer.comments.vape.tab')}>
					<VapeCommentsFilterContext defaultFilter={{atomizerIds: [atomizer.id]}}>
						<VapeComments/>
					</VapeCommentsFilterContext>
				</Tabs.TabPane>
			</Tabs>
		</Tabs.TabPane>
		{!hidden?.includes('plot') && <Tabs.TabPane key={'plot'} tab={t('lab.atomizer.vape.plot.tab')}>
			<VapesFilterContext defaultFilter={{atomizerIds: [atomizer.id]}}>
				<Space>
					<VapeFilter disabled={['atomizerIds']}/>
					<AtomizerPlotButton
						atomizer={atomizer}
						title={null}
					/>
				</Space>
				<VapePlot
					selected={['median', 'count']}
				/>
				<Divider/>
				<VapeTable
					forceList={forceList}
					hidden={['atomizer']}
				/>
			</VapesFilterContext>
		</Tabs.TabPane>}
	</Tabs>
}
