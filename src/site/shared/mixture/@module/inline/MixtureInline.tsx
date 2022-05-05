import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {MixtureAromaInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureAromaInline";
import {MixtureBaseInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBaseInline";
import {MixtureBoosterInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBoosterInline";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IMixtureInlinePros {
	mixture: IMixture;
}

export const MixtureInline: FC<IMixtureInlinePros> = ({mixture}) => {
	return <Space split={<Divider type={"vertical"}/>}>
		<PgVgInline pgvg={mixture}/>
		<NicotineInline nicotine={mixture.nicotine}/>
		{mixture.aroma && <MixtureAromaInline mixture={mixture}/>}
		{mixture.booster && <MixtureBoosterInline mixture={mixture}/>}
		{mixture.base && <MixtureBaseInline mixture={mixture}/>}
	</Space>;
};
