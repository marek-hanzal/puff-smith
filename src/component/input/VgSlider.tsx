import {Slider} from "antd";
import {SliderSingleProps} from "antd/lib/slider";
import {FC} from "react";

export interface IVgSliderProps extends Partial<SliderSingleProps> {
}

export const VgSlider: FC<IVgSliderProps> = props => {
	return <Slider
		marks={{
			0: 0 + "%",
			50: 50,
			60: 60,
			70: 70,
			80: 80,
			100: 100 + "%",
		}}
		min={0}
		max={100}
		step={1}
		{...props}
	/>;
};
