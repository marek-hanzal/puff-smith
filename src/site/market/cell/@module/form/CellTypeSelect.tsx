import {ITypeSourceSelectProps, TypeSourceControlProvider, TypeSourceSelect} from "@/sdk/api/cell/type/query";
import {FC} from "react";

export interface ICellTypeSelectProps extends Partial<ITypeSourceSelectProps> {
}

export const CellTypeSelect: FC<ICellTypeSelectProps> = props => {
	return <TypeSourceControlProvider>
		<TypeSourceSelect
			toOption={item => ({
				value: item.id,
				label: item.code,
			})}
			{...props}
		/>
	</TypeSourceControlProvider>;
};
