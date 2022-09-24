import {LiquidFields} from "@/puff-smith/ui/liquid/form/LiquidFields";
import {ILiquidPatchDefaultMobileFormProps, LiquidPatchDefaultMobileForm} from "@/sdk/api/liquid/patch";
import {FC} from "react";

export interface ILiquidPatchFormProps extends Partial<ILiquidPatchDefaultMobileFormProps> {
}

export const LiquidPatchForm: FC<ILiquidPatchFormProps> = props => {
	return <LiquidPatchDefaultMobileForm
		{...props}
	>
		<LiquidFields/>
	</LiquidPatchDefaultMobileForm>;
};
