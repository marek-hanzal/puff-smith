import {BaseIcon} from "@/puff-smith";
import {useBasesFilterContext} from "@/sdk/api/base/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IBaseListEmptyProps {
}

export const BaseListEmpty: FC<IBaseListEmptyProps> = () => {
	const filterContext = useBasesFilterContext();
	if (!filterContext.isEmpty()) {
		return <Template
			icon={<BaseIcon/>}
			label={"lab.base.list.filter.empty"}
		/>;
	}
	return <Template
		icon={<BaseIcon/>}
		label={"lab.base.list.empty"}
		extra={<>
			<Divider/>
			<ButtonLink
				ghost
				size={"large"}
				icon={<BaseIcon/>}
				href={"/market/base"}
				title={"lab.market.base.label"}
			/>
		</>}
	/>;
};