import {BuildTable, IBuildTableProps} from "@/puff-smith/site/lab/build";
import {FC} from "react";

export interface ILatestBuildTableProps extends Partial<IBuildTableProps> {
}

export const LatestBuildTable: FC<ILatestBuildTableProps> = props => {
	return <BuildTable
		source={{
			defaultSize: 5,
		}}
		{...props}
	/>
}
