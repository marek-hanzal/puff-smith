import {FC} from "react";
import {SliderProps} from "rc-slider";
import {Slider} from "antd";

export interface IAirflowInputProps extends Partial<SliderProps> {
}

export const AirflowInput: FC<IAirflowInputProps> = props => {
	return <Slider
		marks={{
			0: 0,
			3: 3,
			6: 6,
			9: 9,
		}}
		min={0}
		max={9}
		step={1}
		{...props}
	/>
}
