import {ILiquidsSourceSelectProps, LiquidsSourceSelect} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {FC} from "react";
import {LiquidInline} from "@/puff-smith/site/lab/liquid/@module/component/LiquidInline";

export interface ILiquidSelectProps extends Partial<ILiquidsSourceSelectProps> {
}

export const LiquidSelect: FC<ILiquidSelectProps> = props => {
	return <LiquidsSourceSelect
		showSearch
		toOption={liquid => ({
			label: <LiquidInline liquid={liquid}/>,
			value: liquid.id,
		})}
		{...props}
	/>
}
