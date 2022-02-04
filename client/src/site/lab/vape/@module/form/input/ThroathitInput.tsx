import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface IThroathitInputProps extends Partial<IRateInputProps> {
}

export const ThroathitInput: FC<IThroathitInputProps> = props => {
	return <RateInput
		translation={'lab.vape.throathit'}
		min={0}
		max={4}
		{...props}
	/>
}
