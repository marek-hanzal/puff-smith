import {FC, useState} from "react";
import {IVapesSourceTableProps, useDeleteMutation, useVapesQueryInvalidate, VapesSourceTable} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {SetupInline} from "@/puff-smith/site/lab/setup";
import {MixtureInline} from "@/puff-smith/site/lab/mixture";
import {List, Menu, message, Space, Statistic, Typography} from "antd";
import {DrawerButton, PreviewTemplate, QuickMenu} from "@leight-core/leight";
import dayjs from "dayjs";
import {VapeCloneButton, VapeDeleteButton, VapeEditButton, VapeFilter, VapeLinkButton, VapePreview} from "@/puff-smith/site/lab/vape";
import {VapeIcon} from "@/puff-smith";
import {EyeOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {VapeDto, VapeFilterDto} from "@/sdk/puff-smith/vape/dto";

interface IQuickMenuInternalProps {
	vape: VapeDto;
}

const QuickMenuInternal: FC<IQuickMenuInternalProps> = ({vape}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	return <QuickMenu>
		<Menu.Item>
			<DrawerButton
				width={750}
				size={'large'}
				type={'link'}
				icon={<EyeOutlined/>}
				title={'lab.vape.preview'}
			>
				<PreviewTemplate
					icon={<VapeIcon/>}
					label={'lab.vape.preview'}
					span={24}
				>
					<VapePreview vape={vape}/>
				</PreviewTemplate>
			</DrawerButton>
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

	return <>
		<VapeFilter
			filter={filter}
			onFilter={setFilter}
			onClear={() => setFilter({})}
		/>
		<VapesSourceTable
			filter={filter}
			scroll={{x: 1800}}
			listItemRender={vape => <List.Item
				actions={[<QuickMenuInternal key={'quick-menu'} vape={vape}/>]}
			>
				<List.Item.Meta
					title={<Space>
						{vape.setup.build.name}
						<Typography.Text type={'secondary'}>{vape.setup.build.atomizer.name}</Typography.Text>
					</Space>}
					description={<Space>
						{vape.setup.mod.name}
						{vape.mixture.liquid.name}
					</Space>}
				/>
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
					key: "setup",
					title: "lab.vape.table.setup",
					render: (_, vape) => <SetupInline setup={vape.setup}/>,
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
						return dayjs.duration(dayjs(vape.stamp).diff(vape.mixture.mixed)).humanize()
					},
					width: 150,
				}),
				column({
					key: "rating",
					title: "lab.vape.table.rating",
					render: (_, vape) => <Statistic value={vape.rating} suffix="/ 10"/>,
					width: 150,
				}),
				column({
					key: "taste",
					title: "lab.vape.table.taste",
					render: (_, vape) => <Statistic value={vape.taste} suffix="/ 10"/>,
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
