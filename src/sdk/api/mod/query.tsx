/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMod, IModQuery} from "@/puff-smith/service/mod";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
import {IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {
	createPromiseHook,
	createQueryHook,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IListProps,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	useFilterContext,
	useLinkContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOrderByContext,
	useSourceContext
} from "@leight-core/client";

export const ModsApiLink = "/api/mod/query";

export type IModsQueryParams = undefined;

export const useModsQuery = createQueryHook<IModQuery, IQueryResult<IMod>, IModsQueryParams>(ModsApiLink, "post");

export const useModsSource = () => useSourceContext<IMod>()

export interface IModsSourceContext extends ISourceContext<IMod> {
}

export interface IModsSourceConsumerProps extends ConsumerProps<ISourceContext<IMod>> {
}

export const ModsSourceConsumer: FC<IModsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModsSourceProps extends Partial<ISourceProviderProps<IMod>> {
}

export const ModsSource: FC<IModsSourceProps> = props => {
	return <SourceProvider<IMod>
		name={"Mods"}
		useQuery={useModsQuery}
		{...props}
	/>;
}

export const useModsLink = (): ((queryParams?: IModsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(ModsApiLink, queryParams);
}

export const useModsPromise = createPromiseHook<IModQuery, IMod, IModsQueryParams>(ModsApiLink, "post");

export interface IModsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IModQuery>>> {
}

export const ModsFilterProvider: FC<IModsFilterProviderProps> = props => <FilterProvider<IQueryFilter<IModQuery>> name={"Mods"} {...props}/>;

export const useModsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IModQuery>>()
export const useModsFilterContext = () => useFilterContext<IQueryFilter<IModQuery>>()

export interface IModsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IModQuery>> {
}

export const ModsSourceFilter: FC<IModsSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Mods'}
/>;

export interface IModsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IModQuery>>> {
}

export const ModsOrderByProvider: FC<IModsOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IModQuery>> name={"Mods"} {...props}/>;

export const useModsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IModQuery>>()
export const useModsOrderByContext = () => useOrderByContext<IQueryFilter<IModQuery>>()

export interface IModsListSourceProps extends Partial<IListProps<IMod>> {
	sourceProps?: Partial<IModsSourceProps>;
}

export interface IModsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IModQuery>, IQueryOrderBy<IModQuery>, IModsQueryParams>> {
}

export const ModsSourceControlProvider: FC<IModsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IModQuery>, IQueryOrderBy<IModQuery>> name={"Mods"} {...props}/>;

export const ModsListSource: FC<IModsListSourceProps> = ({sourceProps, ...props}) => {
	return <ModsSource
		{...sourceProps}
	>
		<List<IMod>
			{...props}
		/>
	</ModsSource>
}

export interface IModsSourceSelectProps extends IQuerySourceSelectProps<IMod> {
	toOption: IToOptionMapper<IMod>;
	sourceProps?: IModsSourceProps;
}

export const ModsSourceSelect: FC<IModsSourceSelectProps> = ({sourceProps, ...props}) => {
	return <ModsSource {...sourceProps}>
		<QuerySourceSelect<IMod> {...props}/>
	</ModsSource>;
};

export const useModsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModsApiLink]);
}
