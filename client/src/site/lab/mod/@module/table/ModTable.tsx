import {IModsSourceTableProps, ModsSourceTable} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {FC} from "react";
import {ModLinkButton, ModListItem, ModPreviewButton, ModQuickMenu} from "@/puff-smith/site/lab/mod";
import {ModFilterDto} from "@/sdk/puff-smith/mod/dto";
import {ButtonBar, useOptionalFilterContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export interface IModTableProps extends Partial<IModsSourceTableProps> {
}

export const ModTable: FC<IModTableProps> = props => {
	const filterContext = useOptionalFilterContext<ModFilterDto>();
	const {t} = useTranslation();
	return <ModsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.mod.table.footer.label', {data: sourceContext.data()})}
		listItemRender={mod => <ModListItem mod={mod}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, mod) => <ButtonBar>
					<ModLinkButton title={null} mod={mod}/>
					<ModQuickMenu mod={mod}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.mod.table.name',
				render: (_, mod) => <ModPreviewButton title={mod.name} mod={mod}/>,
				sorter: true,
			}),
			column({
				key: "power",
				title: 'lab.mod.table.power',
				render: (_, mod) => mod.power + 'W',
				sorter: true,
				width: 140,
			}),
			column({
				key: "vendor",
				title: 'lab.mod.table.vendor',
				render: (_, mod) => mod.vendor.name,
				sorter: true,
				width: 220,
			}),
		]}
	</ModsSourceTable>
}
