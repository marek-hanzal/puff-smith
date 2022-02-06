import {FC} from "react";
import {SliderProps} from "rc-slider";
import {Slider} from "antd";

export interface ISizeInputProps extends Partial<SliderProps> {
}

export const SizeInput: FC<ISizeInputProps> = props => {
	return <Slider
		marks={{
			0.1: 0.1,
			0.15: 0.15,
			0.2: 0.2,
			0.25: 0.25,
			0.3: 0.3,
			0.35: 0.35,
			0.4: 0.4,
		}}
		min={0.1}
		max={0.4}
		step={0.05}
		{...props}
	/>
}
