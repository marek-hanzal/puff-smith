import {AtomizerIcon} from "@/puff-smith";
import {useAtomizersFilterContext} from "@/sdk/api/atomizer/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IAtomizerListEmptyProps {
}

export const AtomizerListEmpty: FC<IAtomizerListEmptyProps> = () => {
	const filterContext = useAtomizersFilterContext();
	if (!filterContext.isEmpty()) {
		return <Template
			icon={<AtomizerIcon/>}
			label={"lab.atomizer.list.filter.empty"}
		/>;
	}
	return <Template
		icon={<AtomizerIcon/>}
		label={"lab.atomizer.list.empty"}
		extra={<>
			<Divider/>
			<ButtonLink
				ghost
				size={"large"}
				icon={<AtomizerIcon/>}
				href={"/market/atomizer"}
				title={"lab.market.atomizer.label"}
			/>
		</>}
	/>;
};
