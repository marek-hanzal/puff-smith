import {ICellQuery} from "@/puff-smith/service/cell";
import {useCellsFilterContext} from "@/sdk/api/cell/query";
import {IQueryFilter} from "@leight-core/api";
import {Button, Divider, Radio, Space, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IQuickFilterProps {
	toFilter?(filter: IQueryFilter<ICellQuery>): any;

	fromFilter?(filter: any): IQueryFilter<ICellQuery>;
}

export const QuickFilter: FC<IQuickFilterProps> = ({toFilter = filter => filter, fromFilter = filter => filter}) => {
	const {t} = useTranslation();
	const filterContext = useCellsFilterContext();
	const filter: IQueryFilter<ICellQuery> = fromFilter(filterContext.filter);
	const types: string[] = [
		"18350",
		"18650",
		"21700",
	];
	return <Space size={0} split={<Divider type={"vertical"}/>}>
		<Space>
			<Typography.Text type={"secondary"}>{t("market.filter.type.label")}</Typography.Text>
			<Radio.Group size={"large"} value={`type-${filter?.type?.code}`}>
				<Radio.Button
					value={"type-undefined"}
					onClick={() => filterContext.mergeFilter(toFilter({type: undefined}))}
				>
					{t("market.filter.cell.off.label")}
				</Radio.Button>
				{types.map(code => <Radio.Button
					type={"text"}
					onClick={() => filterContext.mergeFilter(toFilter({
						type: {
							code,
						}
					}))}
					value={`type-${code}`}
					key={`type-${code}`}
				>
					{code}
				</Radio.Button>)}
			</Radio.Group>
		</Space>
		<Button
			type={"link"}
			size={"large"}
			onClick={() => filterContext.setFilter()}
		>
			{t("common.filter.clear")}
		</Button>
	</Space>;
};
