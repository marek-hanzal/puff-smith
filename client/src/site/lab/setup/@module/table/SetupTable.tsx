import {ISetupsSourceTableProps, SetupsSourceTable} from "@/sdk/puff-smith/api/lab/setup/endpoint";
import {FC} from "react";
import {BuildInline} from "@/puff-smith/site/lab/build";
import {ModInline} from "@/puff-smith/site/lab/mod";

export interface ISetupTableProps extends Partial<ISetupsSourceTableProps> {
}

export const SetupTable: FC<ISetupTableProps> = props => {
	return <SetupsSourceTable
		{...props}
	>
		{({column}) => [
			column({
				key: "name",
				dataIndex: "name",
				title: "lab.setup.table.name",
				width: 150,
			}),
			column({
				key: "build",
				title: "lab.setup.table.build",
				render: (_, setup) => <BuildInline build={setup.build}/>,
			}),
			column({
				key: "mod",
				title: "lab.setup.table.mod",
				render: (_, setup) => <ModInline mod={setup.mod}/>,
				width: 250,
			}),
		]}
	</SetupsSourceTable>
}
