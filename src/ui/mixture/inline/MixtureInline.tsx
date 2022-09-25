import {ContentInline} from "@/puff-smith/component/inline/ContentInline";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {Translate} from "@leight-core/client";
import {Typography} from "antd";
import {Space} from "antd-mobile";
import {FC} from "react";

export interface IMixtureInlineProps {
	mixture: IMixture;
}

export const MixtureInline: FC<IMixtureInlineProps> = ({mixture}) => {
	return <Space
		direction={"vertical"}
		block
	>
		<Space>
			<Typography.Text type={"secondary"}>
				[Liquid]
			</Typography.Text>
			<VgPgInline vgpg={mixture.result.ratio}/>
			{mixture.result.nicotine > 0 && <NicotineInline nicotine={mixture.result.nicotine}/>}
		</Space>
		{mixture.booster ? <Space>
			<Typography.Text type={"secondary"}>
				[Booster]
			</Typography.Text>
			<VgPgInline vgpg={mixture.booster}/>
			<NicotineInline nicotine={mixture.booster.nicotine}/>
			<ContentInline content={mixture.booster.volume}/>
		</Space> : <Translate namespace={"shared.mixture.info"} text={"no-booster"}/>}
		{mixture.base ? <Space>
			<Typography.Text type={"secondary"}>
				[Base]
			</Typography.Text>
			<VgPgInline vgpg={mixture.base}/>
			<ContentInline content={mixture.base.volume}/>
		</Space> : <Translate namespace={"shared.mixture.info"} text={"no-base"}/>}
	</Space>;
};
