import {IVapeTableProps, VapeTable} from "@/puff-smith/site/lab/vape";
import {FC} from "react";

export interface IRecentVapeTableProps extends Partial<IVapeTableProps> {
}

export const RecentVapeTable: FC<IRecentVapeTableProps> = props => {
	return <VapeTable
		source={{
			defaultSize: 3,
		}}
		{...props}
	/>
}
