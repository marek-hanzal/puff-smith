import {CellIcon} from "@/puff-smith";
import {useCellsFilterContext} from "@/sdk/api/cell/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ICellListEmptyProps {
}

export const CellListEmpty: FC<ICellListEmptyProps> = () => {
	const filterContext = useCellsFilterContext();
	if (!filterContext.isEmpty()) {
		return <Template
			icon={<CellIcon/>}
			label={"lab.cell.list.filter.empty"}
		/>;
	}
	return <Template
		icon={<CellIcon/>}
		label={"lab.cell.list.empty"}
		extra={<>
			<Divider/>
			<ButtonLink
				ghost
				size={"large"}
				icon={<CellIcon/>}
				href={"/market/cell"}
				title={"lab.market.cell.label"}
			/>
		</>}
	/>;
};
