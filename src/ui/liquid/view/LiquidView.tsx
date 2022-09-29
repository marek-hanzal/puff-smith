import {ContentInline} from "@/puff-smith/component/inline/ContentInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {LiquidSteeping} from "@/puff-smith/ui/liquid/inline/LiquidSteeping";
import {Preview, Tags, Template} from "@leight-core/client";
import {Typography} from "antd";
import {FC} from "react";

export interface ILiquidViewProps {
	liquid: ILiquid;
}

export const LiquidView: FC<ILiquidViewProps> = ({liquid}) => {
	return <Template
		title={liquid.aroma.name}
		subTitle={liquid.aroma.vendor.name}
	>
		<Preview
			name={"liquid"}
			translation={"lab.liquid.view"}
		>
			{[
				{
					name: "info",
					items: {
						vgpg: <VgPgInline vgpg={liquid.mixture.result.ratio}/>,
						steep: <LiquidSteeping liquid={liquid}/>,
						tastes: liquid.aroma.tastes ? <Tags tags={liquid.aroma.tastes} translation={"common"}/> : undefined,
					},
				},
				{
					name: "base",
					items: {
						vgpg: <VgPgInline vgpg={liquid.mixture.base}/>,
						baseContent: <ContentInline content={liquid.baseAmount}/>,
					},
				},
				{
					name: "booster",
					items: {
						vgpg: <VgPgInline vgpg={liquid.mixture.booster}/>,
						boosterContent: <ContentInline content={liquid.boosterAmount}/>,
						boosterCount: liquid.boosterCount && liquid.boosterAmount ? <Typography.Text>
							{liquid.boosterCount}x<ContentInline content={liquid.boosterAmount / liquid.boosterCount}/>
						</Typography.Text> : null,
					},
				},
			]}
		</Preview>
	</Template>;
};
