import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {useCellFilterContext} from "@/sdk/api/cell/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ICellListEmptyProps {
}

export const CellListEmpty: FC<ICellListEmptyProps> = () => {
	const filterContext = useCellFilterContext();
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
				icon={<CellIcon/>}
				href={"/to/market/cell"}
				label={"lab.market.cell.label"}
			/>
		</>}
	/>;
};
