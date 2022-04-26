import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {useBoostersFilterContext} from "@/sdk/api/booster/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IBoosterListEmptyProps {
}

export const BoosterListEmpty: FC<IBoosterListEmptyProps> = () => {
	const filterContext = useBoostersFilterContext();
	if (!filterContext.isEmpty()) {
		return <Template
			icon={<BoosterIcon/>}
			label={"lab.booster.list.filter.empty"}
		/>;
	}
	return <Template
		icon={<BoosterIcon/>}
		label={"lab.booster.list.empty"}
		extra={<>
			<Divider/>
			<ButtonLink
				ghost
				size={"large"}
				icon={<BoosterIcon/>}
				href={"/market/booster"}
				title={"lab.market.booster.label"}
			/>
		</>}
	/>;
};
