/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {FetchEndpoint} from "@leight-core/server";
import {register} from "prom-client";
import {FC, createContext} from "react";
import {IEntityContext, IQueryParams} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, createPromise, createPromiseHook, createQueryHook, toLink, useContext, useOptionalContext} from "@leight-core/client";

export const MetricPullApiLink = "/api/metric/pull";

export type IMetricPullQueryParams = undefined;

export const MetricPullContext = createContext(null as unknown as IEntityContext<string>);

export const useMetricPullContext = (): IEntityContext<string> => useContext(MetricPullContext, "MetricPullContext");
export const useOptionalMetricPullContext = () => useOptionalContext<IEntityContext<string>>(MetricPullContext as any);

export interface IMetricPullProvider extends IEntityProviderProps<string> {
}

export const MetricPullProvider: FC<IMetricPullProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <MetricPullContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useMetricPullQuery = createQueryHook<void, string, IMetricPullQueryParams>(MetricPullApiLink, "get");

export const useMetricPullQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MetricPullApiLink]);
}

export const toMetricPullLink = (queryParams?: IMetricPullQueryParams) => toLink(MetricPullApiLink, queryParams);
export const useMetricPullLink = () => toMetricPullLink;

export const useMetricPullPromise = createPromiseHook<void, string, IMetricPullQueryParams>(MetricPullApiLink, "get");
export const MetricPullPromise = createPromise<void, string, IMetricPullQueryParams>(MetricPullApiLink, "get");

export interface IFetchMetricPullProps extends Partial<IQueryProps<void, string, IMetricPullQueryParams>> {
}

export const FetchMetricPull: FC<IFetchMetricPullProps> = props => <Query<void, string, IMetricPullQueryParams>
	useQuery={useMetricPullQuery}
	request={undefined}
	context={useOptionalMetricPullContext()}
	{...props}
/>;
