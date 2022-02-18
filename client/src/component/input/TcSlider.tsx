import {SliderProps} from "rc-slider";
import {FC} from "react";
import {Slider} from "antd";

export interface ITcSliderProps extends Partial<SliderProps> {
}

export const TcSlider: FC<ITcSliderProps> = props => {
	return <Slider
		marks={{
			0: 0 + '°C',
			90: 90,
			120: 120,
			160: 160,
			200: 200,
			240: 240,
			280: 280 + '°C',
		}}
		min={0}
		max={280}
		{...props}
	/>
}
