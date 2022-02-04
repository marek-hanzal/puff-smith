import {FC} from "react";
import {IRateInputProps, RateInput} from "@/puff-smith";

export interface IAirflowInputProps extends Partial<IRateInputProps> {
}

export const AirflowInput: FC<IAirflowInputProps> = props => {
	return <RateInput
		translation={'lab.vape.airflow'}
		min={0}
		max={3}
		{...props}
	/>
}
