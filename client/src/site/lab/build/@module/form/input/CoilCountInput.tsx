import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface ICoilCountInputProps extends Partial<IRateInputProps> {
}

export const CoilCountInput: FC<ICoilCountInputProps> = props => {
	return <RateInput
		translation={'lab.build.coilCount'}
		min={1}
		max={4}
		{...props}
	/>
}
