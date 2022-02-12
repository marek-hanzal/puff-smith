import {CellsSourceTable, ICellsSourceTableProps} from "@/sdk/puff-smith/api/lab/cell/endpoint";
import {FC} from "react";
import {CellLinkButton, CellListItem, CellPreviewButton, CellQuickMenu} from "@/puff-smith/site/lab/cell";
import {CellFilterDto} from "@/sdk/puff-smith/cell/dto";
import {ButtonBar, useOptionalFilterContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {toHumanNumber} from "@leight-core/leight/dist";
import {Ohm} from "@/puff-smith";

export interface ICellTableProps extends Partial<ICellsSourceTableProps> {
}

export const CellTable: FC<ICellTableProps> = props => {
	const filterContext = useOptionalFilterContext<CellFilterDto>();
	const {t} = useTranslation();
	return <CellsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.cell.table.footer.label', {data: sourceContext.data()})}
		listItemRender={cell => <CellListItem cell={cell}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, cell) => <ButtonBar>
					<CellLinkButton title={null} cell={cell}/>
					<CellQuickMenu cell={cell}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.cell.table.name',
				render: (_, cell) => <CellPreviewButton title={cell.name} cell={cell}/>,
				sorter: true,
				width: 240,
			}),
			column({
				key: "size",
				title: 'lab.cell.table.size',
				render: (_, cell) => cell.size,
				sorter: true,
				width: 160,
			}),
			column({
				key: "drain",
				title: 'lab.cell.table.drain',
				render: (_, cell) => cell.drain + ' A',
				sorter: true,
				width: 180,
			}),
			column({
				key: "voltage",
				title: 'lab.cell.table.voltage',
				render: (_, cell) => toHumanNumber(cell.voltage, 2),
				sorter: true,
				width: 160,
			}),
			column({
				key: "ohm",
				title: 'lab.cell.table.ohm',
				render: (_, cell) => <Ohm ohm={cell.ohm}/>,
				sorter: true,
				width: 160,
			}),
			column({
				key: "vendor",
				title: 'lab.cell.table.vendor',
				render: (_, cell) => cell.vendor.name,
				sorter: true,
				width: 260,
			}),
		]}
	</CellsSourceTable>
}