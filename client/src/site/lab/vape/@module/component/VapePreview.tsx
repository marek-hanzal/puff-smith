import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {Preview} from "@leight-core/leight";
import {Card, Divider, Rate, Slider} from "antd";
import {useTranslation} from "react-i18next";
import {MixtureInline} from "@/puff-smith/site/lab/mixture";
import {DriptipInline} from "@/puff-smith/site/lab/driptip";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import dayjs from "dayjs";
import {ModInline} from "@/puff-smith/site/lab/mod";

export interface IVapePreviewProps {
	vape: VapeDto;
}

export const VapePreview: FC<IVapePreviewProps> = ({vape}) => {
	const {t} = useTranslation();
	return <>
		<Card key={'common'} title={t('lab.vape.common.title')}>
			<Preview translation={'lab.vape.preview'}>
				{{
					"atomizer": <AtomizerInline atomizer={vape.build.atomizer}/>,
					"coil": <CoilInline coil={vape.build.coil}/>,
					"mod": <ModInline mod={vape.mod}/>,
					"mixture": <MixtureInline mixture={vape.mixture}/>,
					// @ts-ignore
					"mixture.age": dayjs.duration(dayjs(vape.stamp).diff(vape.mixture.mixed)).humanize(),
					"driptip": <DriptipInline driptip={vape.driptip}/>,
					"leaks": <Slider
						marks={{
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
						}}
						min={0}
						max={5}
						value={vape.leaks}
					/>,
					"dryhit": <Slider
						marks={{
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
						}}
						min={0}
						max={5}
						value={vape.dryhit}
					/>,
				}}
			</Preview>
		</Card>
		<Divider/>
		<Card key={'rating'} title={t('lab.vape.rating.title')}>
			<Preview translation={'lab.vape.preview'}>
				{{
					"rating": <Rate value={vape.rating} count={10} disabled/>,
					"taste": <Rate value={vape.taste} count={10} disabled/>,
				}}
			</Preview>
		</Card>
		<Divider/>
		<Card key={'settings'} title={t('lab.vape.settings.title')}>
			<Preview translation={'lab.vape.preview'}>
				{{
					"power": vape.power ? vape.power + ' W' : '-',
					"tc": vape.tc ? vape.tc + ' °C' : '-',
					"airflow": <Slider
						marks={{
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
						}}
						min={0}
						max={5}
						value={vape.airflow}
					/>,
					"juice": <Slider
						marks={{
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
						}}
						min={0}
						max={5}
						value={vape.juice || 0}
					/>,
				}}
			</Preview>
		</Card>
		<Divider/>
		<Card key={'vape'} title={t('lab.vape.vape.title')}>
			<Preview translation={'lab.vape.preview'}>
				{{
					"mtl": <Rate value={vape.mtl} count={10} disabled/>,
					"dl": <Rate value={vape.dl} count={10} disabled/>,
					"clouds": <Rate value={vape.clouds} count={10} disabled/>,
				}}
			</Preview>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.rating-advanced.title')}>
			<Preview translation={'lab.vape.preview'}>
				{{
					"throathit": <Rate value={vape.throathit || 0} count={10} disabled/>,
					"fruits": <Rate value={vape.fruits || 0} count={10} disabled/>,
					"tobacco": <Rate value={vape.tobacco || 0} count={10} disabled/>,
					"cakes": <Rate value={vape.cakes || 0} count={10} disabled/>,
					"complex": <Rate value={vape.complex || 0} count={10} disabled/>,
					"fresh": <Rate value={vape.fresh || 0} count={10} disabled/>,
				}}
			</Preview>
		</Card>
	</>
}
