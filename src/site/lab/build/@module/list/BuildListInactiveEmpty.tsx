import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {useBuildFilterContext} from "@/sdk/api/lab/build/query";
import {Template} from "@leight-core/client";
import {FC} from "react";

export interface IBuildListInactiveEmptyProps {
}

export const BuildListInactiveEmpty: FC<IBuildListInactiveEmptyProps> = () => {
	const filterContext = useBuildFilterContext();
	if (filterContext.isEmpty()) {
		return <Template
			icon={<BuildIcon/>}
			label={"lab.build.list.inactive.empty"}
		/>;
	}
	return <Template
		icon={<BuildIcon/>}
		label={"lab.build.list.filter.inactive.empty"}
	/>;
};
