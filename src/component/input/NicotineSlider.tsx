import {Slider} from "antd";
import {FC} from "react";

export interface INicotineSliderProps {
	onChange?: (value: number) => void;
}

export const NicotineSlider: FC<INicotineSliderProps> = props => {
	return <Slider
		min={0}
		max={18}
		marks={{
			0: 0,
			3: 3,
			6: 6,
			9: 9,
			12: 12,
			15: 15,
			18: 18 + "mg",
		}}
		{...props}
	/>;
};
