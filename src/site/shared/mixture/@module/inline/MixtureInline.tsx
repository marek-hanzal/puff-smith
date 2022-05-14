import {IMixture} from "@/puff-smith/service/mixture/interface";
import {MixtureBaseInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBaseInline";
import {MixtureBoosterInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBoosterInline";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IMixtureInlinePros {
	mixture: IMixture;
	hasBooster?: boolean;
	hasBase?: boolean;
}

export const MixtureInline: FC<IMixtureInlinePros> = ({mixture, hasBooster, hasBase}) => {
	return <Space split={<Divider type={"vertical"}/>}>
		{mixture.booster && <MixtureBoosterInline mixture={mixture} isOwned={hasBooster}/>}
		{mixture.base && <MixtureBaseInline mixture={mixture} isOwned={hasBase}/>}
	</Space>;
};
