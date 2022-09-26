import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {LiquidFields} from "@/puff-smith/ui/liquid/form/LiquidFields";
import {ILiquidCreateDefaultMobileFormProps, LiquidCreateDefaultMobileForm} from "@/sdk/api/liquid/create";
import {FC} from "react";

export interface ILiquidCreateFormProps extends Partial<ILiquidCreateDefaultMobileFormProps> {
}

export const LiquidCreateForm: FC<ILiquidCreateFormProps> = ({toForm, ...props}) => {
	return <LiquidCreateDefaultMobileForm
		icon={<LiquidIcon/>}
		toForm={() => ({
			draw: ["50"],
			vgpg: ["50"],
			nicotine: 6,
			booster: {
				vgpg: ["70"],
				nicotine: 18,
				volume: 10,
			},
			base: {
				vgpg: ["70"],
			},
			mixed: new Date(),
			...toForm?.(),
		})}
		toMutation={({draw, vgpg: [vgpg], ...values}) => ({
			...values,
			vg: vgpg,
			pg: 100 - vgpg,
		})}
		{...props}
	>
		<LiquidFields/>
	</LiquidCreateDefaultMobileForm>;
};
