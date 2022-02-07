import {AtomizersSourceTable, IAtomizersSourceTableProps} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {AtomizerLinkButton, AtomizerListItem, AtomizerQuickMenu} from "@/puff-smith/site/lab/atomizer";
import {AtomizerFilterDto} from "@/sdk/puff-smith/atomizer/dto";
import {Space} from "antd";
import {useOptionalFilterContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export interface IAtomizerTableProps extends Partial<IAtomizersSourceTableProps> {
}

export const AtomizerTable: FC<IAtomizerTableProps> = props => {
	const filterContext = useOptionalFilterContext<AtomizerFilterDto>();
	const {t} = useTranslation();
	return <AtomizersSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.atomizer.table.footer.label', {data: sourceContext?.result?.data})}
		listItemRender={atomizer => <AtomizerListItem atomizer={atomizer}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, atomizer) => <Space size={1}>
					<AtomizerLinkButton title={null} atomizer={atomizer}/>
					<AtomizerQuickMenu atomizer={atomizer}/>
				</Space>,
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.atomizer.table.name',
				render: (_, atomizer) => atomizer.name,
				sorter: true,
			}),
			column({
				key: "vendor",
				title: 'lab.atomizer.table.vendor',
				render: (_, atomizer) => atomizer.vendor.name,
				sorter: true,
				width: 160,
			}),
		]}
	</AtomizersSourceTable>
}