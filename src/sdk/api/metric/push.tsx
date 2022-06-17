/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMetricCreate} from "@/puff-smith/service/metric/interface";
import {createPromise, createPromiseHook, createQueryHook, toLink} from "@leight-core/client";
import {useQueryClient} from "react-query";

export const MetricPushApiLink = "/api/metric/push";

export type IMetricPushQueryParams = any;

export const useMetricPushQuery = createQueryHook<IMetricCreate, boolean, IMetricPushQueryParams>(MetricPushApiLink, "post");

export const toMetricPushLink = (queryParams?: IMetricPushQueryParams) => toLink(MetricPushApiLink, queryParams);
export const useMetricPushLink = () => toMetricPushLink;

export const useMetricPushPromise = createPromiseHook<IMetricCreate, boolean, IMetricPushQueryParams>(MetricPushApiLink, "post");
export const MetricPushPromise = createPromise<IMetricCreate, boolean, IMetricPushQueryParams>(MetricPushApiLink, "post");

export const useMetricPushQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MetricPushApiLink]);
}
