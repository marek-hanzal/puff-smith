/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */
 
import {ServiceCreate} from "@/puff-smith/service";
import {IMetric, IMetricCreate} from "@/puff-smith/service/metric/interface";
import {MetricService} from "@/puff-smith/service/metric/MetricService";
import {RequestEndpoint} from "@leight-core/server";
import {useQueryClient} from "react-query";
import {createPromise, createPromiseHook, createQueryHook, toLink} from "@leight-core/client";

export const MetricPushApiLink = "/api/metric/push";

export type IMetricPushQueryParams = undefined;

export const useMetricPushQuery = createQueryHook<IMetricCreate, IMetric, IMetricPushQueryParams>(MetricPushApiLink, "post");

export const toMetricPushLink = (queryParams?: IMetricPushQueryParams) => toLink(MetricPushApiLink, queryParams);
export const useMetricPushLink = () => toMetricPushLink;

export const useMetricPushPromise = createPromiseHook<IMetricCreate, IMetric, IMetricPushQueryParams>(MetricPushApiLink, "post");
export const MetricPushPromise = createPromise<IMetricCreate, IMetric, IMetricPushQueryParams>(MetricPushApiLink, "post");

export const useMetricPushQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MetricPushApiLink]);
}
