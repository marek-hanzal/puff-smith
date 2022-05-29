import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {useModFilterContext} from "@/sdk/api/mod/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IModListEmptyProps {
}

export const ModListEmpty: FC<IModListEmptyProps> = () => {
	const filterContext = useModFilterContext();
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
				icon={<ModIcon/>}
				href={"/to/market/mod"}
				label={"lab.market.mod.label"}
			/>
		</>}
	/>;
};
