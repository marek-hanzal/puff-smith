import {SliderProps} from "rc-slider";
import {FC} from "react";
import {Slider} from "antd";

export interface ITcSliderProps extends Partial<SliderProps> {
}

export const TcSlider: FC<ITcSliderProps> = props => {
	return <Slider
		marks={{
			0: 0,
			80: 80,
			120: 120,
			200: 200,
			240: 240,
			260: 260,
		}}
		min={0}
		max={260}
		{...props}
	/>
}
