import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {Preview} from "@leight-core/leight/dist";
import {FC} from "react";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";
import {Space, Typography} from "antd";
import {BaseInline} from "@/puff-smith/site/lab/base";
import {BoosterInline} from "@/puff-smith/site/lab/booster";

export interface IMixturePreviewProps {
	mixture: MixtureDto
}

export const MixturePreview: FC<IMixturePreviewProps> = ({mixture}) => {
	return <Preview translation={'lab.mixture.preview'}>
		{{
			"name": <Space>
				<span>{mixture.name}</span>
				<Typography.Text type={'secondary'}>{mixture.code}</Typography.Text>
			</Space>,
			"liquid": <LiquidInline liquid={mixture.liquid}/>,
			"nicotine": mixture.nicotine + 'mg',
			"base": <BaseInline base={mixture.base}/>,
			"booster": <BoosterInline booster={mixture.booster}/>,
		}}
	</Preview>
}
