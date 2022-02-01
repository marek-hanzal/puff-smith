import {FC, useState} from "react";
import {IVapesSourceTableProps, VapesSourceTable} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {MixtureInline} from "@/puff-smith/site/lab/mixture";
import {Carousel, List, Space} from "antd";
import {Card, SmallPreview, toLocalDateTime} from "@leight-core/leight";
import dayjs from "dayjs";
import {VapeFilter, VapeLinkButton, VapePreviewButton, VapeQuickMenu} from "@/puff-smith/site/lab/vape";
import {useTranslation} from "react-i18next";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {BuildPreviewButton, BuildQuickMenu} from "@/puff-smith/site/lab/build";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {SimpleRating} from "@/puff-smith";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";
import {ModInline} from "@/puff-smith/site/lab/mod";

export interface IVapeTableProps extends Partial<IVapesSourceTableProps> {
}

export const VapeTable: FC<IVapeTableProps> = props => {
	const [filter, setFilter] = useState<VapeFilterDto>();
	const {t} = useTranslation();
	return <>
		<VapeFilter
			filter={filter}
			onFilter={setFilter}
			onClear={() => setFilter({})}
		/>
		<VapesSourceTable
			filter={filter}
			scroll={{x: 2200}}
			listProps={{
				itemLayout: 'vertical'
			}}
			listItemRender={vape => <List.Item>
				<Carousel>
					<Card
						title={<VapePreviewButton title={t('lab.vape.title')} icon={null} size={'small'} vape={vape}/>}
						extra={<VapeQuickMenu key={'quick-menu'} vape={vape}/>}
					>
						<SmallPreview translation={'lab.vape.preview'}>
							{{
								"atomizer": <AtomizerInline atomizer={vape.build.atomizer}/>,
								"mod": <ModInline mod={vape.mod}/>,
								"coil": <CoilInline coil={vape.build.coil}/>,
								"liquid": <LiquidInline liquid={vape.mixture.liquid}/>,
								"rating": <SimpleRating value={vape.rating}/>,
								"taste": <SimpleRating value={vape.taste}/>,
								"created": toLocalDateTime(vape.stamp),
							}}
						</SmallPreview>
					</Card>
					<Card title={t('lab.vape.rating.title')} extra={<VapeQuickMenu key={'quick-menu'} vape={vape}/>}>
						<SmallPreview translation={'lab.vape.preview'}>
							{{
								"throathit": <SimpleRating value={vape.throathit}/>,
								"fruits": <SimpleRating value={vape.fruits}/>,
								"tobacco": <SimpleRating value={vape.tobacco}/>,
								"cakes": <SimpleRating value={vape.cakes}/>,
								"complex": <SimpleRating value={vape.complex}/>,
								"fresh": <SimpleRating value={vape.fresh}/>,
							}}
						</SmallPreview>
					</Card>
					<Card title={<BuildPreviewButton size={'small'} icon={null} title={'lab.vape.build.title'} build={vape.build}/>} extra={<BuildQuickMenu key={'quick-menu'} build={vape.build}/>}>
						<SmallPreview translation={'lab.build.preview'}>
							{{
								"atomizer": <AtomizerInline atomizer={vape.build.atomizer}/>,
								"coil": <CoilInline coil={vape.build.coil}/>,
							}}
						</SmallPreview>
					</Card>
				</Carousel>
			</List.Item>}
			{...props}
		>
			{({column}) => [
				column({
					key: "id",
					render: (_, vape) => <Space size={1}>
						<VapeLinkButton title={null} vape={vape}/>
						<VapeQuickMenu vape={vape}/>
					</Space>,
					width: 0,
				}),
				column({
					key: "atomizer",
					title: "lab.vape.table.atomizer",
					render: (_, vape) => <AtomizerInline atomizer={vape.build.atomizer}/>,
					width: 300,
				}),
				column({
					key: "mod",
					title: "lab.vape.table.mod",
					render: (_, vape) => <ModInline mod={vape.mod}/>,
					width: 320,
				}),
				column({
					key: "coil",
					title: "lab.vape.table.coil",
					render: (_, vape) => <CoilInline coil={vape.build.coil}/>,
					width: 480,
				}),
				column({
					key: "mixture",
					title: "lab.vape.table.mixture",
					render: (_, vape) => <MixtureInline mixture={vape.mixture}/>
				}),
				column({
					key: "mixture.age",
					title: "lab.vape.table.mixture.age",
					render: (_, vape) => {
						// @ts-ignore
						return dayjs.duration(dayjs(vape.stamp).diff(vape.mixture.mixed)).humanize();
					},
					width: 150,
				}),
				column({
					key: "rating",
					title: "lab.vape.table.rating",
					render: (_, vape) => <SimpleRating value={vape.rating}/>,
					width: 150,
				}),
				column({
					key: "taste",
					title: "lab.vape.table.taste",
					render: (_, vape) => <SimpleRating value={vape.taste}/>,
					width: 150,
				}),
				column({
					key: "power",
					title: "lab.vape.table.power",
					render: (_, vape) => vape.power ? vape.power + ' W' : '-',
				}),
				column({
					key: "tc",
					title: "lab.vape.table.tc",
					render: (_, vape) => vape.tc ? vape.tc + ' °C' : '-',
				}),
				column({
					key: "age",
					title: "lab.vape.table.age",
					render: (_, vape) => {
						// @ts-ignore
						return dayjs.duration(dayjs().diff(vape.build.created)).humanize()
					},
				}),
			]}
		</VapesSourceTable>
	</>
}
