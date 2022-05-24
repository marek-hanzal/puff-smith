import {IQuery, ISource} from "@leight-core/api";
import {Metric, Prisma} from "@prisma/client";

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
	userId?: string | null;
}

export interface IMetricQuery extends IQuery<Prisma.MetricWhereInput, Prisma.MetricOrderByWithRelationInput> {
}

export type IMetricEntity = Metric;

export interface IMetricSource extends ISource<IMetricCreate, IMetricEntity, IMetric, IMetricQuery> {
}
