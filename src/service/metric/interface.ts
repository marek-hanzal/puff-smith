import {IServiceCreate} from "@/puff-smith/service";
import {IUser} from "@/puff-smith/service/user/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Metric, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IMetricCreate {
	name: string;
	reference: string;
	start: number;
	value: number;
	label?: string;
}

export interface IMetric {
	id: string;
	reference: string;
	name: string;
	start: number;
	value: number;
	label?: string | null;
	user?: IUser | null;
	userId?: string | null;
}

export interface IMetricQuery extends IQuery<Prisma.MetricWhereInput, Prisma.MetricOrderByWithRelationInput> {
}

export interface IMetricFetchProps {
	metric: IMetric;
}

export interface IMetricFetchQuery extends ParsedUrlQuery {
	metricId: string;
}

export interface IMetricServiceCreate extends IServiceCreate {
}

export interface IMetricService extends IRepository<IMetricCreate, Metric, IMetric, IMetricQuery, IMetricFetchProps, IMetricFetchQuery> {
}
