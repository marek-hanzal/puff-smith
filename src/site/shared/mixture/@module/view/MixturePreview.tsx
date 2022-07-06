import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {MixtureBaseInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBaseInline";
import {MixtureBoosterInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBoosterInline";
import {Preview} from "@leight-core/client";
import {FC} from "react";

export interface IMixturePreviewProps {
	mixture: IMixture;
}

export const MixturePreview: FC<IMixturePreviewProps> = ({mixture}) => {
	return <Preview name={"mixture"} translation={"lab.mixture.preview"} size={"small"}>
		{[
			{
				name: "info",
				items: {
					aroma: <AromaNameInline aroma={mixture.aroma}/>,
					booster: mixture.booster && <MixtureBoosterInline mixture={mixture}/>,
					base: mixture.base && <MixtureBaseInline mixture={mixture}/>,
				},
			},
			{
				name: "more",
				items: {
					aromaContent: <AromaContentInline aroma={mixture.aroma}/>,
					nicotine: <NicotineInline nicotine={mixture.nicotine}/>,
					pgvg: <VgPgInline vgpg={mixture}/>,
				},
			},
		]}
	</Preview>;
};
