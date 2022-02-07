import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface ICoilOffsetInputProps extends Partial<IRateInputProps> {
}

export const CoilOffsetInput: FC<ICoilOffsetInputProps> = props => {
	return <RateInput
		translation={'lab.build.coilOffset'}
		min={-2}
		max={2}
		{...props}
	/>
}
