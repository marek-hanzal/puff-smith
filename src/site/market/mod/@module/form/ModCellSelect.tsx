import {CellSourceControlProvider, CellSourceSelect, ICellSourceSelectProps} from "@/sdk/api/mod/cell/query";
import {FC} from "react";

export interface IModCellSelectProps extends Partial<ICellSourceSelectProps> {
}

export const ModCellSelect: FC<IModCellSelectProps> = props => {
	return <CellSourceControlProvider>
		<CellSourceSelect
			toOption={item => ({
				value: item.id,
				label: item.code,
			})}
			{...props}
		/>
	</CellSourceControlProvider>;
};
