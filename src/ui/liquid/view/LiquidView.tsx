import {CodeInline}         from "@/puff-smith/component/inline/CodeInline";
import {ContentInline}      from "@/puff-smith/component/inline/ContentInline";
import {VgPgInline}         from "@/puff-smith/component/inline/VgPgInline";
import {ILiquid}            from "@/puff-smith/service/liquid/interface";
import {AromaContentInline} from "@/puff-smith/ui/aroma/inline/AromaContentInline";
import {AromaNameInline}    from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {LiquidSteeping}     from "@/puff-smith/ui/liquid/inline/LiquidSteeping";
import {
	Preview,
	Tags,
	Template,
	toLocalDate
}                           from "@leight-core/client";
import {Typography}         from "antd";
import {Space}              from "antd-mobile";
import {FC}                 from "react";

export interface ILiquidViewProps {
	liquid: ILiquid;
}

export const LiquidView: FC<ILiquidViewProps> = ({liquid}) => {
	return <Template
		title={<AromaNameInline aroma={liquid.aroma}/>}
		subTitle={<CodeInline code={liquid}/>}
	>
		<Preview
			name={"liquid"}
			translation={"lab.liquid.view"}
		>
			{[
				{
					name:  "info",
					items: {
						vgpg:         <VgPgInline vgpg={liquid.mixture.result.ratio}/>,
						steep:        <Space>
										  <LiquidSteeping liquid={liquid}/>
										  {toLocalDate(liquid.mixed)}
									  </Space>,
						aromaContent: <AromaContentInline aroma={liquid.aroma}/>,
						tastes:       liquid.aroma.tastes ? <Tags tags={liquid.aroma.tastes} translation={"common"}/> : undefined,
					},
				},
				{
					name:  "booster",
					items: {
						vgpg:           <VgPgInline vgpg={liquid.mixture.booster}/>,
						boosterContent: <ContentInline content={liquid.boosterAmount}/>,
						boosterCount:   liquid.boosterCount && liquid.boosterAmount ? <Typography.Text>
							{liquid.boosterCount}x<ContentInline content={liquid.boosterAmount / liquid.boosterCount}/>
						</Typography.Text> : null,
					},
				},
				{
					name:  "base",
					items: {
						vgpg:        <VgPgInline vgpg={liquid.mixture.base}/>,
						baseContent: <ContentInline content={liquid.baseAmount}/>,
					},
				},
			]}
		</Preview>
	</Template>;
};
