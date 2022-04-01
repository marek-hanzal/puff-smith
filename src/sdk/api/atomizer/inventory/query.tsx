/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventory, IAtomizerInventoryQuery} from "@/puff-smith/service/atomizer";
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

export const AtomizersInventoryApiLink = "/api/atomizer/inventory/query";

export type IAtomizersInventoryQueryParams = undefined;

export const useAtomizersInventoryQuery = createQueryHook<IAtomizerInventoryQuery, IQueryResult<IAtomizerInventory>, IAtomizersInventoryQueryParams>(AtomizersInventoryApiLink, "post");

export const useAtomizersInventorySource = () => useSourceContext<IAtomizerInventory>()

export interface IAtomizersInventorySourceContext extends ISourceContext<IAtomizerInventory> {
}

export interface IAtomizersInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IAtomizerInventory>> {
}

export const AtomizersInventorySourceConsumer: FC<IAtomizersInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizersInventorySourceProps extends Partial<ISourceProviderProps<IAtomizerInventory>> {
}

export const AtomizersInventorySource: FC<IAtomizersInventorySourceProps> = props => {
	return <SourceProvider<IAtomizerInventory>
		useQuery={useAtomizersInventoryQuery}
		{...props}
	/>;
}

export const useAtomizersInventoryLink = (): ((queryParams?: IAtomizersInventoryQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(AtomizersInventoryApiLink, queryParams);
}

export const useAtomizersInventoryPromise = createPromiseHook<IAtomizerInventoryQuery, IAtomizerInventory, IAtomizersInventoryQueryParams>(AtomizersInventoryApiLink, "post");

export interface IAtomizersInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAtomizerInventoryQuery>>> {
}

export const AtomizersInventoryFilterProvider: FC<IAtomizersInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAtomizerInventoryQuery>> {...props}/>;

export const useAtomizersInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAtomizerInventoryQuery>>()
export const useAtomizersInventoryFilterContext = () => useFilterContext<IQueryFilter<IAtomizerInventoryQuery>>()

export interface IAtomizersInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAtomizerInventoryQuery>> {
}

export const AtomizersInventorySourceFilter: FC<IAtomizersInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.AtomizersInventory'}
/>;

export interface IAtomizersInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IAtomizerInventoryQuery>>> {
}

export const AtomizersInventoryOrderByProvider: FC<IAtomizersInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IAtomizerInventoryQuery>> {...props}/>;

export const useAtomizersInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IAtomizerInventoryQuery>>()
export const useAtomizersInventoryOrderByContext = () => useOrderByContext<IQueryFilter<IAtomizerInventoryQuery>>()

export interface IAtomizersInventoryListSourceProps extends Partial<IListProps<IAtomizerInventory>> {
	sourceProps?: Partial<IAtomizersInventorySourceProps>;
}

export interface IAtomizersInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAtomizerInventoryQuery>, IQueryOrderBy<IAtomizerInventoryQuery>, IAtomizersInventoryQueryParams>> {
}

export const AtomizersInventorySourceControlProvider: FC<IAtomizersInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAtomizerInventoryQuery>, IQueryOrderBy<IAtomizerInventoryQuery>> {...props}/>;

export const AtomizersInventoryListSource: FC<IAtomizersInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <AtomizersInventorySource
		{...sourceProps}
	>
		<List<IAtomizerInventory>
			{...props}
		/>
	</AtomizersInventorySource>
}

export interface IAtomizersInventorySourceSelectProps extends IQuerySourceSelectProps<IAtomizerInventory> {
	toOption: IToOptionMapper<IAtomizerInventory>;
	sourceProps?: IAtomizersInventorySourceProps;
}

export const AtomizersInventorySourceSelect: FC<IAtomizersInventorySourceSelectProps> = ({sourceProps, ...props}) => {
	return <AtomizersInventorySource {...sourceProps}>
		<QuerySourceSelect<IAtomizerInventory> {...props}/>
	</AtomizersInventorySource>;
};

export const useAtomizersInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizersInventoryApiLink]);
}
