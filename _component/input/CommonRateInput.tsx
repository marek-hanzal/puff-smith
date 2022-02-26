import {FC, forwardRef} from "react";
import {Rate, RateProps} from "antd";

export interface ICommonRateInputProps extends Partial<Omit<RateProps, "value">> {
	value?: number | null;
}

export const CommonRateInput: FC<ICommonRateInputProps> = forwardRef((props, ref) => {
	return <Rate
		count={9}
		ref={ref as any}
		allowClear
		{...props as any}
	/>
});
