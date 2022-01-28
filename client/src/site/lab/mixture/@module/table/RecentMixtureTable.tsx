import {IMixtureTableProps, MixtureTable} from "@/puff-smith/site/lab/mixture";
import {FC} from "react";

export interface IRecentMixtureTableProps extends Partial<IMixtureTableProps> {
}

export const RecentMixtureTable: FC<IRecentMixtureTableProps> = props => {
	return <MixtureTable
		source={{
			defaultSize: 5,
			defaultOrderBy: {
				active: false,
				mixed: false,
			},
		}}
		{...props}
	/>
}
