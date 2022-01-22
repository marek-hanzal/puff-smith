import {CoilsSourceSelect, ICoilsSourceSelectProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {CoilInline} from "@/puff-smith/site/lab/coil";

export interface ICoilSelectProps extends Partial<ICoilsSourceSelectProps> {
}

export const CoilSelect: FC<ICoilSelectProps> = props => {
	return <CoilsSourceSelect
		showSearch
		optionLabelProp={'code'}
		toOption={coil => ({
			label: <CoilInline coil={coil}/>,
			value: coil.id,
			...coil,
		})}
		{...props}
	/>
}
