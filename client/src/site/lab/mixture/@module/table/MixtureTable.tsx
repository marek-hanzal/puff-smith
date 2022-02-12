import {FC} from "react";
import {IMixturesSourceTableProps, MixturesSourceTable} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {asDayjs, ButtonBar, durationOf, toLocalDate} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {MixtureListItem} from "@/puff-smith/site/lab/mixture/@module/table/MixtureListItem";
import {MixtureLinkButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixtureLinkButton";
import {MixtureQuickMenu} from "@/puff-smith/site/lab/mixture/@module/component/MixtureQuickMenu";
import {MixturePreviewButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixturePreviewButton";
import {MixtureSteeping} from "@/puff-smith/site/lab/mixture/@module/component/MixtureSteeping";
import {BaseInline} from "@/puff-smith/site/lab/base/@module/component/BaseInline";
import {BoosterInline} from "@/puff-smith/site/lab/booster/@module/component/BoosterInline";

export interface IMixtureTableProps extends Partial<IMixturesSourceTableProps> {
}

export const MixtureTable: FC<IMixtureTableProps> = props => {
	const {t} = useTranslation();
	return <MixturesSourceTable
		scroll={{x: 2600}}
		footer={sourceContext => t('lab.mixture.table.footer.label', {data: sourceContext.data()})}
		listItemRender={mixture => <MixtureListItem mixture={mixture}/>}
		rowClassName={mixture => mixture.active ? 'active' : 'inactive'}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, mixture) => <ButtonBar>
					<MixtureLinkButton title={null} mixture={mixture}/>
					<MixtureQuickMenu mixture={mixture}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "liquid",
				title: "lab.mixture.table.liquid",
				width: 360,
				render: (_, mixture) => <MixturePreviewButton title={mixture.liquid.name} mixture={mixture}/>,
				sorter: true,
			}),
			column({
				key: "vendor",
				title: "lab.mixture.table.vendor",
				width: 240,
				render: (_, mixture) => mixture.liquid.vendor.name,
				sorter: true,
			}),
			column({
				key: "code",
				dataIndex: "code",
				title: "lab.mixture.table.code",
				width: 120,
				sorter: true,
			}),
			column({
				key: "age",
				title: "lab.mixture.table.age",
				render: (_, mixture) => durationOf(mixture.mixed).humanize(),
				width: 140,
				sorter: true,
			}),
			column({
				key: "steep",
				dataIndex: "steep",
				title: "lab.mixture.table.steep",
				width: 220,
				render: (_, mixture) => <MixtureSteeping mixture={mixture}/>,
			}),
			column({
				key: "pgvg",
				title: "lab.mixture.table.pgvg",
				width: 100,
				render: (_, mixture) => <>{mixture.pg}/{mixture.vg}</>,
				sorter: true,
			}),
			column({
				key: "nicotine",
				dataIndex: "nicotine",
				title: "lab.mixture.table.nicotine",
				width: 160,
				render: nicotine => <>{nicotine}mg</>,
				sorter: true,
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
				key: "mixed",
				title: "lab.mixture.table.mixed",
				width: 160,
				render: (_, mixture) => toLocalDate(mixture.mixed),
				sorter: true,
			}),
			column({
				key: "volume",
				dataIndex: "volume",
				title: "lab.mixture.table.volume",
				width: 120,
				render: volume => <>{volume}ml</>,
				sorter: true,
			}),
			column({
				key: "expires",
				title: "lab.mixture.table.expires",
				render: (_, mixture) => asDayjs(mixture.expires)?.format('MMMM YYYY') || '-',
				sorter: true,
			}),
		]}
	</MixturesSourceTable>
}
