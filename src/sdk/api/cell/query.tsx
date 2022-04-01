/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICell, ICellQuery} from "@/puff-smith/service/cell";
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

export const CellsApiLink = "/api/cell/query";

export type ICellsQueryParams = undefined;

export const useCellsQuery = createQueryHook<ICellQuery, IQueryResult<ICell>, ICellsQueryParams>(CellsApiLink, "post");

export const useCellsSource = () => useSourceContext<ICell>()

export interface ICellsSourceContext extends ISourceContext<ICell> {
}

export interface ICellsSourceConsumerProps extends ConsumerProps<ISourceContext<ICell>> {
}

export const CellsSourceConsumer: FC<ICellsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellsSourceProps extends Partial<ISourceProviderProps<ICell>> {
}

export const CellsSource: FC<ICellsSourceProps> = props => {
	return <SourceProvider<ICell>
		useQuery={useCellsQuery}
		{...props}
	/>;
}

export const useCellsLink = (): ((queryParams?: ICellsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(CellsApiLink, queryParams);
}

export const useCellsPromise = createPromiseHook<ICellQuery, ICell, ICellsQueryParams>(CellsApiLink, "post");

export interface ICellsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICellQuery>>> {
}

export const CellsFilterProvider: FC<ICellsFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICellQuery>> {...props}/>;

export const useCellsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICellQuery>>()
export const useCellsFilterContext = () => useFilterContext<IQueryFilter<ICellQuery>>()

export interface ICellsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICellQuery>> {
}

export const CellsSourceFilter: FC<ICellsSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Cells'}
/>;

export interface ICellsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<ICellQuery>>> {
}

export const CellsOrderByProvider: FC<ICellsOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<ICellQuery>> {...props}/>;

export const useCellsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<ICellQuery>>()
export const useCellsOrderByContext = () => useOrderByContext<IQueryFilter<ICellQuery>>()

export interface ICellsListSourceProps extends Partial<IListProps<ICell>> {
	sourceProps?: Partial<ICellsSourceProps>;
}

export interface ICellsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICellQuery>, IQueryOrderBy<ICellQuery>, ICellsQueryParams>> {
}

export const CellsSourceControlProvider: FC<ICellsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICellQuery>, IQueryOrderBy<ICellQuery>> {...props}/>;

export const CellsListSource: FC<ICellsListSourceProps> = ({sourceProps, ...props}) => {
	return <CellsSource
		{...sourceProps}
	>
		<List<ICell>
			{...props}
		/>
	</CellsSource>
}

export interface ICellsSourceSelectProps extends IQuerySourceSelectProps<ICell> {
	toOption: IToOptionMapper<ICell>;
	sourceProps?: ICellsSourceProps;
}

export const CellsSourceSelect: FC<ICellsSourceSelectProps> = ({sourceProps, ...props}) => {
	return <CellsSource {...sourceProps}>
		<QuerySourceSelect<ICell> {...props}/>
	</CellsSource>;
};

export const useCellsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellsApiLink]);
}
