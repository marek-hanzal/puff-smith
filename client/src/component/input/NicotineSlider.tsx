import {SliderProps} from "rc-slider";
import {FC} from "react";
import {Slider} from "antd";

export interface INicotineSliderProps extends Partial<SliderProps> {
}

export const NicotineSlider: FC<INicotineSliderProps> = props => {
	return <Slider
		marks={{
			0: 0 + 'mg',
			3: 3,
			6: 6,
			9: 9,
			12: 12,
			16: 16,
			18: 18,
			20: 20 + 'mg',
		}}
		min={0}
		max={20}
		step={1}
		{...props}
	/>;
}
