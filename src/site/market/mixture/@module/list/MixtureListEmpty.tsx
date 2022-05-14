import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {Template, useFilterContext} from "@leight-core/client";
import {FC} from "react";

export interface IMixtureListEmptyProps {
}

export const MixtureListEmpty: FC<IMixtureListEmptyProps> = () => {
	const filterContext = useFilterContext();
	return filterContext.isEmpty() ?
		<Template
			icon={<MixtureIcon/>}
			label={"lab.mixture.job"}
		/> :
		<Template
			icon={<MixtureIcon/>}
			label={"lab.mixture.filter.empty"}
		/>;
};
