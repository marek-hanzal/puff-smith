import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {Space} from "antd";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";

export interface IMixtureInlineProps {
	mixture: MixtureDto;
}

export const MixtureInline: FC<IMixtureInlineProps> = ({mixture}) => {
	return <Space direction={'vertical'}>
		<span>{mixture.name}</span>
		<LiquidInline liquid={mixture.liquid}/>
		<span>{mixture.nicotine}mg</span>
	</Space>
}
