import {LiquidIcon} from "@/puff-smith";
import {ILiquidCleverMixInfo} from "@/puff-smith/service/liquid";
import {Template} from "@leight-core/client";
import {FC} from "react";

export interface ICleverMixInfoProps {
	cleverMixInfo?: ILiquidCleverMixInfo;
}

export const CleverMixInfo: FC<ICleverMixInfoProps> = ({cleverMixInfo}) => {
	return cleverMixInfo?.result ? <>
	</> : <Template
		icon={<LiquidIcon/>}
		label={"lab.liquid.clever-info"}
	/>;
};
