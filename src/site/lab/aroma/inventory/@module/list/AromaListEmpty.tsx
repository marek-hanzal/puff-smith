import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {useAromasFilterContext} from "@/sdk/api/aroma/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IAromaListEmptyProps {
}

export const AromaListEmpty: FC<IAromaListEmptyProps> = () => {
	const filterContext = useAromasFilterContext();
	if (!filterContext.isEmpty()) {
		return <Template
			icon={<LiquidIcon/>}
			label={"lab.aroma.list.filter.empty"}
		/>;
	}
	return <Template
		icon={<LiquidIcon/>}
		label={"lab.aroma.list.empty"}
		extra={<>
			<Divider/>
			<ButtonLink
				ghost
				size={"large"}
				icon={<LiquidIcon/>}
				href={"/market/aroma"}
				title={"lab.market.aroma.label"}
			/>
		</>}
	/>;
};
