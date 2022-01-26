import {SliderProps} from "rc-slider";
import {FC} from "react";
import {Slider} from "antd";

export interface ISteepSliderProps extends Partial<SliderProps> {
}

export const SteepSlider: FC<ISteepSliderProps> = props => {
	return <Slider
		marks={{
			0: 0,
			7: 7,
			14: 14,
			30: 30,
			60: 60,
		}}
		min={0}
		max={60}
		step={1}
		{...props}
	/>
}
