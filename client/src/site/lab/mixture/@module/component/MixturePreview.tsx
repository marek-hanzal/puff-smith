import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {asDayjs, durationOf, Preview, PreviewBool, toLocalDate} from "@leight-core/leight";
import {FC} from "react";
import {LiquidComments, LiquidInline} from "@/puff-smith/site/lab/liquid";
import {Divider, Space, Tabs} from "antd";
import {BaseInline} from "@/puff-smith/site/lab/base";
import {BoosterInline} from "@/puff-smith/site/lab/booster";
import {MixtureComments, MixturePlotButton, MixtureSteeping} from "@/puff-smith/site/lab/mixture";
import {useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/mixture/comment/endpoint";
import {useTranslation} from "react-i18next";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";

export interface IMixturePreviewProps {
	mixture: MixtureDto;
	forceList?: boolean;
}

export const MixturePreview: FC<IMixturePreviewProps> = ({mixture, forceList = false}) => {
	const {t} = useTranslation();
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <Tabs>
		<Tabs.TabPane key={'common'} tab={t('lab.mixture.common.tab')}>
			<Preview translation={'lab.mixture.preview'}>
				{{
					"liquid": <LiquidInline liquid={mixture.liquid}/>,
					"code": mixture.code,
					"base": <BaseInline base={mixture.base}/>,
					"booster": <BoosterInline booster={mixture.booster}/>,
					"pgvg": <span><span>{mixture.pg}</span>/<span>{mixture.vg}</span></span>,
					"nicotine": mixture.nicotine + 'mg',
					"age": durationOf(mixture.mixed).humanize(),
					"steep": <MixtureSteeping mixture={mixture}/>,
					"mixed": toLocalDate(mixture.mixed),
					"expires": asDayjs(mixture.expires)?.format('MMMM YYYY'),
					"volume": mixture.volume + 'ml',
					"active": <PreviewBool bool={mixture.active}/>,
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
					selected={['median', 'count']}
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
