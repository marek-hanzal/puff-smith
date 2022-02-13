import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {ButtonBar, durationOf, Preview, PreviewTemplate} from "@leight-core/leight";
import {Divider, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {CommonRateInput} from "@/puff-smith";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerInline";
import {BuildAge} from "@/puff-smith/site/lab/build/@module/component/BuildAge";
import {BuildComments} from "@/puff-smith/site/lab/build/@module/component/BuildComments";
import {AtomizerComments} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerComments";
import {VapeEditButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapeEditButton";
import {VapeCloneButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapeCloneButton";
import {VapeRateButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapeRateButton";
import {VapeComments} from "@/puff-smith/site/lab/vape/@module/component/VapeComments";
import {CoilInline} from "@/puff-smith/site/lab/coil/@module/component/CoilInline";
import {DriptipInline} from "@/puff-smith/site/lab/driptip/@module/component/DriptipInline";
import {ModInline} from "@/puff-smith/site/lab/mod/@module/component/ModInline";
import {VapeAge} from "@/puff-smith/site/lab/vape/@module/component/VapeAge";

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
								<VapeCloneButton vape={vape}/>
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
							"stamp": <VapeAge vape={vape}/>,
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
