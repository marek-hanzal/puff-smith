import {IFilter, IOrderBy, IQuery, ISortOrder} from "@leight-core/api";

export interface IJobCreate {
	userId?: string;
	params?: any;
}

export interface IJobFilter extends IFilter {
}

export interface IJobOrderBy extends IOrderBy {
	created?: ISortOrder;
}

export interface IJobQuery extends IQuery<IJobFilter, IJobOrderBy> {
}
