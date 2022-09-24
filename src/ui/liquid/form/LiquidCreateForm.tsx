import {LiquidFields} from "@/puff-smith/ui/liquid/form/LiquidFields";
import {ILiquidCreateDefaultMobileFormProps, LiquidCreateDefaultMobileForm} from "@/sdk/api/liquid/create";
import {FC} from "react";

export interface ILiquidCreateFormProps extends Partial<ILiquidCreateDefaultMobileFormProps> {
}

export const LiquidCreateForm: FC<ILiquidCreateFormProps> = props => {
	return <LiquidCreateDefaultMobileForm
		{...props}
	>
		<LiquidFields/>
	</LiquidCreateDefaultMobileForm>;
};
