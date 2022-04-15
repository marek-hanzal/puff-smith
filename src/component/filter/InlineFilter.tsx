import {IFilterGroup} from "@/puff-smith/component";
import {IQuery, IQueryFilter} from "@leight-core/api";
import {useFilterContext} from "@leight-core/client";
import {Button, Divider, Radio, Space, Typography} from "antd";
import {PropsWithChildren} from "react";
import {useTranslation} from "react-i18next";

export interface IInlineFilterProps<TQuery extends IQuery<any, any>> {
	filters: IFilterGroup<TQuery>[];
	translation: string;

	toFilter?(filter: IQueryFilter<TQuery>): any;

	fromFilter?(filter: any): IQueryFilter<TQuery>;
}

export const InlineFilter = <TQuery extends IQuery<any, any>>(
	{
		filters,
		translation,
		toFilter = filter => filter,
		fromFilter = filter => filter,
	}: PropsWithChildren<IInlineFilterProps<TQuery>>) => {
	const {t} = useTranslation();
	const filterContext = useFilterContext();
	const filter = fromFilter(filterContext.filter);
	return <Space size={0} split={<Divider type={"vertical"}/>}>
		{filters.map(group => <Space key={`filter-group-${group.name}`}>
			<Typography.Text type={"secondary"}>{t(`${translation}.filter.${group.name}.label`)}</Typography.Text>
			<Radio.Group size={"large"} value={`filter-${group.name}-${JSON.stringify(filter || {})}`}>
				<Radio.Button
					value={`filter-${group.name}-${JSON.stringify({})}`}
					onClick={() => filterContext.mergeFilter(toFilter(group.reset))}
				>
					{t(`${translation}.filter.${group.name}.reset`)}
				</Radio.Button>
				{group.options.map(filter => <Radio.Button
					type={"text"}
					onClick={() => filterContext.mergeFilter(toFilter(filter.filter))}
					value={`filter-${group.name}-${JSON.stringify(filter.filter)}`}
					key={`filter-${group.name}-${JSON.stringify(filter.filter)}`}
				>
					{t(`${translation}.filter.${group.name}.${filter.name}.label`, filter.name)}
				</Radio.Button>)}
			</Radio.Group>
		</Space>)}
		<Button
			type={"link"}
			size={"large"}
			onClick={() => filterContext.setFilter()}
		>
			{t("common.filter.clear")}
		</Button>
	</Space>;
};
