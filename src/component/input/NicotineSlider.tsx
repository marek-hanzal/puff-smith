import {Slider} from "antd";
import {FC} from "react";

export interface INicotineSliderProps {
	onChange?: (value: number) => void;
}

export const NicotineSlider: FC<INicotineSliderProps> = props => {
	return <Slider
		min={0}
		max={20}
		marks={{
			0: 0 + "mg",
			3: 3,
			6: 6,
			9: 9,
			12: 12,
			16: 16,
			20: 20 + "mg",
		}}
		{...props}
	/>;
};
