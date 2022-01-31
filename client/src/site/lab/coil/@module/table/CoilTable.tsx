import {CoilsSourceTable, ICoilsSourceTableProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC, useState} from "react";
import {CoilQuickMenu} from "@/puff-smith/site/lab/coil";
import {WireInline} from "@/puff-smith/site/lab/wire";
import {CoilFilterDto} from "@/sdk/puff-smith/coil/dto";
import {CoilFilter} from "@/puff-smith/site/lab/coil/@module/form/CoilFilter";

export interface ICoilTableProps extends Partial<ICoilsSourceTableProps> {
}

export const CoilTable: FC<ICoilTableProps> = props => {
	const [filter, setFilter] = useState<CoilFilterDto>();
	return <>
		<CoilFilter
			filter={filter}
			onFilter={setFilter}
			onClear={() => setFilter({})}
		/>
		<CoilsSourceTable
			filter={filter}
			{...props}
		>
			{({column}) => [
				column({
					key: "id",
					render: (_, coil) => <CoilQuickMenu coil={coil}/>,
					width: 0,
				}),
				column({
					key: "wire",
					title: 'lab.coil.table.wire',
					render: (_, coil) => <WireInline wire={coil.wire}/>,
				}),
				column({
					key: "wraps",
					title: 'lab.coil.table.wraps',
					render: (_, coil) => coil.wraps,
					width: 200,
				}),
				column({
					key: "ohm",
					title: 'lab.coil.table.ohm',
					render: (_, coil) => coil.ohm.toFixed(2) + 'ohm',
					width: 200,
				}),
			]}
		</CoilsSourceTable>
	</>
}
