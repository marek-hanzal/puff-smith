import {IFilterGroup} from "@/puff-smith/component";
import {IQuery} from "@leight-core/api";
import {useFilterContext} from "@leight-core/client";
import {Divider, Radio, Space, Typography} from "antd";
import {PropsWithChildren} from "react";
import {useTranslation} from "react-i18next";

export interface IInlineFilterProps<TQuery extends IQuery<any, any>> {
	filters: IFilterGroup<TQuery>[];
	translation: string;
}

export const InlineFilter = <TQuery extends IQuery<any, any>>({filters, translation}: PropsWithChildren<IInlineFilterProps<TQuery>>) => {
	const {t} = useTranslation();
	const filterContext = useFilterContext();
	const {filter} = filterContext;
	return <Space size={0} split={<Divider type={"vertical"}/>}>
		{filters.map(group => <Space key={`filter-group-${group.name}`}>
			<Typography.Text type={"secondary"}>{t(`${translation}.filter.${group.name}.label`)}</Typography.Text>
			<Radio.Group size={"large"} value={`filter-${group.name}-${JSON.stringify(filter || {})}`}>
				<Radio.Button
					value={`filter-${group.name}-${JSON.stringify({})}`}
					onClick={() => filterContext.mergeFilter(group.reset)}
				>
					{t(`${translation}.filter.${group.name}.reset`)}
				</Radio.Button>
				{group.options.map(filter => <Radio.Button
					type={"text"}
					onClick={() => filterContext.mergeFilter(filter.filter)}
					value={`filter-${group.name}-${JSON.stringify(filter.filter)}`}
					key={`filter-${group.name}-${JSON.stringify(filter.filter)}`}
				>
					{t(`${translation}.filter.${group.name}.${filter.name}.label`, filter.name)}
				</Radio.Button>)}
			</Radio.Group>
		</Space>)}
	</Space>;
};
