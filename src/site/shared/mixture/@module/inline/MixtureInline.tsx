import {IMixture} from "@/puff-smith/service/mixture/interface";
import {MixtureBaseInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBaseInline";
import {MixtureBoosterInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBoosterInline";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IMixtureInlinePros {
	mixture: IMixture;
}

export const MixtureInline: FC<IMixtureInlinePros> = ({mixture}) => {
	return <Space split={<Divider type={"vertical"}/>}>
		{mixture.booster && <MixtureBoosterInline mixture={mixture}/>}
		{mixture.base && <MixtureBaseInline mixture={mixture}/>}
	</Space>;
};
