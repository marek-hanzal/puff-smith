import {LiquidIcon}   from "@/puff-smith/component/icon/LiquidIcon";
import {LiquidFields} from "@/puff-smith/ui/liquid/form/LiquidFields";
import {
    ILiquidCreateDefaultMobileFormProps,
    LiquidCreateDefaultMobileForm
}                     from "@/sdk/api/liquid/create";
import {FC}           from "react";

export interface ILiquidCreateFormProps extends Partial<ILiquidCreateDefaultMobileFormProps> {
}

export const LiquidCreateForm: FC<ILiquidCreateFormProps> = ({toForm, ...props}) => {
	return <LiquidCreateDefaultMobileForm
		icon={<LiquidIcon/>}
		toForm={() => ({
			mixed: new Date(),
			...toForm?.(),
		})}
		toMutation={values => values}
		{...props}
	>
		<LiquidFields/>
	</LiquidCreateDefaultMobileForm>;
};
