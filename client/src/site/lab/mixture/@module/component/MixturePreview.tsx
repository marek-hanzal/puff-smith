import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {asDayjs, durationOf, Preview, BoolInline, PreviewTemplate, toLocalDate} from "@leight-core/leight";
import {FC} from "react";
import {Divider, Space, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeFilter} from "@/puff-smith/site/lab/vape/@module/form/VapeFilter";
import {VapePlot} from "@/puff-smith/site/lab/vape/@module/plot/VapePlot";
import {VapeTable} from "@/puff-smith/site/lab/vape/@module/table/VapeTable";
import {MixtureInline} from "@/puff-smith/site/lab/mixture/@module/component/MixtureInline";
import {MixtureEditButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixtureEditButton";
import {MixtureSteeping} from "@/puff-smith/site/lab/mixture/@module/component/MixtureSteeping";
import {MixtureComments} from "@/puff-smith/site/lab/mixture/@module/component/MixtureComments";
import {MixturePlotButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixturePlotButton";
import {LiquidInline} from "@/puff-smith/site/lab/liquid/@module/component/LiquidInline";
import {LiquidComments} from "@/puff-smith/site/lab/liquid/@module/component/LiquidComments";
import {BaseInline} from "@/puff-smith/site/lab/base/@module/component/BaseInline";
import {BoosterInline} from "@/puff-smith/site/lab/booster/@module/component/BoosterInline";

export interface IMixturePreviewProps {
	mixture: MixtureDto;
	forceList?: boolean;
}

export const MixturePreview: FC<IMixturePreviewProps> = ({mixture, forceList = false}) => {
	const {t} = useTranslation();
	return <Tabs>
		<Tabs.TabPane key={'common'} tab={t('lab.mixture.common.tab')}>
			<PreviewTemplate
				title={<MixtureInline mixture={mixture}/>}
				extra={<>
					<MixtureEditButton mixture={mixture}/>
					<Divider/>
				</>}
				span={24}
			/>
			<Preview translation={'lab.mixture.preview'}>
				{{
					"liquid": <LiquidInline liquid={mixture.liquid}/>,
					"nicotine": mixture.nicotine + 'mg',
					"age": durationOf(mixture.mixed).humanize(),
					"steep": <MixtureSteeping mixture={mixture}/>,
					"pgvg": <span><span>{mixture.pg}</span>/<span>{mixture.vg}</span></span>,
					"code": mixture.code,
					"base": <BaseInline base={mixture.base}/>,
					"booster": <BoosterInline booster={mixture.booster}/>,
					"mixed": toLocalDate(mixture.mixed),
					"expires": asDayjs(mixture.expires)?.format('MMMM YYYY'),
					"volume": mixture.volume + 'ml',
					"active": <BoolInline bool={mixture.active}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.mixture.comments.tab')}>
			<Tabs destroyInactiveTabPane size={'small'}>
				<Tabs.TabPane key={'mixture.comments'} tab={t('lab.mixture.comments.mixture.tab')}>
					<MixtureComments mixture={mixture}/>
				</Tabs.TabPane>
				<Tabs.TabPane key={'liquid.comments'} tab={t('lab.mixture.comments.liquid.tab')}>
					<LiquidComments liquid={mixture.liquid}/>
				</Tabs.TabPane>
			</Tabs>
		</Tabs.TabPane>
		<Tabs.TabPane key={'plot'} tab={t('lab.mixture.vape.plot.tab')}>
			<VapesFilterContext defaultFilter={{mixtureIds: [mixture.id]}}>
				<Space>
					<VapeFilter
						disabled={['mixtureIds', 'liquidIds']}
					/>
					<MixturePlotButton
						mixture={mixture}
						title={null}
					/>
				</Space>
				<VapePlot
					selected={['median']}
				/>
				<Divider/>
				<VapeTable
					hidden={['mixture']}
					forceList={forceList}
				/>
			</VapesFilterContext>
		</Tabs.TabPane>
	</Tabs>
}
