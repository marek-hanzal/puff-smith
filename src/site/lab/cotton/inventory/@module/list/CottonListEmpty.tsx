import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {useCottonFilterContext} from "@/sdk/api/cotton/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ICottonListEmptyProps {
}

export const CottonListEmpty: FC<ICottonListEmptyProps> = () => {
	const filterContext = useCottonFilterContext();
	if (!filterContext.isEmpty()) {
		return <Template
			icon={<CottonIcon/>}
			label={"lab.cotton.list.filter.empty"}
		/>;
	}
	return <Template
		icon={<CottonIcon/>}
		label={"lab.cotton.list.empty"}
		extra={<>
			<Divider/>
			<ButtonLink
				ghost
				size={"large"}
				icon={<CottonIcon/>}
				href={"/market/cotton"}
				title={"lab.market.cotton.label"}
			/>
		</>}
	/>;
};
