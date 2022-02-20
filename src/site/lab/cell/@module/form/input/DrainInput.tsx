import {FC} from "react";
import {Slider} from "antd";

export interface IDrainInputProps {
}

export const DrainInput: FC<IDrainInputProps> = props => {
	return <Slider
		min={1}
		max={40}
		marks={{
			1: 1,
			5: 5,
			10: 10,
			20: 20,
			30: 30,
			35: 35,
			40: 40,
		}}
		{...props}
	/>
}
