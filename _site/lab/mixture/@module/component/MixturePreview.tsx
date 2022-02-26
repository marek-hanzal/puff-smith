import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {asDayjs, BoolInline, durationOf, Preview, PreviewTemplate, toLocalDate} from "@leight-core/common";
import {FC} from "react";
import {Divider, Space, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeFilter} from "../../../vape/@module/form/VapeFilter";
import {VapePlot} from "../../../vape/@module/plot/VapePlot";
import {VapeTable} from "../../../vape/@module/table/VapeTable";
import {MixtureInline} from "./MixtureInline";
import {MixtureEditButton} from "./button/MixtureEditButton";
import {MixtureSteeping} from "./MixtureSteeping";
import {MixtureComments} from "./MixtureComments";
import {MixturePlotButton} from "./button/MixturePlotButton";
import {LiquidInline} from "../../../liquid/@module/component/LiquidInline";
import {LiquidComments} from "../../../liquid/@module/component/LiquidComments";
import {BaseInline} from "../../../base/@module/component/BaseInline";
import {BoosterInline} from "../../../booster/@module/component/BoosterInline";

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
