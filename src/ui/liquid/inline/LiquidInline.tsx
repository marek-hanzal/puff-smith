import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {LiquidSteeping} from "@/puff-smith/ui/liquid/inline/LiquidSteeping";
import {Space} from "antd-mobile";
import {FC} from "react";

export interface ILiquidInlineProps {
	liquid: ILiquid;
}

export const LiquidInline: FC<ILiquidInlineProps> = ({liquid}) => {
	return <Space direction={"vertical"}>
		<AromaNameInline aroma={liquid.aroma}/>
		<Space>
			<VgPgInline vgpg={liquid}/>
			<LiquidSteeping liquid={liquid}/>
		</Space>
	</Space>;
};
