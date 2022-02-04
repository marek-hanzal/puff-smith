import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface IDryhitInputProps extends Partial<IRateInputProps> {
}

export const DryhitInput: FC<IDryhitInputProps> = props => {
	return <RateInput
		translation={'lab.vape.dryhit'}
		min={0}
		max={2}
		{...props}
	/>
}
