import {Slider} from "antd";
import {SliderSingleProps} from "antd/lib/slider";
import {FC} from "react";

export interface IPgSliderProps extends Partial<SliderSingleProps> {
}

export const PgSlider: FC<IPgSliderProps> = props => {
	return <Slider
		marks={{
			0: 0 + "%",
			20: 20,
			30: 30,
			40: 40,
			50: 50,
			100: 100 + "%",
		}}
		min={0}
		max={100}
		step={1}
		{...props}
	/>;
};
