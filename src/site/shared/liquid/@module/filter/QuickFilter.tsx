import {ILiquidQuery} from "@/puff-smith/service/liquid";
import {useLiquidsFilterContext} from "@/sdk/api/liquid/query";
import {IQueryFilter} from "@leight-core/api";
import {Divider, Radio, Space, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IQuickFilterProps {
}

export const QuickFilter: FC<IQuickFilterProps> = () => {
	const {t} = useTranslation();
	const filterContext = useLiquidsFilterContext();
	const {filter} = filterContext;
	const filters: { name: string, filter: IQueryFilter<ILiquidQuery> }[] = [
		{
			name: "50/50",
			filter: {
				pg: {
					gte: 42,
					lte: 57,
				},
				vg: {
					gte: 42,
					lte: 57,
				}
			},
		},
		{
			name: "70/30",
			filter: {
				pg: {
					gte: 22,
					lte: 32,
				},
				vg: {
					gte: 67,
					lte: 74,
				}
			},
		},
		{
			name: "80/20",
			filter: {
				pg: {
					gte: 12,
					lte: 22,
				},
				vg: {
					gte: 77,
					lte: 84,
				}
			},
		},
	];
	return <Space size={0} split={<Divider type={"vertical"}/>}>
		<Space>
			<Typography.Text type={"secondary"}>{t("market.filter.pgvg.label")}</Typography.Text>
			<Radio.Group size={"large"} value={`filter-${JSON.stringify(filter || {})}`}>
				<Radio.Button
					value={`filter-${JSON.stringify({})}`}
					onClick={() => filterContext.mergeFilter({pg: undefined, vg: undefined})}
				>
					{t("market.filter.pgvg.off.label")}
				</Radio.Button>
				{filters.map(filter => <Radio.Button
					type={"text"}
					onClick={() => filterContext.mergeFilter(filter.filter)}
					value={`filter-${JSON.stringify(filter.filter)}`}
					key={`filter-${JSON.stringify(filter.filter)}`}
				>
					{t(`market.filter.${filter.name}.label`, filter.name)}
				</Radio.Button>)}
			</Radio.Group>
		</Space>
	</Space>;
};
