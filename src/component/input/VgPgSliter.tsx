import {Slider} from "antd";
import {FC} from "react";

export interface IVgPgSliderProps {
}

export const VgPgSlider: FC<IVgPgSliderProps> = props => {
	return <Slider
		marks={{
			0: "0 VG",
			50: 50,
			70: 70,
			80: 80,
			100: "100VG",
		}}
		min={0}
		max={100}
		step={1}
		{...props}
	/>;
};
