import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {useAtomizerFilterContext} from "@/sdk/api/atomizer/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IAtomizerListEmptyProps {
}

export const AtomizerListEmpty: FC<IAtomizerListEmptyProps> = () => {
	const filterContext = useAtomizerFilterContext();
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
				icon={<AtomizerIcon/>}
				href={"/to/market/atomizer"}
				label={"lab.market.atomizer.label"}
			/>
		</>}
	/>;
};
