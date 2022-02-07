import {FC} from "react";
import {IVapesSourceTableProps, VapesSourceTable} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {MixturePreviewButton} from "@/puff-smith/site/lab/mixture";
import {Carousel, List, Space} from "antd";
import {Card, toLocalDateTime, useOptionalFilterContext} from "@leight-core/leight";
import {VapeLinkButton, VapePreviewButton, VapeQuickMenu} from "@/puff-smith/site/lab/vape";
import {useTranslation} from "react-i18next";
import {BuildAge, BuildQuickMenu} from "@/puff-smith/site/lab/build";
import {CoilInline, CoilPreviewButton} from "@/puff-smith/site/lab/coil";
import {SimpleRating} from "@/puff-smith";
import {AtomizerInline, AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";
import {ModInline, ModPreviewButton} from "@/puff-smith/site/lab/mod";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {durationOf, Preview} from "@leight-core/leight/dist";

export type VapeTableColumns = 'atomizer' | 'mixture' | string;

export interface IVapeTableProps extends Partial<IVapesSourceTableProps> {
	hidden?: VapeTableColumns[];
}

export const VapeTable: FC<IVapeTableProps> = ({hidden = [], ...props}) => {
	const filterContext = useOptionalFilterContext<VapeFilterDto>();
	const {t} = useTranslation();
	return <VapesSourceTable
		filter={filterContext?.filter}
		scroll={{x: 2300}}
		listProps={{
			itemLayout: 'vertical'
		}}
		footer={sourceContext => t('lab.vape.table.footer.label', {data: sourceContext?.result?.data})}
		listItemRender={vape => <List.Item>
			<Carousel>
				<Card
					headStyle={{padding: 0}}
					title={<VapePreviewButton title={t('lab.vape.title')} icon={null} vape={vape}/>}
					extra={<VapeQuickMenu key={'quick-menu'} vape={vape}/>}
				>
					<Preview translation={'lab.vape.preview'}>
						{{
							"atomizer": <AtomizerInline atomizer={vape.build.atomizer}/>,
							"mod": <ModInline mod={vape.mod}/>,
							"coil": <CoilInline coil={vape.build.coil}/>,
							"liquid": <LiquidInline liquid={vape.mixture.liquid}/>,
							"rating": <SimpleRating value={vape.rating}/>,
							"taste": <SimpleRating value={vape.taste}/>,
							"created": toLocalDateTime(vape.stamp),
						}}
					</Preview>
				</Card>
				<Card
					headStyle={{padding: '0 0 0 15px'}}
					title={t('lab.vape.rating.title')}
					extra={<VapeQuickMenu key={'quick-menu'} vape={vape}/>}
				>
					<Preview translation={'lab.vape.preview'}>
						{{
							"throathit": <SimpleRating value={vape.throathit}/>,
							"fruits": <SimpleRating value={vape.fruits}/>,
							"tobacco": <SimpleRating value={vape.tobacco}/>,
							"cakes": <SimpleRating value={vape.cakes}/>,
							"complex": <SimpleRating value={vape.complex}/>,
							"fresh": <SimpleRating value={vape.fresh}/>,
						}}
					</Preview>
				</Card>
				<Card
					headStyle={{padding: 0}}
					// title={<BuildPreviewButton icon={null} title={'lab.vape.build.title'} build={vape.build}/>}
					extra={<BuildQuickMenu key={'quick-menu'} build={vape.build}/>}
				>
					<Preview translation={'lab.build.preview'}>
						{{
							"atomizer": <AtomizerInline atomizer={vape.build.atomizer}/>,
							"coil": <CoilInline coil={vape.build.coil}/>,
						}}
					</Preview>
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
			!hidden?.includes('atomizer') && column({
				key: "atomizer",
				title: "lab.vape.table.atomizer",
				render: (_, vape) => <AtomizerPreviewButton title={vape.build.atomizer.name} atomizer={vape.build.atomizer}/>,
				width: 260,
				sorter: true,
			}),
			!hidden?.includes('mixture') && column({
				key: "mixture",
				title: "lab.vape.table.mixture",
				render: (_, vape) => <MixturePreviewButton title={vape.mixture.liquid.name} mixture={vape.mixture}/>,
				width: 300,
				sorter: true,
			}),
			column({
				key: "mod",
				title: "lab.vape.table.mod",
				render: (_, vape) => <ModPreviewButton title={vape.mod.name} mod={vape.mod}/>,
				width: 260,
				sorter: true,
			}),
			column({
				key: "coil",
				title: "lab.vape.table.coil",
				render: (_, vape) => <CoilPreviewButton title={vape.build.coil.wire.name} coil={vape.build.coil}/>,
				width: 220,
			}),
			column({
				key: "mixture.age",
				title: "lab.vape.table.mixture.age",
				render: (_, vape) => durationOf(vape.mixture.mixed, vape.stamp).humanize(),
				width: 150,
			}),
			column({
				key: "rating",
				title: "lab.vape.table.rating",
				render: (_, vape) => <SimpleRating value={vape.rating}/>,
				width: 120,
				sorter: true,
			}),
			column({
				key: "taste",
				title: "lab.vape.table.taste",
				render: (_, vape) => <SimpleRating value={vape.taste}/>,
				width: 120,
				sorter: true,
			}),
			column({
				key: "power",
				title: "lab.vape.table.power",
				render: (_, vape) => vape.power ? vape.power + ' W' : '-',
				width: 120,
			}),
			column({
				key: "tc",
				title: "lab.vape.table.tc",
				render: (_, vape) => vape.tc ? vape.tc + ' °C' : '-',
				width: 120,
			}),
			column({
				key: "age",
				title: "lab.vape.table.age",
				render: (_, vape) => <BuildAge build={vape.build}/>,
				width: 150,
			}),
			column({
				key: "stamp",
				title: "lab.vape.table.stamp",
				render: (_, vape) => toLocalDateTime(vape.stamp) + ' (' + durationOf(vape.stamp).humanize() + ')',
			}),
		]}
	</VapesSourceTable>
}
