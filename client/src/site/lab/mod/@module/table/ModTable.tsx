import {IModsSourceTableProps, ModsSourceTable} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {FC} from "react";
import {ButtonBar} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {ModListItem} from "@/puff-smith/site/lab/mod/@module/table/ModListItem";
import {ModLinkButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModLinkButton";
import {ModQuickMenu} from "@/puff-smith/site/lab/mod/@module/component/ModQuickMenu";
import {ModPreviewButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModPreviewButton";

export interface IModTableProps extends Partial<IModsSourceTableProps> {
}

export const ModTable: FC<IModTableProps> = props => {
	const {t} = useTranslation();
	return <ModsSourceTable
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
