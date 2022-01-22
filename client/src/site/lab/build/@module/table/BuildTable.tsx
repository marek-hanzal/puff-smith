import {BuildsSourceTable, IBuildsSourceTableProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {CoilInline, CoilOffset} from "@/puff-smith/site/lab/coil";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {CottonInline, CottonOffset} from "@/puff-smith/site/lab/cotton";
import {toLocalDateTime} from "@leight-core/leight";
import dayjs from "dayjs";

export interface IBuildTableProps extends Partial<IBuildsSourceTableProps> {
}

export const BuildTable: FC<IBuildTableProps> = props => {
	return <BuildsSourceTable
		scroll={{x: 2000}}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				width: 0,
			}),
			column({
				key: "name",
				dataIndex: "name",
				title: "lab.build.table.name",
				width: 180,
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
				key: "coilOffset",
				title: "lab.build.table.coilOffset",
				render: (_, build) => <CoilOffset coilOffset={build.coilOffset}/>,
				width: 200,
			}),
			column({
				key: "cottonOffset",
				title: "lab.build.table.cottonOffset",
				render: (_, build) => <CottonOffset cottonOffset={build.cottonOffset}/>,
				width: 200,
			}),
			column({
				key: "created",
				dataIndex: "created",
				title: "lab.build.table.created",
				width: 180,
				render: (_, build) => toLocalDateTime(dayjs.unix(build.created)),
			}),
			column({
				key: "coils",
				title: "lab.build.table.coils",
				render: (_, build) => build.coils,
			}),
		]}
	</BuildsSourceTable>
}
