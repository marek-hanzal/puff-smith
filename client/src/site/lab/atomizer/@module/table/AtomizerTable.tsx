import {AtomizersSourceTable, IAtomizersSourceTableProps} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {AtomizerLinkButton, AtomizerListItem, AtomizerPreviewButton, AtomizerQuickMenu} from "@/puff-smith/site/lab/atomizer";
import {AtomizerFilterDto} from "@/sdk/puff-smith/atomizer/dto";
import {useOptionalFilterContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {ButtonBar} from "@leight-core/leight/dist";

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
				render: (_, atomizer) => <ButtonBar>
					<AtomizerLinkButton title={null} atomizer={atomizer}/>
					<AtomizerQuickMenu atomizer={atomizer}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.atomizer.table.name',
				render: (_, atomizer) => <AtomizerPreviewButton title={atomizer.name} atomizer={atomizer}/>,
				sorter: true,
			}),
			column({
				key: "vendor",
				title: 'lab.atomizer.table.vendor',
				render: (_, atomizer) => atomizer.vendor.name,
				sorter: true,
				width: 220,
			}),
		]}
	</AtomizersSourceTable>
}
