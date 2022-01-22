import {FC} from "react";
import {Slider} from "antd";

export interface ICottonOffsetProps {
	cottonOffset: number;
}

export const CottonOffset: FC<ICottonOffsetProps> = ({cottonOffset}) => {
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
		value={cottonOffset}
	/>
}
