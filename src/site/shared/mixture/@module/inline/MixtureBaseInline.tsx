import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {BaseInventoryCreateButton} from "@/puff-smith/site/market/base/@module/button/BaseInventoryCreateButton";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface IMixtureBaseInlinePros {
	mixture: IMixture;
	isOwned?: boolean;
}

export const MixtureBaseInline: FC<IMixtureBaseInlinePros> = ({mixture, isOwned}) => {
	return mixture.base ? <Space size={4} split={"-"}>
		<Typography.Text>{mixture.baseMl}ml</Typography.Text>
		<BaseNameInline base={mixture.base}/>
		<PgVgInline pgvg={mixture.base}/>
		{isOwned === false && <BaseInventoryCreateButton type={"link"} base={mixture.base}/>}
	</Space> : null;
};
