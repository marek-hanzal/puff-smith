import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {MixtureBaseInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBaseInline";
import {MixtureBoosterInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBoosterInline";
import {Preview} from "@leight-core/client";
import {Col, Row} from "antd";
import {FC} from "react";

export interface IMixturePreviewProps {
	mixture: IMixture;
}

export const MixturePreview: FC<IMixturePreviewProps> = ({mixture}) => {
	return <Row gutter={16}>
		<Col span={16}>
			<Preview translation={"lab.mixture.preview"} size={"small"}>
				{{
					aroma: <AromaNameInline aroma={mixture.aroma}/>,
					base: mixture.base && <MixtureBaseInline mixture={mixture}/>,
					booster: mixture.booster && <MixtureBoosterInline mixture={mixture}/>,
				}}
			</Preview>
		</Col>
		<Col span={8}>
			<Preview translation={"lab.mixture.preview"} size={"small"}>
				{{
					aromaContent: <AromaContentInline aroma={mixture.aroma}/>,
					pgvg: <VgPgInline vgpg={mixture}/>,
					nicotine: <NicotineInline nicotine={mixture.nicotine}/>,
				}}
			</Preview>
		</Col>
	</Row>;
};
