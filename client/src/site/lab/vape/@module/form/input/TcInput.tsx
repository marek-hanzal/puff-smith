import {FC} from "react";
import {Slider} from "antd";
import {SliderProps} from "rc-slider";

export interface ITcInputProps extends Partial<SliderProps> {
}

export const TcInput: FC<ITcInputProps> = props => {
	return <Slider
		marks={{
			0: '0°C',
			80: 80,
			120: 120,
			200: 200,
			240: '240°C',
		}}
		min={0}
		max={240}
		{...props}
	/>;
}
