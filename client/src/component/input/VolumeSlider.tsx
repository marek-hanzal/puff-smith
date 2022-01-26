import {SliderProps} from "rc-slider";
import {FC} from "react";
import {Slider} from "antd";

export interface IVolumeSliderProps extends Partial<SliderProps> {
}

export const VolumeSlider: FC<IVolumeSliderProps> = props => {
	return <Slider
		marks={{
			10: 10 + 'ml',
			60: 60 + 'ml',
			120: 120 + 'ml',
			500: 500 + 'ml',
		}}
		min={10}
		max={500}
		step={10}
		{...props}
	/>
}
