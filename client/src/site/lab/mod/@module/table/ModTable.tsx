import {IModsSourceTableProps, ModsSourceTable, useModsOptionalFilterContext} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {FC} from "react";
import {ButtonBar} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {ModListItem} from "@/puff-smith/site/lab/mod/@module/table/ModListItem";
import {ModLinkButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModLinkButton";
import {ModQuickMenu} from "@/puff-smith/site/lab/mod/@module/component/ModQuickMenu";
import {ModPreviewButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModPreviewButton";
import {Tags} from "@/puff-smith/component/Tags";
import {Volt, Watt} from "@/puff-smith";

export interface IModTableProps extends Partial<IModsSourceTableProps> {
}

export const ModTable: FC<IModTableProps> = props => {
	const {t} = useTranslation();
	const filterContext = useModsOptionalFilterContext();
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
				key: "cellTypes",
				title: 'lab.mod.table.cellTypes',
				render: (_, mod) => <Tags tags={mod.cellTypes}/>,
				width: 240,
			}),
			column({
				key: "voltage",
				title: 'lab.mod.table.voltage',
				render: (_, mod) => <Volt volt={mod.voltage}/>,
				sorter: true,
				width: 180,
			}),
			column({
				key: "power",
				title: 'lab.mod.table.power',
				render: (_, mod) => <Watt watt={mod.power}/>,
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
