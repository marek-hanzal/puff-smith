import {CoilInventoryProviderControl, CoilInventorySourceSelect, ICoilInventorySourceSelectProps} from "@/sdk/api/inventory/coil/query";
import {FC} from "react";

export interface ICoilSelectProps extends Partial<ICoilInventorySourceSelectProps> {
}

export const CoilSelect: FC<ICoilSelectProps> = props => {
	return <CoilInventoryProviderControl
		defaultSize={25}
		defaultOrderBy={{
			name: "asc",
		}}
	>
		<CoilInventorySourceSelect
			showSearch
			toOption={coil => ({
				value: coil.id,
				label: coil.name,
			})}
			{...props}
		/>
	</CoilInventoryProviderControl>;
};
