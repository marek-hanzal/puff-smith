import {FC, forwardRef} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith/component";

export interface ICommonRateInputProps extends Partial<IRateInputProps> {
}

export const CommonRateInput: FC<ICommonRateInputProps> = forwardRef((props, ref) => {
	return <RateInput
		translation={'common.rate'}
		ref={ref as any}
		{...props}
	/>;
});
