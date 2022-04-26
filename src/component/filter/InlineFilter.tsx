import {IFilterGroup} from "@/puff-smith/component/filter/inteface";
import {IQuery, IQueryFilter} from "@leight-core/api";
import {useFilterContext} from "@leight-core/client";
import {Button, Divider, Radio, Space, SpaceProps, Typography} from "antd";
import {PropsWithChildren, useState} from "react";
import {useTranslation} from "react-i18next";

export interface IInlineFilterProps<TQuery extends IQuery<any, any>> extends Partial<SpaceProps> {
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
		...props
	}: PropsWithChildren<IInlineFilterProps<TQuery>>) => {
	const {t} = useTranslation();
	const filterContext = useFilterContext();
	const [state, setState] = useState<{ [index in string]: string | undefined } | undefined>(fromFilter(filterContext.filter));
	return <Space size={0} split={<Divider type={"vertical"}/>} {...props}>
		{filters.map(group => <Space key={`filter-group-${group.name}`}>
			<Typography.Text type={"secondary"}>{t(`${translation}.filter.${group.name}.label`)}</Typography.Text>
			<Radio.Group size={"large"} value={state?.[group.name]}>
				<Radio.Button
					value={undefined}
					onClick={() => {
						filterContext.mergeFilter(toFilter(group.reset));
						setState(state => ({...state, [group.name]: undefined}));
					}}
				>
					{t(`${translation}.filter.${group.name}.reset`)}
				</Radio.Button>
				{group.options.map(filter => <Radio.Button
					type={"text"}
					onClick={() => {
						filterContext.mergeFilter(toFilter(filter.filter));
						setState(state => ({...state, [group.name]: filter.name}));
					}}
					value={filter.name}
					key={`filter-${group.name}-${filter.name}`}
				>
					{group.render?.(t(`${translation}.filter.${group.name}.${filter.name}.label`, filter.name)) || t(`${translation}.filter.${group.name}.${filter.name}.label`, filter.name)}
				</Radio.Button>)}
			</Radio.Group>
		</Space>)}
		<Button
			type={"link"}
			size={"large"}
			onClick={() => {
				filterContext.setFilter();
				setState(undefined);
			}}
		>
			{t("common.filter.clear")}
		</Button>
	</Space>;
};
