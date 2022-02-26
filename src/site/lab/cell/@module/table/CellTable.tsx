import {CellsSourceTable, ICellsSourceTableProps, useCellsOptionalFilterContext} from "@/sdk/puff-smith/api/lab/cell/endpoint";
import {FC} from "react";
import {ButtonBar, toHumanNumber} from "@leight-core/common";
import {useTranslation} from "react-i18next";
import {Ohm} from "@/puff-smith";
import {CellListItem} from "@/puff-smith/site/lab/cell/@module/table/CellListItem";
import {CellLinkButton} from "@/puff-smith/site/lab/cell/@module/component/button/CellLinkButton";
import {CellQuickMenu} from "@/puff-smith/site/lab/cell/@module/component/CellQuickMenu";
import {CellPreviewButton} from "@/puff-smith/site/lab/cell/@module/component/button/CellPreviewButton";
import {Tags} from "@/puff-smith/component/Tags";

export interface ICellTableProps extends Partial<ICellsSourceTableProps> {
}

export const CellTable: FC<ICellTableProps> = props => {
	const {t} = useTranslation();
	const filterContext = useCellsOptionalFilterContext();
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
				key: "type",
				title: 'lab.cell.table.type',
				render: (_, cell) => <Tags tags={[cell.type]}/>,
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
