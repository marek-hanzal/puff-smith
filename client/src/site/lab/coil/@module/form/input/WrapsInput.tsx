import {FC} from "react";
import {Slider} from "antd";
import {SliderProps} from "rc-slider";

export interface IWrapsInputProps extends Partial<SliderProps> {
}

export const WrapsInput: FC<IWrapsInputProps> = props => {
	return <Slider
		marks={{
			3: 3,
			5: 5,
			6: 6,
			7: 7,
			12: 12,
		}}
		min={3}
		max={12}
		step={1}
		{...props}
	/>
}
