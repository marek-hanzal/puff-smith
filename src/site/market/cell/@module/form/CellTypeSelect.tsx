import {CellTypeProviderControl, CellTypeSourceSelect, ICellTypeSourceSelectProps} from "@/sdk/api/cell/type/query";
import {FC} from "react";

export interface ICellTypeSelectProps extends Partial<ICellTypeSourceSelectProps> {
}

export const CellTypeSelect: FC<ICellTypeSelectProps> = props => {
	return <CellTypeProviderControl>
		<CellTypeSourceSelect
			toOption={item => ({
				value: item.id,
				label: item.code,
			})}
			{...props}
		/>
	</CellTypeProviderControl>;
};
