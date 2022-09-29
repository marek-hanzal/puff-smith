import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {FC} from "react";

export interface ILiquidInlineProps {
	liquid: ILiquid;
}

export const LiquidInline: FC<ILiquidInlineProps> = ({liquid}) => {
	return <AromaNameInline aroma={liquid.aroma}/>;
};
