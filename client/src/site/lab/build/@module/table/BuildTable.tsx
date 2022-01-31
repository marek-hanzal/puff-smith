import {BuildsSourceTable, IBuildsSourceTableProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC, useState} from "react";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {CottonInline} from "@/puff-smith/site/lab/cotton";
import dayjs from "dayjs";
import {List, Space, Typography} from "antd";
import {BuildFilter, BuildQuickMenu, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {SimpleRating} from "@/puff-smith";
import {BuildFilterDto} from "@/sdk/puff-smith/build/dto";
import {useTranslation} from "react-i18next";
import {ArrowRightOutlined, CommentOutlined} from "@ant-design/icons";
import {DrawerButton} from "@leight-core/leight/dist";

export interface IBuildTableProps extends Partial<IBuildsSourceTableProps> {
}

export const BuildTable: FC<IBuildTableProps> = props => {
	const {t} = useTranslation();
	const [filter, setFilter] = useState<BuildFilterDto>();
	return <>
		<BuildFilter
			filter={filter}
			onFilter={setFilter}
			onClear={() => setFilter({})}
		/>
		<BuildsSourceTable
			filter={filter}
			listItemRender={build => {
				// @ts-ignore
				const age = dayjs.duration(dayjs().diff(build.created)).humanize();
				return <List.Item
					className={build.active ? 'active' : 'inactive'}
					actions={[<BuildQuickMenu key={'quick-menu'} build={build}/>]}
				>
					<Space direction={'vertical'}>
						<AtomizerInline atomizer={build.atomizer}/>
						<CoilInline coil={build.coil}/>
						<CottonInline cotton={build.cotton}/>
						<Space>
							<Typography.Text type={'secondary'}>{t('lab.build.age.label')}</Typography.Text>{age}
						</Space>
						<Space>
							<BuildVapeButton size={'small'} icon={<ArrowRightOutlined/>} build={build}/>
							<DrawerButton
								icon={<CommentOutlined/>}
								type={'link'}
								size={'small'}
								label={t('lab.build.comment.create')}
							>
								dfgdfg
							</DrawerButton>
						</Space>
					</Space>
				</List.Item>
			}}
			rowClassName={build => build.active ? 'active' : 'inactive'}
			scroll={{x: 1600}}
			{...props}
		>
			{({column}) => [
				column({
					key: "id",
					render: (_, build) => <BuildQuickMenu build={build}/>,
					width: 0,
				}),
				column({
					key: "atomizer",
					title: "lab.build.table.atomizer",
					render: (_, build) => <AtomizerInline atomizer={build.atomizer}/>,
					width: 300,
				}),
				column({
					key: "coil",
					title: "lab.build.table.coil",
					render: (_, build) => <CoilInline coil={build.coil}/>,
					width: 480,
				}),
				column({
					key: "cotton",
					title: "lab.build.table.cotton",
					render: (_, build) => <CottonInline cotton={build.cotton}/>,
					width: 300,
				}),
				column({
					key: "ohm",
					dataIndex: "ohm",
					title: "lab.build.table.ohm",
					render: (_, build) => build.ohm.toFixed(2) + 'ohm',
					width: 140,
				}),
				column({
					key: "glow",
					dataIndex: "glow",
					title: "lab.build.table.glow",
					render: (_, build) => <SimpleRating value={build.glow}/>,
					width: 140,
				}),
				column({
					key: "age",
					title: "lab.build.table.age",
					render: (_, build) => {
						// @ts-ignore
						return dayjs.duration(dayjs().diff(build.created)).humanize()
					},
				}),
			]}
		</BuildsSourceTable>
	</>
}
