import {BaseIcon}       from "@/puff-smith/component/icon/BaseIcon";
import {BoosterIcon}    from "@/puff-smith/component/icon/BoosterIcon";
import {LiquidIcon}     from "@/puff-smith/component/icon/LiquidIcon";
import {ContentInline}  from "@/puff-smith/component/inline/ContentInline";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline}     from "@/puff-smith/component/inline/VgPgInline";
import {IMixture}       from "@/puff-smith/service/mixture/interface";
import {Translate}      from "@leight-core/viv";
import {Typography}     from "antd";
import {Space}          from "antd-mobile";
import {FC}             from "react";

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
				<LiquidIcon/>
			</Typography.Text>
			<VgPgInline vgpg={mixture.result.ratio}/>
			{mixture.result.nicotine > 0 && <NicotineInline nicotine={mixture.result.nicotine}/>}
		</Space>
		{mixture.booster ? <Space>
			<Typography.Text type={"secondary"}>
				<BoosterIcon/>
			</Typography.Text>
			<VgPgInline vgpg={mixture.booster}/>
			<NicotineInline nicotine={mixture.booster.nicotine}/>
			<ContentInline content={mixture.booster.volume}/>
			{mixture.booster.count ? <Typography.Text>
				({mixture.booster.count}x<ContentInline content={mixture.booster.volume / mixture.booster.count}/>)
			</Typography.Text> : null}
		</Space> : <Typography.Text type={"secondary"}>
			<Translate namespace={"shared.mixture.info"} text={"no-booster"}/>
		</Typography.Text>}
		{mixture.base ? <Space>
			<Typography.Text type={"secondary"}>
				<BaseIcon/>
			</Typography.Text>
			<VgPgInline vgpg={mixture.base}/>
			<ContentInline content={mixture.base.volume}/>
		</Space> : <Typography.Text type={"secondary"}>
			<Translate namespace={"shared.mixture.info"} text={"no-base"}/>
		</Typography.Text>}
	</Space>;
};
