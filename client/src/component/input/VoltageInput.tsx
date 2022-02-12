import {FC} from "react";
import {InputNumber, InputNumberProps} from "antd";

export interface IVoltageInputProps extends Partial<InputNumberProps> {

}

export const VoltageInput: FC<IVoltageInputProps> = props => {
	return <InputNumber min={2} max={10} style={{width: '100%'}} {...props}/>;
}
