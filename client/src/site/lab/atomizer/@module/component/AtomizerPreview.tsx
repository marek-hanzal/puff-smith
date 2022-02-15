import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {ButtonBar, IPreviewProps, Preview, PreviewTemplate} from "@leight-core/leight";
import {FC} from "react";
import {Divider, Space, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {CommentsFilterContext as BuildCommentsFilterContext} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {CommentsFilterContext as VapeCommentsFilterContext} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerInline";
import {AtomizerComments} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerComments";
import {AtomizerEditButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerEditButton";
import {BuildComments} from "@/puff-smith/site/lab/build/@module/component/BuildComments";
import {AtomizerPlotButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerPlotButton";
import {VapeComments} from "@/puff-smith/site/lab/vape/@module/component/VapeComments";
import {VapeFilter} from "@/puff-smith/site/lab/vape/@module/form/VapeFilter";
import {VapePlot} from "@/puff-smith/site/lab/vape/@module/plot/VapePlot";
import {VapeTable} from "@/puff-smith/site/lab/vape/@module/table/VapeTable";
import {Tags} from "@/puff-smith/component/Tags";

export type AtomizerPreviewTabs = 'plot' | string;

export interface IAtomizerPreviewProps extends Partial<IPreviewProps> {
	atomizer: AtomizerDto;
	forceList?: boolean;
	hidden?: AtomizerPreviewTabs[];
}

export const AtomizerPreview: FC<IAtomizerPreviewProps> = ({atomizer, forceList = false, hidden = [], ...props}) => {
	const {t} = useTranslation();
	return <Tabs size={'large'}>
		<Tabs.TabPane key={'common'} tab={t('lab.atomizer.common.tab')}>
			<PreviewTemplate
				title={atomizer.name}
				subTitle={atomizer.vendor.name}
				extra={<>
					<ButtonBar>
						<AtomizerEditButton atomizer={atomizer}/>
					</ButtonBar>
					<Divider/>
				</>}
				span={24}
			/>
			<Preview translation={'lab.atomizer.preview'} {...props}>
				{{
					"name": <AtomizerInline atomizer={atomizer}/>,
					"draw": <Tags tags={atomizer.draws}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.atomizer.comments.tab')}>
			<Tabs destroyInactiveTabPane size={'small'}>
				<Tabs.TabPane key={'atomizer.comments'} tab={t('lab.atomizer.comments.atomizer.tab')}>
					<AtomizerComments atomizer={atomizer}/>
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
					selected={['median']}
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
