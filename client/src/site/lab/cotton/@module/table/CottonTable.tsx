import {CottonsSourceTable, ICottonsSourceTableProps} from "@/sdk/puff-smith/api/lab/cotton/endpoint";
import {FC} from "react";
import {CottonLinkButton, CottonListItem, CottonPreviewButton, CottonQuickMenu} from "@/puff-smith/site/lab/cotton";
import {CottonFilterDto} from "@/sdk/puff-smith/cotton/dto";
import {ButtonBar, useOptionalFilterContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export interface ICottonTableProps extends Partial<ICottonsSourceTableProps> {
}

export const CottonTable: FC<ICottonTableProps> = props => {
	const filterContext = useOptionalFilterContext<CottonFilterDto>();
	const {t} = useTranslation();
	return <CottonsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.cotton.table.footer.label', {data: sourceContext.data()})}
		listItemRender={cotton => <CottonListItem cotton={cotton}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, cotton) => <ButtonBar>
					<CottonLinkButton title={null} cotton={cotton}/>
					<CottonQuickMenu cotton={cotton}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.cotton.table.name',
				render: (_, cotton) => <CottonPreviewButton title={cotton.name} cotton={cotton}/>,
				sorter: true,
				width: 240,
			}),
			column({
				key: "description",
				title: 'lab.cotton.table.description',
				render: (_, cotton) => cotton.description,
				sorter: true,
			}),
			column({
				key: "vendor",
				title: 'lab.cotton.table.vendor',
				render: (_, cotton) => cotton.vendor.name,
				sorter: true,
				width: 260,
			}),
		]}
	</CottonsSourceTable>
}
