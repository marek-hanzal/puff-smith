import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface ILeaksInputProps extends Partial<IRateInputProps> {
}

export const LeaksInput: FC<ILeaksInputProps> = props => {
	return <RateInput
		translation={'lab.vape.leaks'}
		min={0}
		max={4}
		{...props}
	/>
}
