/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IEntityContext} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {createContext, FC} from "react";
import {useQueryClient} from "react-query";

export const MetricPullApiLink = "/api/metric/pull";

export type IMetricPullQueryParams = undefined;

export const MetricPullContext = createContext(null as unknown as IEntityContext<any>);

export const useMetricPullContext = (): IEntityContext<any> => useContext(MetricPullContext, "MetricPullContext");
export const useOptionalMetricPullContext = () => useOptionalContext<IEntityContext<any>>(MetricPullContext as any);

export interface IMetricPullProvider extends IEntityProviderProps<any> {
}

export const MetricPullProvider: FC<IMetricPullProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <MetricPullContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useMetricPullQuery = createQueryHook<void, any, IMetricPullQueryParams>(MetricPullApiLink, "get");

export const useMetricPullQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MetricPullApiLink]);
};

export const toMetricPullLink = (queryParams?: IMetricPullQueryParams) => toLink(MetricPullApiLink, queryParams);
export const useMetricPullLink = () => toMetricPullLink;

export const useMetricPullPromise = createPromiseHook<void, any, IMetricPullQueryParams>(MetricPullApiLink, "get");
export const MetricPullPromise = createPromise<void, any, IMetricPullQueryParams>(MetricPullApiLink, "get");

export interface IFetchMetricPullProps extends Partial<IQueryProps<void, any, IMetricPullQueryParams>> {
}

export const FetchMetricPull: FC<IFetchMetricPullProps> = props => <Query<void, any, IMetricPullQueryParams>
	useQuery={useMetricPullQuery}
	request={undefined}
	context={useOptionalMetricPullContext()}
	{...props}
/>;
