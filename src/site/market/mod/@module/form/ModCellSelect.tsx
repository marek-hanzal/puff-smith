import {IModCellSourceSelectProps, ModCellProviderControl, ModCellSourceSelect} from "@/sdk/api/mod/cell/query";
import {FC} from "react";

export interface IModCellSelectProps extends Partial<IModCellSourceSelectProps> {
}

export const ModCellSelect: FC<IModCellSelectProps> = props => {
	return <ModCellProviderControl>
		<ModCellSourceSelect
			toOption={item => ({
				value: item.id,
				label: item.code,
			})}
			{...props}
		/>
	</ModCellProviderControl>;
};
