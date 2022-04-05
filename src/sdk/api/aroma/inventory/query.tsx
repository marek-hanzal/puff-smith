/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventory, IAromaInventoryQuery} from "@/puff-smith/service/aroma";
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
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";

export const AromasInventoryApiLink = "/api/aroma/inventory/query";

export type IAromasInventoryQueryParams = undefined;

export const useAromasInventoryQuery = createQueryHook<IAromaInventoryQuery, IQueryResult<IAromaInventory>, IAromasInventoryQueryParams>(AromasInventoryApiLink, "post");

export const useAromasInventorySource = () => useSourceContext<IAromaInventory>();

export interface IAromasInventorySourceContext extends ISourceContext<IAromaInventory> {
}

export interface IAromasInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IAromaInventory>> {
}

export const AromasInventorySourceConsumer: FC<IAromasInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromasInventorySourceProps extends Partial<ISourceProviderProps<IAromaInventory>> {
}

export const AromasInventorySource: FC<IAromasInventorySourceProps> = props => {
	return <SourceProvider<IAromaInventory>
		name={"AromasInventory"}
		useQuery={useAromasInventoryQuery}
		{...props}
	/>;
};

export const useAromasInventoryLink = (): ((queryParams?: IAromasInventoryQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(AromasInventoryApiLink, queryParams);
};

export const useAromasInventoryPromise = createPromiseHook<IAromaInventoryQuery, IAromaInventory, IAromasInventoryQueryParams>(AromasInventoryApiLink, "post");

export interface IAromasInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAromaInventoryQuery>>> {
}

export const AromasInventoryFilterProvider: FC<IAromasInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAromaInventoryQuery>> name={"AromasInventory"} {...props}/>;

export const useAromasInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAromaInventoryQuery>>();
export const useAromasInventoryFilterContext = () => useFilterContext<IQueryFilter<IAromaInventoryQuery>>();

export interface IAromasInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAromaInventoryQuery>> {
}

export const AromasInventorySourceFilter: FC<IAromasInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AromasInventory"}
/>;

export interface IAromasInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IAromaInventoryQuery>>> {
}

export const AromasInventoryOrderByProvider: FC<IAromasInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IAromaInventoryQuery>> name={"AromasInventory"} {...props}/>;

export const useAromasInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IAromaInventoryQuery>>();
export const useAromasInventoryOrderByContext = () => useOrderByContext<IQueryFilter<IAromaInventoryQuery>>();

export interface IAromasInventoryListSourceProps extends Partial<IListProps<IAromaInventory>> {
	sourceProps?: Partial<IAromasInventorySourceProps>;
}

export interface IAromasInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAromaInventoryQuery>, IQueryOrderBy<IAromaInventoryQuery>, IAromasInventoryQueryParams>> {
}

export const AromasInventorySourceControlProvider: FC<IAromasInventorySourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<IAromaInventoryQuery>, IQueryOrderBy<IAromaInventoryQuery>> name={"AromasInventory"} {...props}/>;

export const AromasInventoryListSource: FC<IAromasInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <AromasInventorySource
		{...sourceProps}
	>
		<List<IAromaInventory>
			{...props}
		/>
	</AromasInventorySource>;
};

export interface IAromasInventorySourceSelectProps extends IQuerySourceSelectProps<IAromaInventory> {
	toOption: IToOptionMapper<IAromaInventory>;
	sourceProps?: IAromasInventorySourceProps;
}

export const AromasInventorySourceSelect: FC<IAromasInventorySourceSelectProps> = ({sourceProps, ...props}) => {
	return <AromasInventorySource {...sourceProps}>
		<QuerySourceSelect<IAromaInventory> {...props}/>
	</AromasInventorySource>;
};

export const useAromasInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromasInventoryApiLink]);
};
