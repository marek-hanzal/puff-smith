import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface IFreshInputProps extends Partial<IRateInputProps> {
}

export const FreshInput: FC<IFreshInputProps> = props => {
	return <RateInput
		translation={'lab.vape.fresh'}
		min={0}
		max={4}
		{...props}
	/>
}
