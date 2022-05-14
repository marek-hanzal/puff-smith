import {ContentInline} from "@/puff-smith/component/inline/ContentInline";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {BaseInventoryCreateButton} from "@/puff-smith/site/market/base/@module/button/BaseInventoryCreateButton";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {Space} from "antd";
import {FC} from "react";

export interface IMixtureBaseInlinePros {
	mixture: IMixture;
	isOwned?: boolean;
}

export const MixtureBaseInline: FC<IMixtureBaseInlinePros> = ({mixture, isOwned}) => {
	return mixture.base ? <Space size={4}>
		<Space size={4} split={"-"}>
			<ContentInline content={mixture.baseMl}/>
			<BaseNameInline base={mixture.base}/>
			<PgVgInline pgvg={mixture.base}/>
		</Space>
		{isOwned === false && <BaseInventoryCreateButton type={"link"} base={mixture.base}/>}
	</Space> : null;
};
