import {CoilsSourceTable, ICoilsSourceTableProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {CoilLinkButton, CoilListItem, CoilQuickMenu} from "@/puff-smith/site/lab/coil";
import {WireInline} from "@/puff-smith/site/lab/wire";
import {CoilFilterDto} from "@/sdk/puff-smith/coil/dto";
import {Space} from "antd";
import {useOptionalFilterContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export interface ICoilTableProps extends Partial<ICoilsSourceTableProps> {
}

export const CoilTable: FC<ICoilTableProps> = props => {
	const filterContext = useOptionalFilterContext<CoilFilterDto>();
	const {t} = useTranslation();
	return <CoilsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.coil.table.footer.label', {data: sourceContext?.result?.data})}
		listItemRender={coil => <CoilListItem coil={coil}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, coil) => <Space size={1}>
					<CoilLinkButton title={null} coil={coil}/>
					<CoilQuickMenu coil={coil}/>
				</Space>,
				width: 0,
			}),
			column({
				key: "wire",
				title: 'lab.coil.table.wire',
				render: (_, coil) => <WireInline wire={coil.wire}/>,
				sorter: true,
			}),
			column({
				key: "size",
				title: 'lab.coil.table.size',
				render: (_, coil) => coil.size,
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
		]}
	</CoilsSourceTable>
}
