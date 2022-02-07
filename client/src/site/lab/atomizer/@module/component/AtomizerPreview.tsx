import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";
import {AtomizerInline, CreateCommentForm} from "@/puff-smith/site/lab/atomizer";
import {Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {CommentList} from "@/puff-smith/site/lab/comment";
import {CommentsSource, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/comment/endpoint";
import {CommentsFilterContext} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {BuildComments} from "@/puff-smith/site/lab/build";

export interface IAtomizerPreviewProps extends Partial<IPreviewProps> {
	atomizer: AtomizerDto
}

export const AtomizerPreview: FC<IAtomizerPreviewProps> = ({atomizer, ...props}) => {
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
					<CommentsFilterContext defaultFilter={{atomizerIds: [atomizer.id]}}>
						<BuildComments/>
					</CommentsFilterContext>
				</Tabs.TabPane>
			</Tabs>
		</Tabs.TabPane>
	</Tabs>
}
