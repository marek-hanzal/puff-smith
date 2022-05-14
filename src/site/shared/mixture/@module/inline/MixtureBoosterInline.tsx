import {ContentInline} from "@/puff-smith/component/inline/ContentInline";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {BoosterInventoryCreateButton} from "@/puff-smith/site/market/booster/@module/button/BoosterInventoryCreateButton";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface IMixtureBoosterInlinePros {
	mixture: IMixture;
	isOwned?: boolean;
}

export const MixtureBoosterInline: FC<IMixtureBoosterInlinePros> = ({mixture, isOwned}) => {
	return mixture.booster ? <Space size={4}>
		<Space size={4} split={"-"}>
			<Space size={2}>
				<Typography.Text>{mixture.boosterCount}x</Typography.Text>
				(=<ContentInline content={mixture.boosterCount * mixture.booster.volume}/>)
			</Space>
			<BoosterNameInline booster={mixture.booster}/>
			<PgVgInline pgvg={mixture.booster}/>
		</Space>
		{isOwned === false && <BoosterInventoryCreateButton type={"link"} booster={mixture.booster}/>}
	</Space> : null;
};
