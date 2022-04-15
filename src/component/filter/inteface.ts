import {IQuery, IQueryFilter} from "@leight-core/api";

export interface IFilterOption<TQuery extends IQuery> {
	name: string;
	filter: IQueryFilter<TQuery>;
}

export interface IFilterGroup<TQuery extends IQuery> {
	name: string;
	options: IFilterOption<TQuery>[];
	reset: IQueryFilter<TQuery>;
}
