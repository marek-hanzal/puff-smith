import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface ICloudsInputProps extends Partial<IRateInputProps> {
}

export const CloudsInput: FC<ICloudsInputProps> = props => {
	return <RateInput
		translation={'lab.vape.clouds'}
		min={0}
		max={3}
		{...props}
	/>
}
