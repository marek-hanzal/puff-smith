/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModInventory, IModInventoryQuery} from "@/puff-smith/service/mod";
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

export const ModsInventoryApiLink = "/api/mod/inventory/query";

export type IModsInventoryQueryParams = undefined;

export const useModsInventoryQuery = createQueryHook<IModInventoryQuery, IQueryResult<IModInventory>, IModsInventoryQueryParams>(ModsInventoryApiLink, "post");

export const useModsInventorySource = () => useSourceContext<IModInventory>()

export interface IModsInventorySourceContext extends ISourceContext<IModInventory> {
}

export interface IModsInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IModInventory>> {
}

export const ModsInventorySourceConsumer: FC<IModsInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModsInventorySourceProps extends Partial<ISourceProviderProps<IModInventory>> {
}

export const ModsInventorySource: FC<IModsInventorySourceProps> = props => {
	return <SourceProvider<IModInventory>
		useQuery={useModsInventoryQuery}
		{...props}
	/>;
}

export const useModsInventoryLink = (): ((queryParams?: IModsInventoryQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(ModsInventoryApiLink, queryParams);
}

export const useModsInventoryPromise = createPromiseHook<IModInventoryQuery, IModInventory, IModsInventoryQueryParams>(ModsInventoryApiLink, "post");

export interface IModsInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IModInventoryQuery>>> {
}

export const ModsInventoryFilterProvider: FC<IModsInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IModInventoryQuery>> {...props}/>;

export const useModsInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IModInventoryQuery>>()
export const useModsInventoryFilterContext = () => useFilterContext<IQueryFilter<IModInventoryQuery>>()

export interface IModsInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IModInventoryQuery>> {
}

export const ModsInventorySourceFilter: FC<IModsInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.ModsInventory'}
/>;

export interface IModsInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IModInventoryQuery>>> {
}

export const ModsInventoryOrderByProvider: FC<IModsInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IModInventoryQuery>> {...props}/>;

export const useModsInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IModInventoryQuery>>()
export const useModsInventoryOrderByContext = () => useOrderByContext<IQueryFilter<IModInventoryQuery>>()

export interface IModsInventoryListSourceProps extends Partial<IListProps<IModInventory>> {
	sourceProps?: Partial<IModsInventorySourceProps>;
}

export interface IModsInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IModInventoryQuery>, IQueryOrderBy<IModInventoryQuery>, IModsInventoryQueryParams>> {
}

export const ModsInventorySourceControlProvider: FC<IModsInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IModInventoryQuery>, IQueryOrderBy<IModInventoryQuery>> {...props}/>;

export const ModsInventoryListSource: FC<IModsInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <ModsInventorySource
		{...sourceProps}
	>
		<List<IModInventory>
			{...props}
		/>
	</ModsInventorySource>
}

export interface IModsInventorySourceSelectProps extends IQuerySourceSelectProps<IModInventory> {
	toOption: IToOptionMapper<IModInventory>;
	sourceProps?: IModsInventorySourceProps;
}

export const ModsInventorySourceSelect: FC<IModsInventorySourceSelectProps> = ({sourceProps, ...props}) => {
	return <ModsInventorySource {...sourceProps}>
		<QuerySourceSelect<IModInventory> {...props}/>
	</ModsInventorySource>;
};

export const useModsInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModsInventoryApiLink]);
}
