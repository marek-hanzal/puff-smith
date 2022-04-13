/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInventory, ICellInventoryQuery} from "@/puff-smith/service/cell";
import {IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {
	createPromise,
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
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOrderByContext,
	useSourceContext
} from "@leight-core/client";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";

export const CellsInventoryApiLink = "/api/cell/inventory/query";

export type ICellsInventoryQueryParams = undefined;

export const useCellsInventoryQuery = createQueryHook<ICellInventoryQuery, IQueryResult<ICellInventory>, ICellsInventoryQueryParams>(CellsInventoryApiLink, "post");

export const useCellsInventorySource = () => useSourceContext<ICellInventory>();

export interface ICellsInventorySourceContext extends ISourceContext<ICellInventory> {
}

export interface ICellsInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ICellInventory>> {
}

export const CellsInventorySourceConsumer: FC<ICellsInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellsInventorySourceProps extends Partial<ISourceProviderProps<ICellInventory>> {
}

export const CellsInventorySource: FC<ICellsInventorySourceProps> = props => {
	return <SourceProvider<ICellInventory>
		name={"CellsInventory"}
		useQuery={useCellsInventoryQuery}
		{...props}
	/>;
};

export const toCellsInventoryLink = (queryParams?: ICellsInventoryQueryParams) => toLink(CellsInventoryApiLink, queryParams);
export const useCellsInventoryLink = () => toCellsInventoryLink;

export const useCellsInventoryPromise = createPromiseHook<ICellInventoryQuery, ICellInventory, ICellsInventoryQueryParams>(CellsInventoryApiLink, "post");
export const CellsInventoryPromise = createPromise<ICellInventoryQuery, ICellInventory, ICellsInventoryQueryParams>(CellsInventoryApiLink, "post");

export interface ICellsInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICellInventoryQuery>>> {
}

export const CellsInventoryFilterProvider: FC<ICellsInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICellInventoryQuery>> name={"CellsInventory"} {...props}/>;

export const useCellsInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICellInventoryQuery>>();
export const useCellsInventoryFilterContext = () => useFilterContext<IQueryFilter<ICellInventoryQuery>>();

export interface ICellsInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICellInventoryQuery>> {
}

export const CellsInventorySourceFilter: FC<ICellsInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CellsInventory"}
/>;

export interface ICellsInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICellInventoryQuery>>> {
}

export const CellsInventoryOrderByProvider: FC<ICellsInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICellInventoryQuery>> name={"CellsInventory"} {...props}/>;

export const useCellsInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICellInventoryQuery>>();
export const useCellsInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ICellInventoryQuery>>();

export interface ICellsInventoryListSourceProps extends Partial<IListProps<ICellInventory>> {
	sourceProps?: Partial<ICellsInventorySourceProps>;
}

export interface ICellsInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICellInventoryQuery>, IQueryOrderBy<ICellInventoryQuery>, ICellsInventoryQueryParams>> {
}

export const CellsInventorySourceControlProvider: FC<ICellsInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICellInventoryQuery>, IQueryOrderBy<ICellInventoryQuery>> name={"CellsInventory"} {...props}/>;

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
