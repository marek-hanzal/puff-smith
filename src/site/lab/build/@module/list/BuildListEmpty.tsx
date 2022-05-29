import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {useBuildFilterContext} from "@/sdk/api/lab/build/query";
import {Template} from "@leight-core/client";
import {FC} from "react";

export interface IBuildListEmptyProps {
}

export const BuildListEmpty: FC<IBuildListEmptyProps> = () => {
	const filterContext = useBuildFilterContext();
	if (filterContext.isEmpty()) {
		return <Template
			icon={<BuildIcon/>}
			label={"lab.build.list.empty"}
		/>;
	}
	return <Template
		icon={<BuildIcon/>}
		label={"lab.build.list.filter.empty"}
	/>;
};
