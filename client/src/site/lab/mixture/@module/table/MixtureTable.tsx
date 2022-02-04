import {FC} from "react";
import {IMixturesSourceTableProps, MixturesSourceTable} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {asDayjs, SmallPreview, toLocalDate, useOptionalFilterContext} from "@leight-core/leight";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";
import {BoosterInline} from "@/puff-smith/site/lab/booster";
import {BaseInline} from "@/puff-smith/site/lab/base";
import {MixtureLinkButton, MixtureQuickMenu, MixtureSteeping} from "@/puff-smith/site/lab/mixture";
import {List, Space} from "antd";
import {MixtureFilterDto} from "@/sdk/puff-smith/mixture/dto";
import {useTranslation} from "react-i18next";
import {durationOf} from "@leight-core/leight/dist";

export interface IMixtureTableProps extends Partial<IMixturesSourceTableProps> {
}

export const MixtureTable: FC<IMixtureTableProps> = props => {
	const filterContext = useOptionalFilterContext<MixtureFilterDto>();
	const {t} = useTranslation();
	return <MixturesSourceTable
		filter={filterContext?.filter}
		scroll={{x: 2600}}
		footer={sourceContext => t('lab.mixture.table.footer.label', {data: sourceContext?.result?.data})}
		listItemRender={mixture => <List.Item
			className={mixture.active ? 'active' : 'inactive'}
			actions={[<MixtureQuickMenu key={'quick-menu'} mixture={mixture}/>]}
		>
			<SmallPreview translation={'lab.mixture.preview'}>
				{{
					"name": mixture.liquid.name,
					"vendor": mixture.liquid.vendor.name,
				}}
			</SmallPreview>
		</List.Item>}
		rowClassName={mixture => mixture.active ? 'active' : 'inactive'}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, mixture) => <Space size={1}>
					<MixtureLinkButton title={null} mixture={mixture}/>
					<MixtureQuickMenu mixture={mixture}/>
				</Space>,
				width: 0,
			}),
			column({
				key: "liquid",
				title: "lab.mixture.table.liquid",
				width: 300,
				render: (_, mixture) => <LiquidInline liquid={mixture.liquid}/>,
			}),
			column({
				key: "code",
				dataIndex: "code",
				title: "lab.mixture.table.code",
				width: 120,
			}),
			column({
				key: "base",
				title: "lab.mixture.table.base",
				width: 320,
				render: (_, mixture) => <BaseInline base={mixture.base}/>,
			}),
			column({
				key: "booster",
				title: "lab.mixture.table.booster",
				width: 320,
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
				render: (_, mixture) => durationOf(mixture.mixed),
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
				render: (_, mixture) => asDayjs(mixture.expires)?.format('MMMM YYYY') || '-',
			}),
		]}
	</MixturesSourceTable>
}
