import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseSourceSelect, IBaseSourceSelectProps} from "@/sdk/api/liquid/base/query";
import {FC} from "react";

export interface ILiquidBaseSelectProps extends Partial<IBaseSourceSelectProps> {
}

export const LiquidBaseSelect: FC<ILiquidBaseSelectProps> = props => {
	return <BaseSourceSelect
		toOption={item => ({
			value: item.id,
			label: <BaseNameInline base={item}/>
		})}
		{...props}
	/>;
};
