import {FC} from "react";
import {IMixturesSourceTableProps, MixturesSourceTable} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {asDayjs, DrawerButton, PreviewTemplate, QuickMenu, toLocalDate} from "@leight-core/leight";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";
import {BoosterInline} from "@/puff-smith/site/lab/booster";
import {BaseInline} from "@/puff-smith/site/lab/base";
import {MixtureAge, MixtureEditButton, MixtureLink, MixturePreview, MixtureSteeping} from "@/puff-smith/site/lab/mixture";
import {List, Menu} from "antd";
import {EyeOutlined} from "@ant-design/icons";
import {MixtureIcon} from "@/puff-smith";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";

interface IQuickMenuInternalProps {
	mixture: MixtureDto;
}

const QuickMenuInternal: FC<IQuickMenuInternalProps> = ({mixture}) => {
	return <QuickMenu>
		<Menu.Item>
			<DrawerButton
				width={750}
				type={'link'}
				size={'small'}
				icon={<EyeOutlined/>}
				title={'lab.mixture.preview'}
			>
				<PreviewTemplate
					icon={<MixtureIcon/>}
					label={'lab.mixture.preview'}
					span={24}
				>
					<MixturePreview mixture={mixture}/>
				</PreviewTemplate>
			</DrawerButton>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<MixtureLink size={'small'} mixture={mixture}/>
		</Menu.Item>
		<Menu.Item>
			<MixtureEditButton size={'small'} type={'link'} mixture={mixture}/>
		</Menu.Item>
	</QuickMenu>
}

export interface IMixtureTableProps extends Partial<IMixturesSourceTableProps> {
}

export const MixtureTable: FC<IMixtureTableProps> = props => {
	return <MixturesSourceTable
		scroll={{x: 2200}}
		listItemRender={mixture => <List.Item
			actions={[<QuickMenuInternal key={'quick-menu'} mixture={mixture}/>]}
		>
			<List.Item.Meta
				title={mixture.name}
				description={mixture.liquid.name}
			/>
		</List.Item>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, mixture) => <QuickMenuInternal mixture={mixture}/>,
				width: 0,
			}),
			column({
				key: "name",
				dataIndex: "name",
				title: "lab.mixture.table.name",
				width: 300,
			}),
			column({
				key: "code",
				dataIndex: "code",
				title: "lab.mixture.table.code",
				width: 160,
			}),
			column({
				key: "liquid",
				title: "lab.mixture.table.liquid",
				width: 240,
				render: (_, mixture) => <LiquidInline liquid={mixture.liquid}/>,
			}),
			column({
				key: "base",
				title: "lab.mixture.table.base",
				width: 200,
				render: (_, mixture) => <BaseInline base={mixture.base}/>,
			}),
			column({
				key: "booster",
				title: "lab.mixture.table.booster",
				width: 200,
				render: (_, mixture) => <BoosterInline booster={mixture.booster}/>,
			}),
			column({
				key: "pgvg",
				title: "lab.mixture.table.pgvg",
				width: 100,
				render: (_, mixture) => <>{mixture.pg}/{mixture.vg}</>
			}),
			column({
				key: "nicotine",
				dataIndex: "nicotine",
				title: "lab.mixture.table.nicotine",
				width: 140,
				render: nicotine => <>{nicotine}mg</>
			}),
			column({
				key: "age",
				title: "lab.mixture.table.age",
				render: (_, mixture) => <MixtureAge mixture={mixture}/>,
				width: 140,
			}),
			column({
				key: "steep",
				dataIndex: "steep",
				title: "lab.mixture.table.steep",
				width: 220,
				render: (_, mixture) => <MixtureSteeping mixture={mixture}/>,
			}),
			column({
				key: "mixed",
				title: "lab.mixture.table.mixed",
				width: 160,
				render: (_, mixture) => toLocalDate(mixture.mixed),
			}),
			column({
				key: "volume",
				dataIndex: "volume",
				title: "lab.mixture.table.volume",
				width: 120,
				render: volume => <>{volume}ml</>
			}),
			column({
				key: "expires",
				title: "lab.mixture.table.expires",
				render: (_, mixture) => asDayjs(mixture.expires)?.format('MMMM YYYY'),
			}),
		]}
	</MixturesSourceTable>;
}
