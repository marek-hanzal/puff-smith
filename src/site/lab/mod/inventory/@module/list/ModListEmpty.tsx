import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {useModsFilterContext} from "@/sdk/api/mod/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IModListEmptyProps {
}

export const ModListEmpty: FC<IModListEmptyProps> = () => {
	const filterContext = useModsFilterContext();
	if (!filterContext.isEmpty()) {
		return <Template
			icon={<ModIcon/>}
			label={"lab.mod.list.filter.empty"}
		/>;
	}
	return <Template
		icon={<ModIcon/>}
		label={"lab.mod.list.empty"}
		extra={<>
			<Divider/>
			<ButtonLink
				ghost
				size={"large"}
				icon={<ModIcon/>}
				href={"/market/mod"}
				title={"lab.market.mod.label"}
			/>
		</>}
	/>;
};
