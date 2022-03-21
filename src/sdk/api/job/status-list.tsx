import {IBaseSelectOption, IQuery, IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
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

export const StatusListApiLink = "/api/job/status-list";

export type IStatusListQueryParams = undefined;

export const useStatusListQuery = createQueryHook<IQuery, IQueryResult<IBaseSelectOption>, IStatusListQueryParams>(StatusListApiLink, "post");

export const useStatusListSource = () => useSourceContext<IBaseSelectOption>()

export interface IStatusListSourceContext extends ISourceContext<IBaseSelectOption> {
}

export interface IStatusListSourceConsumerProps extends ConsumerProps<ISourceContext<IBaseSelectOption>> {
}

export const StatusListSourceConsumer: FC<IStatusListSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IStatusListSourceProps extends Partial<ISourceProviderProps<IBaseSelectOption>> {
}

export const StatusListSource: FC<IStatusListSourceProps> = props => {
	return <SourceProvider<IBaseSelectOption>
		useQuery={useStatusListQuery}
		{...props}
	/>;
}

export const useStatusListLink = (): ((queryParams?: IStatusListQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(StatusListApiLink, queryParams);
}

export const useStatusListPromise = createPromiseHook<IQuery, IBaseSelectOption, IStatusListQueryParams>(StatusListApiLink, "post");

export interface IStatusListFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IQuery>>> {
}

export const StatusListFilterProvider: FC<IStatusListFilterProviderProps> = props => <FilterProvider<IQueryFilter<IQuery>> {...props}/>;

export const useStatusListOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IQuery>>()
export const useStatusListFilterContext = () => useFilterContext<IQueryFilter<IQuery>>()

export interface IStatusListSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IQuery>> {
}

export const StatusListSourceFilter: FC<IStatusListSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.StatusList'}
/>;

export interface IStatusListOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IQuery>>> {
}

export const StatusListOrderByProvider: FC<IStatusListOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IQuery>> {...props}/>;

export const useStatusListOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IQuery>>()
export const useStatusListOrderByContext = () => useOrderByContext<IQueryFilter<IQuery>>()

export interface IStatusListListSourceProps extends Partial<IListProps<IBaseSelectOption>> {
	sourceProps?: Partial<IStatusListSourceProps>;
}

export interface IStatusListSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IQuery>, IQueryOrderBy<IQuery>, IStatusListQueryParams>> {
}

export const StatusListSourceControlProvider: FC<IStatusListSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IQuery>, IQueryOrderBy<IQuery>> {...props}/>;

export const StatusListListSource: FC<IStatusListListSourceProps> = ({sourceProps, ...props}) => {
	return <StatusListSource
		{...sourceProps}
	>
		<List<IBaseSelectOption>
			{...props}
		/>
	</StatusListSource>
}

export interface IStatusListSourceSelectProps extends IQuerySourceSelectProps<IBaseSelectOption> {
	toOption: IToOptionMapper<IBaseSelectOption>;
	sourceProps?: IStatusListSourceProps;
}

export const StatusListSourceSelect: FC<IStatusListSourceSelectProps> = ({sourceProps, ...props}) => {
	return <StatusListSource {...sourceProps}>
		<QuerySourceSelect<IBaseSelectOption> {...props}/>
	</StatusListSource>;
};

export const useStatusListQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([StatusListApiLink]);
}
