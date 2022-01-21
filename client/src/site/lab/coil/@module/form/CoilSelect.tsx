import {CoilsSourceSelect, ICoilsSourceSelectProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";

export interface ICoilSelectProps extends Partial<ICoilsSourceSelectProps> {
}

export const CoilSelect: FC<ICoilSelectProps> = props => {
	return <CoilsSourceSelect
		showSearch
		toOption={coil => ({label: coil.code, value: coil.id})}
		{...props}
	/>
}
