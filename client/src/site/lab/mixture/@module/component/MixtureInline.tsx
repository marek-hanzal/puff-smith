import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {LiquidInline} from "@/puff-smith/site/lab/liquid/@module/component/LiquidInline";

export interface IMixtureInlineProps {
	mixture: MixtureDto;
}

export const MixtureInline: FC<IMixtureInlineProps> = ({mixture}) => {
	return <LiquidInline liquid={mixture.liquid}/>;
}
