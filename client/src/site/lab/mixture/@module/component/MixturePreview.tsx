import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {Preview} from "@leight-core/leight";
import {FC} from "react";
import {LiquidInline} from "@/puff-smith/site/lab/liquid";
import {Space, Typography} from "antd";
import {BaseInline} from "@/puff-smith/site/lab/base";
import {BoosterInline} from "@/puff-smith/site/lab/booster";
import {MixtureAge, MixtureSteeping} from "@/puff-smith/site/lab/mixture";
import {toLocalDate} from "@leight-core/leight/dist";

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
			"base": <BaseInline base={mixture.base}/>,
			"booster": <BoosterInline booster={mixture.booster}/>,
			"pgvg": <span><span>{mixture.pg}</span>/<span>{mixture.vg}</span></span>,
			"nicotine": mixture.nicotine + 'mg',
			"age": <MixtureAge mixture={mixture}/>,
			"steep": <MixtureSteeping mixture={mixture}/>,
			"mixed": toLocalDate(mixture.mixed),
			"expires": toLocalDate(mixture.expires),
			"volume": mixture.volume + 'ml',
		}}
	</Preview>
}
