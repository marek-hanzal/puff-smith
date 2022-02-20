import {CoilsSourceSelect, ICoilsSourceSelectProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {CoilInline} from "@/puff-smith/site/lab/coil/@module/component/CoilInline";

export interface ICoilSelectProps extends Partial<ICoilsSourceSelectProps> {
}

export const CoilSelect: FC<ICoilSelectProps> = props => {
	return <CoilsSourceSelect
		showSearch
		optionLabelProp={'name'}
		toOption={coil => ({
			name: coil.wire.name,
			label: <CoilInline coil={coil}/>,
			value: coil.id,
			...coil,
		})}
		{...props}
	/>
}
