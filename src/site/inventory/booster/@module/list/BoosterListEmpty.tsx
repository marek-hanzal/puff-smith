import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {useBoosterFilterContext} from "@/sdk/api/booster/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IBoosterListEmptyProps {
}

export const BoosterListEmpty: FC<IBoosterListEmptyProps> = () => {
	const filterContext = useBoosterFilterContext();
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
				icon={<BoosterIcon/>}
				href={"/market/booster"}
				label={"lab.market.booster.label"}
			/>
		</>}
	/>;
};
