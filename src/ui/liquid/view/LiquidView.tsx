import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {Preview, Tags, Template} from "@leight-core/client";
import dayjs from "dayjs";
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
						tastes: liquid.aroma.tastes ? <Tags tags={liquid.aroma.tastes} translation={"common"}/> : undefined,
						vgpg: <VgPgInline vgpg={liquid.mixture.result.ratio}/>,
						steep: liquid.aroma.steep ? dayjs.duration(liquid.aroma.steep, "days").humanize() : undefined,
					},
				},
			]}
		</Preview>
	</Template>;
};
