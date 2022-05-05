import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {MixtureAromaInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureAromaInline";
import {MixtureBaseInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBaseInline";
import {MixtureBoosterInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureBoosterInline";
import {Preview} from "@leight-core/client";
import {Col, Row} from "antd";
import {FC} from "react";

export interface IMixturePreviewProps {
	mixture: IMixture;
}

export const MixturePreview: FC<IMixturePreviewProps> = ({mixture}) => {
	return <Row>
		<Col span={10}>
			<Preview translation={"lab.mixture.preview"} size={"small"} hideEmpty>
				{{
					pgvg: <PgVgInline pgvg={mixture}/>,
					nicotine: <NicotineInline nicotine={mixture.nicotine}/>,
					aroma: <MixtureAromaInline mixture={mixture}/>,
				}}
			</Preview>
		</Col>
		<Col span={14}>
			<Preview translation={"lab.mixture.preview"} size={"small"}>
				{{
					booster: mixture.booster && <MixtureBoosterInline mixture={mixture}/>,
					base: mixture.base && <MixtureBaseInline mixture={mixture}/>,
				}}
			</Preview>
		</Col>
	</Row>;
};
