import {CoilsSourceSelect, ICoilsSourceSelectProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {Typography} from "antd";

export interface ICoilSelectProps extends Partial<ICoilsSourceSelectProps> {
}

export const CoilSelect: FC<ICoilSelectProps> = props => {
	return <CoilsSourceSelect
		showSearch
		optionLabelProp={'code'}
		toOption={coil => ({
			label: <>
				{coil.code} - <Typography.Text>{coil.wire.name}</Typography.Text>&nbsp;
				<Typography.Text type={'secondary'}>{coil.wire.vendor.name}</Typography.Text><br/>
				<Typography.Text type={'secondary'}>{(coil.wire.ga ? coil.wire.ga + 'GA' : null) || coil.wire.description}</Typography.Text><br/>
				<Typography.Text>{coil.ohm.toFixed(2)}ohm</Typography.Text>
			</>,
			value: coil.id,
			...coil,
		})}
		{...props}
	/>
}
