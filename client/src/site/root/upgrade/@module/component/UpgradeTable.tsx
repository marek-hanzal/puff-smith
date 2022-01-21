import {IUpgradesSourceTableProps, UpgradesSourceTable} from "@/sdk/edde/api/root/upgrade/endpoint";
import {PreviewBool} from "@leight-core/leight";
import {FC} from "react";

export interface IUpgradeTableProps extends Partial<IUpgradesSourceTableProps> {
}

export const UpgradeTable: FC<IUpgradeTableProps> = props => {
	return <UpgradesSourceTable
		defaultOrderBy={{version: false}}
		{...props}
	>
		{({column}) => [
			column({
				key: "active",
				dataIndex: "active",
				title: "root.upgrade.table.active.title",
				align: "center",
				width: 110,
				sorter: true,
				render: active => <PreviewBool bool={active}/>,
			}),
			column({
				key: "version",
				dataIndex: "version",
				width: 160,
				title: "root.upgrade.table.version.title",
				sorter: true,
				defaultSortOrder: "descend",
			}),
			column({
				key: "name",
				dataIndex: "name",
				title: "root.upgrade.table.name.title",
				sorter: true,
			}),
		]}
	</UpgradesSourceTable>;
};
