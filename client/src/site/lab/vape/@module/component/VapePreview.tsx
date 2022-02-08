import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {durationOf, Preview, toLocalDateTime} from "@leight-core/leight";
import {Divider, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {DriptipInline} from "@/puff-smith/site/lab/driptip";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {ModInline} from "@/puff-smith/site/lab/mod";
import {VapeComments, VapeEditButton, VapeRateButton} from "@/puff-smith/site/lab/vape";
import {CommonRateInput} from "@/puff-smith";
import {BuildAge, BuildComments} from "@/puff-smith/site/lab/build";
import {AtomizerComments, AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {ButtonBar, PreviewTemplate} from "@leight-core/leight/dist";

export interface IVapePreviewProps {
	vape: VapeDto;
}

export const VapePreview: FC<IVapePreviewProps> = ({vape}) => {
	const {t} = useTranslation();
	return <Tabs size={'large'}>
		<Tabs.TabPane key={'common'} tab={t('lab.vape.common.tab')}>
			<Tabs size={'small'}>
				<Tabs.TabPane key={'common'} tab={t('lab.vape.common.title')}>
					<PreviewTemplate
						title={<AtomizerInline atomizer={vape.build.atomizer}/>}
						subTitle={vape.mixture.liquid.name}
						extra={<>
							<ButtonBar>
								<VapeEditButton vape={vape}/>
								<VapeRateButton vape={vape}/>
							</ButtonBar>
							<Divider/>
						</>}
						span={24}
					/>
					<Preview translation={'lab.vape.preview'}>
						{{
							"coil": <CoilInline inline coil={vape.build.coil}/>,
							"mod": <ModInline mod={vape.mod}/>,
							"build.age": <BuildAge build={vape.build}/>,
							"mixture.age": durationOf(vape.mixture.mixed, vape.stamp).humanize(),
							"driptip": <DriptipInline driptip={vape.driptip}/>,
							"leaks": <CommonRateInput disabled value={vape.leaks}/>,
							"dryhit": <CommonRateInput disabled value={vape.dryhit}/>,
							"stamp": toLocalDateTime(vape.stamp),
						}}
					</Preview>
				</Tabs.TabPane>
				<Tabs.TabPane key={'rating-advanced'} tab={t('lab.vape.rating-advanced.title')}>
					<Preview translation={'lab.vape.preview'}>
						{{
							"rating": <CommonRateInput disabled value={vape.rating}/>,
							"taste": <CommonRateInput disabled value={vape.taste}/>,
							"throathit": <CommonRateInput disabled value={vape.throathit}/>,
							"fruits": <CommonRateInput disabled value={vape.fruits}/>,
							"tobacco": <CommonRateInput disabled value={vape.tobacco}/>,
							"cakes": <CommonRateInput disabled value={vape.cakes}/>,
							"complex": <CommonRateInput disabled value={vape.complex}/>,
							"fresh": <CommonRateInput disabled value={vape.fresh}/>,
						}}
					</Preview>
				</Tabs.TabPane>
				<Tabs.TabPane key={'vape'} tab={t('lab.vape.vape.title')}>
					<Preview translation={'lab.vape.preview'}>
						{{
							"mtl": <CommonRateInput disabled value={vape.mtl}/>,
							"dl": <CommonRateInput disabled value={vape.dl}/>,
							"clouds": <CommonRateInput disabled value={vape.clouds}/>,
						}}
					</Preview>
				</Tabs.TabPane>
				<Tabs.TabPane key={'settings'} tab={t('lab.vape.settings.title')}>
					<Preview translation={'lab.vape.preview'}>
						{{
							"power": vape.power ? vape.power + ' W' : '-',
							"tc": vape.tc ? vape.tc + ' °C' : '-',
							"airflow": <CommonRateInput disabled value={vape.airflow}/>,
							"juice": <CommonRateInput disabled value={vape.juice || 0}/>,
						}}
					</Preview>
				</Tabs.TabPane>
			</Tabs>
		</Tabs.TabPane>
		<Tabs.TabPane key={'comments'} tab={t('lab.vape.comments.tab')}>
			<Tabs destroyInactiveTabPane size={'small'}>
				<Tabs.TabPane key={'vape.comments'} tab={t('lab.vape.comments.vape.tab')}>
					<VapeComments vape={vape}/>
				</Tabs.TabPane>
				<Tabs.TabPane key={'build.comments'} tab={t('lab.vape.comments.build.tab')}>
					<BuildComments build={vape.build}/>
				</Tabs.TabPane>
				<Tabs.TabPane key={'atomizer.comments'} tab={t('lab.vape.comments.atomizer.tab')}>
					<AtomizerComments atomizer={vape.build.atomizer}/>
				</Tabs.TabPane>
			</Tabs>
		</Tabs.TabPane>
	</Tabs>
}
