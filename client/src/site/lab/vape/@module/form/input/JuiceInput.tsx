import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface IJuiceInputProps extends Partial<IRateInputProps> {
}

export const JuiceInput: FC<IJuiceInputProps> = props => {
	return <RateInput
		translation={'lab.vape.juice'}
		min={0}
		max={2}
		{...props}
	/>
}
