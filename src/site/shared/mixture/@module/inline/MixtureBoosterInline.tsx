import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface IMixtureBoosterInlinePros {
	mixture: IMixture;
}

export const MixtureBoosterInline: FC<IMixtureBoosterInlinePros> = ({mixture}) => {
	return mixture.booster ? <Space size={4} split={"-"}>
		<Typography.Text>{mixture.boosterCount}x</Typography.Text>
		<BoosterNameInline booster={mixture.booster}/>
		<PgVgInline pgvg={mixture.booster}/>
	</Space> : null;
};
