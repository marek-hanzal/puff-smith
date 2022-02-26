import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {ButtonBar, Card, durationOf, Preview, PreviewTemplate, useOptionalDrawerContext} from "@leight-core/common";
import {Col, Divider, Row, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {BuildAge} from "../../../build/@module/component/BuildAge";
import {BuildComments} from "../../../build/@module/component/BuildComments";
import {AtomizerComments} from "../../../atomizer/@module/component/AtomizerComments";
import {VapeEditButton} from "./button/VapeEditButton";
import {VapeComments} from "./VapeComments";
import {CoilInline} from "../../../coil/@module/component/CoilInline";
import {DriptipInline} from "../../../driptip/@module/component/DriptipInline";
import {ModInline} from "../../../mod/@module/component/ModInline";
import {VapeAge} from "./VapeAge";
import {VapePlot} from "../plot/VapePlot";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Watt} from "@/puff-smith";

export interface IVapePreviewProps {
	vape: VapeDto;
}

export const VapePreview: FC<IVapePreviewProps> = ({vape}) => {
	const {t} = useTranslation();
	const isDrawer = !!useOptionalDrawerContext();
	return <Tabs size={'large'}>
		<Tabs.TabPane key={'common'} tab={t('lab.vape.common.tab')}>
			<PreviewTemplate
				title={vape.build.atomizer.name}
				subTitle={vape.mixture.liquid.name}
				extra={<>
					<ButtonBar>
						<VapeEditButton vape={vape}/>
					</ButtonBar>
					<Divider/>
				</>}
				span={24}
			/>
			<Card title={t('lab.vape.common.title')}>
				<Row gutter={8}>
					<Col span={isDrawer ? 24 : 12}>
						<Preview translation={'lab.vape.preview'}>
							{{
								"coil": <CoilInline coil={vape.build.coil}/>,
								"mod": <ModInline mod={vape.mod}/>,
								"build.age": <BuildAge build={vape.build}/>,
								"mixture.age": durationOf(vape.mixture.mixed, vape.stamp).humanize(),
							}}
						</Preview>
					</Col>
					<Col span={isDrawer ? 24 : 12}>
						<Preview translation={'lab.vape.preview'}>
							{{
								"driptip": <DriptipInline driptip={vape.driptip}/>,
								"stamp": <VapeAge vape={vape}/>,
								"power": vape.power && <Watt watt={vape.power}/>,
								"tc": vape.tc && vape.tc + ' °C',
							}}
						</Preview>
					</Col>
				</Row>
			</Card>
			<VapesFilterContext
				defaultFilter={{
					vapeIds: [vape.id],
					plot: {
						'rating': true,
						'median': false,
						'average': false,
						'min': false,
						'max': false,
					}
				}}
			>
				<VapePlot selected={['rating']}/>
			</VapesFilterContext>
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
