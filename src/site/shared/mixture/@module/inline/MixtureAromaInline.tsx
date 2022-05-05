import {IMixture} from "@/puff-smith/service/mixture/interface";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {Space} from "antd";
import {FC} from "react";

export interface IMixtureAromaInlinePros {
	mixture: IMixture;
}

export const MixtureAromaInline: FC<IMixtureAromaInlinePros> = ({mixture}) => {
	return mixture.aroma ? <Space>
		<AromaNameInline aroma={mixture.aroma}/>
		<AromaContentInline aroma={mixture.aroma}/>
	</Space> : null;
};
