/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInventory, ICellInventoryQuery} from "@/puff-smith/service/cell";
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

export const CellsInventoryApiLink = "/api/cell/inventory/query";

export type ICellsInventoryQueryParams = undefined;

export const useCellsInventoryQuery = createQueryHook<ICellInventoryQuery, IQueryResult<ICellInventory>, ICellsInventoryQueryParams>(CellsInventoryApiLink, "post");

export const useCellsInventorySource = () => useSourceContext<ICellInventory>()

export interface ICellsInventorySourceContext extends ISourceContext<ICellInventory> {
}

export interface ICellsInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ICellInventory>> {
}

export const CellsInventorySourceConsumer: FC<ICellsInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellsInventorySourceProps extends Partial<ISourceProviderProps<ICellInventory>> {
}

export const CellsInventorySource: FC<ICellsInventorySourceProps> = props => {
	return <SourceProvider<ICellInventory>
		useQuery={useCellsInventoryQuery}
		{...props}
	/>;
}

export const useCellsInventoryLink = (): ((queryParams?: ICellsInventoryQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(CellsInventoryApiLink, queryParams);
}

export const useCellsInventoryPromise = createPromiseHook<ICellInventoryQuery, ICellInventory, ICellsInventoryQueryParams>(CellsInventoryApiLink, "post");

export interface ICellsInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICellInventoryQuery>>> {
}

export const CellsInventoryFilterProvider: FC<ICellsInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICellInventoryQuery>> {...props}/>;

export const useCellsInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICellInventoryQuery>>()
export const useCellsInventoryFilterContext = () => useFilterContext<IQueryFilter<ICellInventoryQuery>>()

export interface ICellsInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICellInventoryQuery>> {
}

export const CellsInventorySourceFilter: FC<ICellsInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.CellsInventory'}
/>;

export interface ICellsInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<ICellInventoryQuery>>> {
}

export const CellsInventoryOrderByProvider: FC<ICellsInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<ICellInventoryQuery>> {...props}/>;

export const useCellsInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<ICellInventoryQuery>>()
export const useCellsInventoryOrderByContext = () => useOrderByContext<IQueryFilter<ICellInventoryQuery>>()

export interface ICellsInventoryListSourceProps extends Partial<IListProps<ICellInventory>> {
	sourceProps?: Partial<ICellsInventorySourceProps>;
}

export interface ICellsInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICellInventoryQuery>, IQueryOrderBy<ICellInventoryQuery>, ICellsInventoryQueryParams>> {
}

export const CellsInventorySourceControlProvider: FC<ICellsInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICellInventoryQuery>, IQueryOrderBy<ICellInventoryQuery>> {...props}/>;

export const CellsInventoryListSource: FC<ICellsInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <CellsInventorySource
		{...sourceProps}
	>
		<List<ICellInventory>
			{...props}
		/>
	</CellsInventorySource>
}

export interface ICellsInventorySourceSelectProps extends IQuerySourceSelectProps<ICellInventory> {
	toOption: IToOptionMapper<ICellInventory>;
	sourceProps?: ICellsInventorySourceProps;
}

export const CellsInventorySourceSelect: FC<ICellsInventorySourceSelectProps> = ({sourceProps, ...props}) => {
	return <CellsInventorySource {...sourceProps}>
		<QuerySourceSelect<ICellInventory> {...props}/>
	</CellsInventorySource>;
};

export const useCellsInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellsInventoryApiLink]);
}
