/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMetric, IMetricCreate} from "@/puff-smith/service/metric";
import {createPromise, createPromiseHook, createQueryHook, toLink} from "@leight-core/client";
import {useQueryClient} from "react-query";

export const MetricPushApiLink = "/api/metric/push";

export type IMetricPushQueryParams = undefined;

export const useMetricPushQuery = createQueryHook<Omit<IMetricCreate, "userId">, IMetric, IMetricPushQueryParams>(MetricPushApiLink, "post");

export const toMetricPushLink = (queryParams?: IMetricPushQueryParams) => toLink(MetricPushApiLink, queryParams);
export const useMetricPushLink = () => toMetricPushLink;

export const useMetricPushPromise = createPromiseHook<Omit<IMetricCreate, "userId">, IMetric, IMetricPushQueryParams>(MetricPushApiLink, "post");
export const MetricPushPromise = createPromise<Omit<IMetricCreate, "userId">, IMetric, IMetricPushQueryParams>(MetricPushApiLink, "post");

export const useMetricPushQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MetricPushApiLink]);
}
