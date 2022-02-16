import {FC} from "react";
import {SliderProps} from "rc-slider";
import {Slider} from "antd";

export interface IAirflowInputProps extends Partial<SliderProps> {
}

export const AirflowInput: FC<IAirflowInputProps> = props => {
	return <Slider
		marks={{
			1: 1,
			3: 3,
			5: 5,
			7: 7,
			9: 9,
		}}
		min={1}
		max={9}
		step={1}
		{...props}
	/>
}
