import {FC} from "react";
import {Slider} from "antd";

export interface ICoilOffsetProps {
	coilOffset: number;
}

export const CoilOffset: FC<ICoilOffsetProps> = ({coilOffset}) => {
	return <Slider
		included={false}
		tipFormatter={null}
		marks={{
			"-2": -2,
			"-1": -1,
			"0": 0,
			"1": 1,
			"2": 2,
		}}
		min={-2}
		max={2}
		value={coilOffset}
		disabled
	/>
}
