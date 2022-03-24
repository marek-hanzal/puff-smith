import {FC} from "react";
import {CellsSourceSelect, ICellsSourceSelectProps} from "@/sdk/puff-smith/api/lab/voucher/endpoint";
import {CellInline} from "../component/CellInline";

export interface ICellSelectProps extends Partial<ICellsSourceSelectProps> {
}

export const CellSelect: FC<ICellSelectProps> = props => {
	return <CellsSourceSelect
		showSearch
		toOption={voucher => ({
			label: <CellInline voucher={voucher}/>,
			value: voucher.id,
		})}
		{...props}
	/>
}
