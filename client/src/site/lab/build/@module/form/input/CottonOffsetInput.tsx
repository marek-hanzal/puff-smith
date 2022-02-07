import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface ICottonOffsetInputProps extends Partial<IRateInputProps> {
}

export const CottonOffsetInput: FC<ICottonOffsetInputProps> = props => {
	return <RateInput
		translation={'lab.build.cottonOffset'}
		min={-2}
		max={2}
		{...props}
	/>
}
