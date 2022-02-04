import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface IGlowInputProps extends Partial<IRateInputProps> {
}

export const GlowInput: FC<IGlowInputProps> = props => {
	return <RateInput
		translation={'lab.build.glow'}
		min={1}
		max={5}
		{...props}
	/>
}
