import {FC, useState} from "react";
import {IVapesSourceTableProps, useDeleteMutation, useVapesQueryInvalidate, VapesSourceTable} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {MixtureInline} from "@/puff-smith/site/lab/mixture";
import {Card, Carousel, List, Menu, message} from "antd";
import {QuickMenu} from "@leight-core/leight";
import dayjs from "dayjs";
import {VapeCloneButton, VapeDeleteButton, VapeEditButton, VapeFilter, VapeLinkButton, VapePreviewButton} from "@/puff-smith/site/lab/vape";
import {useTranslation} from "react-i18next";
import {VapeDto, VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {SmallPreview, toLocalDateTime} from "@leight-core/leight/dist";
import {BuildPreviewButton, BuildQuickMenu} from "@/puff-smith/site/lab/build";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {SimpleRating} from "@/puff-smith";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";

interface IQuickMenuInternalProps {
	vape: VapeDto;
}

const QuickMenuInternal: FC<IQuickMenuInternalProps> = ({vape}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	return <QuickMenu>
		<Menu.Item>
			<VapePreviewButton vape={vape}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<VapeLinkButton vape={vape}/>
		</Menu.Item>
		<Menu.Item>
			<VapeEditButton vape={vape}/>
		</Menu.Item>
		<Menu.Item>
			<VapeCloneButton vape={vape}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<VapeDeleteButton
				vape={vape}
				onOk={setShow => {
					deleteMutation.mutate({
						id: vape.id,
					}, {
						onSuccess: () => {
							message.success(t('lab.vape.deleted.success'))
							vapesQueryInvalidate();
						},
					})
					setShow(false);
				}}
			/>
		</Menu.Item>
	</QuickMenu>;
}

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
			scroll={{x: 1800}}
			listProps={{
				itemLayout: 'vertical'
			}}
			listItemRender={vape => <List.Item>
				<Carousel>
					<Card title={<VapePreviewButton title={t('lab.vape.title')} icon={null} size={'small'} vape={vape}/>} extra={<QuickMenuInternal key={'quick-menu'} vape={vape}/>}>
						<SmallPreview translation={'lab.vape.preview'}>
							{{
								"atomizer": <AtomizerInline atomizer={vape.build.atomizer}/>,
								// "mod": <ModInline mod={vape.mod}/>,
								"liquid": <LiquidInline liquid={vape.mixture.liquid}/>,
								"rating": <SimpleRating value={vape.rating}/>,
								"taste": <SimpleRating value={vape.taste}/>,
								"created": toLocalDateTime(vape.stamp),
							}}
						</SmallPreview>
					</Card>
					<Card title={t('lab.vape.rating.title')} extra={<QuickMenuInternal key={'quick-menu'} vape={vape}/>}>
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
					render: (_, vape) => <QuickMenuInternal vape={vape}/>,
					width: 0,
				}),
				column({
					key: "atomizer",
					title: "lab.vape.table.atomizer",
					render: (_, vape) => <AtomizerInline atomizer={vape.build.atomizer}/>,
					width: 420,
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
						return dayjs.duration(dayjs().diff(vape.setup.build.created)).humanize()
					},
				}),
			]}
		</VapesSourceTable>
	</>
}
