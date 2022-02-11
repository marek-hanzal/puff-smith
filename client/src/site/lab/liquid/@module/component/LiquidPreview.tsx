import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {ButtonBar, IPreviewProps, Preview, PreviewTemplate} from "@leight-core/leight";
import {FC} from "react";
import {Divider, Space, Tabs} from "antd";
import {LiquidComments, LiquidEditButton, LiquidInline, LiquidPlotButton} from "@/puff-smith/site/lab/liquid";
import {useTranslation} from "react-i18next";
import {Uploader} from "@/puff-smith/site/shared/file";
import {FileImageOutlined} from "@ant-design/icons";
import {ImageGallery} from "@/puff-smith";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {CommentsFilterContext} from "@/sdk/puff-smith/api/lab/mixture/comment/endpoint";
import {MixtureComments} from "@/puff-smith/site/lab/mixture";

export type LiquidPreviewTabs = 'plot' | 'images' | 'upload' | string;

export interface ILiquidPreviewProps extends Partial<IPreviewProps> {
	liquid: LiquidDto;
	hidden?: LiquidPreviewTabs[];
	forceList?: boolean;
}

export const LiquidPreview: FC<ILiquidPreviewProps> = ({liquid, hidden, forceList = false, ...props}) => {
	const {t} = useTranslation();
	return <Tabs>
		<Tabs.TabPane key={'common'} tab={t('lab.liquid.common.tab')}>
			<PreviewTemplate
				title={<LiquidInline liquid={liquid}/>}
				extra={<>
					<ButtonBar>
						<LiquidEditButton liquid={liquid}/>
					</ButtonBar>
					<Divider/>
				</>}
				span={24}
			/>
			<Preview translation={'lab.liquid.preview'} {...props}>
				{{
					"name": <LiquidInline liquid={liquid}/>,
					'pgvg': <>{liquid.pg}/{liquid.vg}</>,
					'volume': liquid.volume + 'ml',
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.liquid.comments.tab')}>
			<Tabs destroyInactiveTabPane size={'small'}>
				<Tabs.TabPane key={'liquid.comments'} tab={t('lab.liquid.comments.liquid.tab')}>
					<LiquidComments liquid={liquid}/>
				</Tabs.TabPane>
				<Tabs.TabPane key={'mixture.comments'} tab={t('lab.liquid.comments.mixture.tab')}>
					<CommentsFilterContext defaultFilter={{liquidId: liquid.id}}>
						<MixtureComments/>
					</CommentsFilterContext>
				</Tabs.TabPane>
			</Tabs>
		</Tabs.TabPane>
		{!hidden?.includes('plot') && <Tabs.TabPane key={'plot'} tab={t('lab.liquid.vape.plot.tab')}>
			<VapesFilterContext defaultFilter={{liquidIds: [liquid.id]}}>
				<Space>
					<VapeFilter
						disabled={['mixtureIds', 'liquidIds']}
					/>
					<LiquidPlotButton
						liquid={liquid}
						title={null}
					/>
				</Space>
				<VapePlot
					selected={['median', 'count']}
				/>
				<Divider/>
				<VapeTable
					hidden={['mixture']}
					forceList={forceList}
				/>
			</VapesFilterContext>
		</Tabs.TabPane>}
		{!hidden?.includes('images') && <Tabs.TabPane key={'images'} tab={t('lab.liquid.images.tab')}>
			<ImageGallery gallery={'/liquid/image/' + liquid.id}/>
		</Tabs.TabPane>}
		{!hidden?.includes('upload') && <Tabs.TabPane key={'upload'} tab={t('lab.liquid.upload.tab')}>
			<Uploader
				icon={<FileImageOutlined/>}
				translation={'lab.liquid.image'}
				path={'/liquid/image/' + liquid.id}
			/>
		</Tabs.TabPane>}
	</Tabs>
}
