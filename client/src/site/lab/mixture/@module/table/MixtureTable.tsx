import {FC} from "react";
import {IMixturesSourceTableProps, MixturesSourceTable} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {toLocalDate} from "@leight-core/leight";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";
import {BoosterInline} from "@/puff-smith/site/lab/booster";
import {BaseInline} from "@/puff-smith/site/lab/base";
import {MixtureLink} from "@/puff-smith/site/lab/mixture";
import dayjs from "dayjs";
import {Space, Typography} from "antd";
import {useTranslation} from "react-i18next";

export interface IMixtureTableProps extends Partial<IMixturesSourceTableProps> {
}

export const MixtureTable: FC<IMixtureTableProps> = props => {
	const {t} = useTranslation();
	return <MixturesSourceTable
		scroll={{x: 2200}}
		{...props}
	>
		{({column}) => [
			column({
				key: "name",
				dataIndex: "name",
				title: "lab.mixture.table.name",
				render: (_, mixture) => <MixtureLink mixture={mixture}/>,
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
				render: (_, mixture) => {
					// @ts-ignore
					return dayjs.duration(dayjs().diff(mixture.mixed)).humanize()
				},
				width: 140,
			}),
			column({
				key: "steep",
				dataIndex: "steep",
				title: "lab.mixture.table.steep",
				width: 220,
				render: (_, mixture) => {
					if (!mixture.steep) {
						return '-';
					}
					// @ts-ignore
					const age = dayjs.duration(dayjs().diff(mixture.mixed)).asDays();
					if (age >= mixture.steep) {
						return <Typography.Text type={'success'}>{t('lab.mixture.steep.done')}</Typography.Text>;
					}
					// @ts-ignore
					const ageDuration = dayjs.duration(age, "day").humanize();
					// @ts-ignore
					const steepDuration = dayjs.duration(mixture.steep, "day").humanize();

					return <Space>
						<span>{ageDuration}</span>/<Typography.Text type={'secondary'}>{steepDuration}</Typography.Text>
					</Space>;
				},
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
				render: (_, mixture) => toLocalDate(mixture.expires),
			}),
		]}
	</MixturesSourceTable>;
}
