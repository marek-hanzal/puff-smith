import {BuildsSourceTable, IBuildsSourceTableProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {CoilInline, CoilOffset} from "@/puff-smith/site/lab/coil";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {CottonInline, CottonOffset} from "@/puff-smith/site/lab/cotton";
import {Preview, toLocalDateTime} from "@leight-core/leight";
import dayjs from "dayjs";
import {Card} from "antd";
import {useTranslation} from "react-i18next";
import {BuildLink} from "@/puff-smith/site/lab/build";

export interface IBuildTableProps extends Partial<IBuildsSourceTableProps> {
}

export const BuildTable: FC<IBuildTableProps> = props => {
	const {t} = useTranslation();
	return <BuildsSourceTable
		expandedRowRender={build => <Card title={t('lab.build.table.detail')}>
			<Preview translation={"lab.build.table"}>
				{{
					"coilOffset": <CoilOffset coilOffset={build.coilOffset}/>,
					"cottonOffset": <CottonOffset cottonOffset={build.cottonOffset}/>,
					"coils": build.coils,
					"created": toLocalDateTime(dayjs.unix(build.created)),
				}}
			</Preview>
		</Card>}
		{...props}
	>
		{({column}) => [
			column({
				key: "name",
				dataIndex: "name",
				title: "lab.build.table.name",
				width: 220,
				render: (_, build) => <BuildLink build={build}/>,
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
			}),
		]}
	</BuildsSourceTable>
}
