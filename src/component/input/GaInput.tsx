import {FC} from "react";
import {InputNumber, InputNumberProps} from "antd";

export interface IGaInputProps extends Partial<InputNumberProps> {
}

export const GaInput: FC<IGaInputProps> = props => {
	return <InputNumber style={{width: '100%'}} min={20} max={48} {...props}/>;
}
