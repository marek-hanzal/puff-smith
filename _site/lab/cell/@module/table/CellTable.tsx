import {CellsSourceTable, ICellsSourceTableProps, useCellsOptionalFilterContext} from "@/sdk/puff-smith/api/lab/voucher/endpoint";
import {FC} from "react";
import {ButtonBar, toHumanNumber} from "@leight-core/common";
import {useTranslation} from "react-i18next";
import {Ohm} from "@/puff-smith";
import {CellListItem} from "./CellListItem";
import {CellLinkButton} from "../component/button/CellLinkButton";
import {CellQuickMenu} from "../component/CellQuickMenu";
import {CellPreviewButton} from "../component/button/CellPreviewButton";
import {Tags} from "@/puff-smith/component/Tags";

export interface ICellTableProps extends Partial<ICellsSourceTableProps> {
}

export const CellTable: FC<ICellTableProps> = props => {
	const {t} = useTranslation();
	const filterContext = useCellsOptionalFilterContext();
	return <CellsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.voucher.table.footer.label', {data: sourceContext.data()})}
		listItemRender={voucher => <CellListItem voucher={voucher}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, voucher) => <ButtonBar>
					<CellLinkButton title={null} voucher={voucher}/>
					<CellQuickMenu voucher={voucher}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.voucher.table.name',
				render: (_, voucher) => <CellPreviewButton title={voucher.name} voucher={voucher}/>,
				sorter: true,
				width: 240,
			}),
			column({
				key: "type",
				title: 'lab.voucher.table.type',
				render: (_, voucher) => <Tags tags={[voucher.type]}/>,
				sorter: true,
				width: 160,
			}),
			column({
				key: "drain",
				title: 'lab.voucher.table.drain',
				render: (_, voucher) => voucher.drain + ' A',
				sorter: true,
				width: 180,
			}),
			column({
				key: "voltage",
				title: 'lab.voucher.table.voltage',
				render: (_, voucher) => toHumanNumber(voucher.voltage, 2),
				sorter: true,
				width: 160,
			}),
			column({
				key: "ohm",
				title: 'lab.voucher.table.ohm',
				render: (_, voucher) => <Ohm ohm={voucher.ohm}/>,
				sorter: true,
				width: 160,
			}),
			column({
				key: "vendor",
				title: 'lab.voucher.table.vendor',
				render: (_, voucher) => voucher.vendor.name,
				sorter: true,
				width: 260,
			}),
		]}
	</CellsSourceTable>
}
