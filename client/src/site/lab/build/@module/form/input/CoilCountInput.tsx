import {FC} from "react";
import {Slider} from "antd";
import {SliderProps} from "rc-slider";

export interface ICoilCountInputProps extends Partial<SliderProps> {
}

export const CoilCountInput: FC<ICoilCountInputProps> = props => {
	return <Slider
		min={1}
		max={4}
		marks={{
			1: 1,
			2: 2,
			3: 3,
			4: 4,
		}}
		{...props}
	/>
}
