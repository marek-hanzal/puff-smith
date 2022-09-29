import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {LiquidFields} from "@/puff-smith/ui/liquid/form/LiquidFields";
import {ILiquidPatchDefaultMobileFormProps, LiquidPatchDefaultMobileForm} from "@/sdk/api/liquid/patch";
import {FC} from "react";

export interface ILiquidPatchFormProps extends Partial<ILiquidPatchDefaultMobileFormProps> {
	liquid: ILiquid;
}

export const LiquidPatchForm: FC<ILiquidPatchFormProps> = ({liquid, ...props}) => {
	return <LiquidPatchDefaultMobileForm
		toForm={() => ({})}
		{...props}
	>
		<LiquidFields/>
	</LiquidPatchDefaultMobileForm>;
};
