import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaSourceSelect, IAromaSourceSelectProps} from "@/sdk/api/lab/liquid/aroma/query";
import {FC} from "react";

export interface ILiquidAromaSelectProps extends Partial<IAromaSourceSelectProps> {
}

export const LiquidAromaSelect: FC<ILiquidAromaSelectProps> = props => {
	return <AromaSourceSelect
		toOption={item => ({
			value: item.id,
			label: <AromaNameInline aroma={item}/>
		})}
		{...props}
	/>;
};
