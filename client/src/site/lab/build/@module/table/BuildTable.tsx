import {BuildsSourceTable, IBuildsSourceTableProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {CottonInline} from "@/puff-smith/site/lab/cotton";
import dayjs from "dayjs";
import {BuildActiveButton, BuildCloneButton, BuildEditButton, BuildLinkButton, BuildPreview} from "@/puff-smith/site/lab/build";
import {DrawerButton, PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {List, Menu, Statistic, Typography} from "antd";
import {EyeOutlined} from "@ant-design/icons";
import {BuildIcon} from "@/puff-smith";
import {BuildDto} from "@/sdk/puff-smith/build/dto";

interface IQuickMenuInternal {
	build: BuildDto;
}

const QuickMenuInternal: FC<IQuickMenuInternal> = ({build}) => {
	return <QuickMenu>
		<Menu.Item>
			<DrawerButton
				width={750}
				type={'link'}
				size={'large'}
				icon={<EyeOutlined/>}
				title={'lab.build.preview'}
			>
				<PreviewTemplate
					icon={<BuildIcon/>}
					label={'lab.build.preview'}
					span={24}
				>
					<BuildPreview build={build}/>
				</PreviewTemplate>
			</DrawerButton>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<BuildLinkButton build={build}/>
		</Menu.Item>
		<Menu.Item>
			<BuildEditButton build={build}/>
		</Menu.Item>
		<Menu.Item>
			<BuildCloneButton build={build}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<BuildActiveButton build={build}/>
		</Menu.Item>
	</QuickMenu>;
}

export interface IBuildTableProps extends Partial<IBuildsSourceTableProps> {
}

export const BuildTable: FC<IBuildTableProps> = props => {
	return <BuildsSourceTable
		listItemRender={build => <List.Item
			actions={[<QuickMenuInternal key={'quick-menu'} build={build}/>]}
		>
			<List.Item.Meta
				title={build.name}
				description={build.description}
			/>
		</List.Item>}
		scroll={{x: 1600}}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, build) => <QuickMenuInternal build={build}/>,
				width: 0,
			}),
			column({
				key: "name",
				dataIndex: "name",
				title: "lab.build.table.name",
				width: 200,
				render: (_, build) => build.active ? build.name : <Typography.Text type={'secondary'}>{build.name}</Typography.Text>,
			}),
			column({
				key: "atomizer",
				title: "lab.build.table.atomizer",
				render: (_, build) => <AtomizerInline atomizer={build.atomizer}/>,
				width: 280,
			}),
			column({
				key: "coil",
				title: "lab.build.table.coil",
				render: (_, build) => <CoilInline coil={build.coil}/>,
				width: 300,
			}),
			column({
				key: "cotton",
				title: "lab.build.table.cotton",
				render: (_, build) => <CottonInline cotton={build.cotton}/>,
				width: 240,
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
				render: (_, build) => <Statistic value={build.glow || 1} suffix={' /10'}/>,
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
}
