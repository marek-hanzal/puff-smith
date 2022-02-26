import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {BoolInline, ButtonBar, Preview, PreviewTemplate} from "@leight-core/common";
import {FC} from "react";
import {Col, Divider, Row, Space, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {CommentsFilterContext as BuildCommentsFilterContext} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {CommentsFilterContext as VapeCommentsFilterContext} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {AtomizerInline} from "./AtomizerInline";
import {AtomizerComments} from "./AtomizerComments";
import {AtomizerEditButton} from "./button/AtomizerEditButton";
import {BuildComments} from "../../../build/@module/component/BuildComments";
import {AtomizerPlotButton} from "./button/AtomizerPlotButton";
import {VapeComments} from "../../../vape/@module/component/VapeComments";
import {VapeFilter} from "../../../vape/@module/form/VapeFilter";
import {VapePlot} from "../../../vape/@module/plot/VapePlot";
import {VapeTable} from "../../../vape/@module/table/VapeTable";
import {Tags} from "@/puff-smith/component/Tags";
import {RangeInline} from "@/puff-smith";

export type AtomizerPreviewTabs = 'plot' | string;

export interface IAtomizerPreviewProps {
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
			<Row>
				<Col span={12}>
					<Preview translation={'lab.atomizer.preview'}>
						{{
							"name": <AtomizerInline atomizer={atomizer}/>,
							"draw": <Tags tags={atomizer.draws}/>,
							"type": <Tags tags={atomizer.type ? [atomizer.type] : undefined}/>,
						}}
					</Preview>
				</Col>
				<Col span={12}>
					<Preview translation={'lab.atomizer.preview'}>
						{{
							"coilSize": <RangeInline from={atomizer.coilMin} to={atomizer.coilMax}/>,
							"dual": <BoolInline bool={atomizer.dual}/>,
						}}
					</Preview>
				</Col>
			</Row>
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
