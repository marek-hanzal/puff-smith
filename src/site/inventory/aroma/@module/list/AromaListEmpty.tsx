import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {useAromaFilterContext} from "@/sdk/api/aroma/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IAromaListEmptyProps {
}

export const AromaListEmpty: FC<IAromaListEmptyProps> = () => {
	const filterContext = useAromaFilterContext();
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
				icon={<LiquidIcon/>}
				href={"/market/aroma"}
				label={"lab.market.aroma.label"}
			/>
		</>}
	/>;
};
