import {SliderProps} from "rc-slider";
import {FC} from "react";
import {Slider} from "antd";

export interface IPowerSliderProps extends Partial<SliderProps> {
}

export const PowerSlider: FC<IPowerSliderProps> = props => {
	return <Slider
		marks={{
			0: 0,
			20: 20,
			40: 40,
			60: 60,
			80: 80,
		}}
		min={0}
		max={80}
		step={0.5}
		{...props}
	/>
}
