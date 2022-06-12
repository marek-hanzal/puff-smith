import {CoilSize} from "@/puff-smith/component/inline/CoilSize";
import {Slider} from "antd";
import {FC} from "react";

export const CoilSizeInput: FC = props => {
	return <Slider
		min={0.15}
		max={0.5}
		step={0.05}
		marks={{
			"0.15": 0.15,
			"0.2": 0.2,
			"0.25": 0.25,
			"0.3": 0.3,
			"0.35": 0.35,
			"0.4": 0.4,
			"0.45": 0.45,
			"0.5": <CoilSize size={0.5}/>,
		}}
		{...props}
	/>;
};
