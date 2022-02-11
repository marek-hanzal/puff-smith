import {CoilsSourceTable, ICoilsSourceTableProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {CoilListItem, CoilPreviewButton, CoilQuickMenu} from "@/puff-smith/site/lab/coil";
import {CoilFilterDto} from "@/sdk/puff-smith/coil/dto";
import {useOptionalFilterContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {PreviewBool} from "@leight-core/leight/dist";

export interface ICoilTableProps extends Partial<ICoilsSourceTableProps> {
}

export const CoilTable: FC<ICoilTableProps> = props => {
	const filterContext = useOptionalFilterContext<CoilFilterDto>();
	const {t} = useTranslation();
	return <CoilsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.coil.table.footer.label', {data: sourceContext?.result?.data})}
		listItemRender={coil => <CoilListItem coil={coil}/>}
		scroll={{x: 1500}}
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
				render: (_, coil) => <CoilPreviewButton title={coil.wire.name} coil={coil}/>,
				sorter: true,
				width: 440,
			}),
			column({
				key: "ga",
				title: 'lab.coil.table.wire.ga',
				render: (_, coil) => coil.wire.ga || '-',
				sorter: true,
				width: 140,
			}),
			column({
				key: "description",
				title: 'lab.coil.table.wire.description',
				render: (_, coil) => coil.wire.description,
				sorter: true,
			}),
			column({
				key: "size",
				title: 'lab.coil.table.size',
				render: (_, coil) => coil.size || '-',
				sorter: true,
				width: 160,
			}),
			column({
				key: "wraps",
				title: 'lab.coil.table.wraps',
				render: (_, coil) => coil.wraps,
				width: 160,
				sorter: true,
			}),
			column({
				key: "spaced",
				title: 'lab.coil.table.spaced',
				render: (_, coil) => <PreviewBool bool={coil.spaced}/>,
				width: 200,
				sorter: true,
			}),
		]}
	</CoilsSourceTable>
}
