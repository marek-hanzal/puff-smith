import {FC} from "react";
import {Slider} from "antd";
import {SliderProps} from "rc-slider";

export interface IPowerInputProps extends Partial<SliderProps> {
}

export const PowerInput: FC<IPowerInputProps> = props => {
	return <Slider
		marks={{
			0: '0W',
			20: 20,
			40: 40,
			60: 60,
			80: '80W',
		}}
		min={0}
		max={80}
		step={0.5}
		{...props}
	/>;
}
