import {FC} from "react";
import {Slider} from "antd";
import {SliderProps} from "rc-slider";

export interface INicotineInputProps extends Partial<SliderProps> {
}

export const NicotineInput: FC<INicotineInputProps> = props => {
	return <Slider
		marks={{
			0: 0,
			3: 3,
			6: 6,
			9: 9,
			12: 12,
			16: 16,
			18: 18,
			20: 20,
		}}
		min={0}
		max={20}
		step={1}
		{...props}
	/>;
}
