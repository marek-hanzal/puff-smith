import {SliderProps} from "rc-slider";
import {FC} from "react";
import {Slider} from "antd";

export interface IVgSliderProps extends Partial<SliderProps> {
}

export const VgSlider: FC<IVgSliderProps> = props => {
	return <Slider
		marks={{
			0: 0 + '%',
			50: 50,
			60: 60,
			70: 70,
			80: 80,
			100: 100 + '%',
		}}
		min={0}
		max={100}
		step={1}
		{...props}
	/>;
}
