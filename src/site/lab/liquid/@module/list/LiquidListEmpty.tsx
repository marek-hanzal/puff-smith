import {LiquidIcon} from "@/puff-smith";
import {LiquidCreateButton} from "@/puff-smith/site/lab/liquid";
import {useLiquidsFilterContext} from "@/sdk/api/liquid/query";
import {Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ILiquidListEmptyProps {
}

export const LiquidListEmpty: FC<ILiquidListEmptyProps> = () => {
	const filterContext = useLiquidsFilterContext();
	if (filterContext.filter) {
		return <Template
			icon={<LiquidIcon/>}
			label={"lab.liquid.list.filter.empty"}
		/>;
	}
	return <Template
		icon={<LiquidIcon/>}
		label={"lab.liquid.list.empty"}
		extra={<>
			<Divider/>
			<LiquidCreateButton/>
		</>}
	/>;
};
