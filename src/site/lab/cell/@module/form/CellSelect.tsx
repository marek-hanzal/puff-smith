import {FC} from "react";
import {CellsSourceSelect, ICellsSourceSelectProps} from "@/sdk/puff-smith/api/lab/cell/endpoint";
import {CellInline} from "@/puff-smith/site/lab/cell/@module/component/CellInline";

export interface ICellSelectProps extends Partial<ICellsSourceSelectProps> {
}

export const CellSelect: FC<ICellSelectProps> = props => {
	return <CellsSourceSelect
		showSearch
		toOption={cell => ({
			label: <CellInline cell={cell}/>,
			value: cell.id,
		})}
		{...props}
	/>
}
