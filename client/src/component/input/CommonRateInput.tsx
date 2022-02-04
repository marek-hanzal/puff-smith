import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith/component";

export interface ICommonRateInputProps extends Partial<IRateInputProps> {
}

export const CommonRateInput: FC<ICommonRateInputProps> = props => {
	return <RateInput
		translation={'common'}
		{...props}
	/>;
}
