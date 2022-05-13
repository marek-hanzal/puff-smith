import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {useLiquidFilterContext} from "@/sdk/api/liquid/query";
import {Template} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidListEmptyProps {
}

export const LiquidListEmpty: FC<ILiquidListEmptyProps> = () => {
	const filterContext = useLiquidFilterContext();
	if (filterContext.isEmpty()) {
		return <Template
			icon={<LiquidIcon/>}
			label={"lab.liquid.list.empty"}
		/>;
	}
	return <Template
		icon={<LiquidIcon/>}
		label={"lab.liquid.list.filter.empty"}
	/>;
};
