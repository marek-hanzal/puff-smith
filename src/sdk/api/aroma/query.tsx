import {IAroma, IAromaQuery} from "@/puff-smith/service/aroma";
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

export const AromasApiLink = "/api/aroma/query";

export type IAromasQueryParams = undefined;

export const useAromasQuery = createQueryHook<IAromaQuery, IQueryResult<IAroma>, IAromasQueryParams>(AromasApiLink, "post");

export const useAromasSource = () => useSourceContext<IAroma>()

export interface IAromasSourceContext extends ISourceContext<IAroma> {
}

export interface IAromasSourceConsumerProps extends ConsumerProps<ISourceContext<IAroma>> {
}

export const AromasSourceConsumer: FC<IAromasSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromasSourceProps extends Partial<ISourceProviderProps<IAroma>> {
}

export const AromasSource: FC<IAromasSourceProps> = props => {
	return <SourceProvider<IAroma>
		useQuery={useAromasQuery}
		{...props}
	/>;
}

export const useAromasLink = (): ((queryParams?: IAromasQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(AromasApiLink, queryParams);
}

export const useAromasPromise = createPromiseHook<IAromaQuery, IAroma, IAromasQueryParams>(AromasApiLink, "post");

export interface IAromasFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAromaQuery>>> {
}

export const AromasFilterProvider: FC<IAromasFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAromaQuery>> {...props}/>;

export const useAromasOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAromaQuery>>()
export const useAromasFilterContext = () => useFilterContext<IQueryFilter<IAromaQuery>>()

export interface IAromasSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAromaQuery>> {
}

export const AromasSourceFilter: FC<IAromasSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Aromas'}
/>;

export interface IAromasOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IAromaQuery>>> {
}

export const AromasOrderByProvider: FC<IAromasOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IAromaQuery>> {...props}/>;

export const useAromasOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IAromaQuery>>()
export const useAromasOrderByContext = () => useOrderByContext<IQueryFilter<IAromaQuery>>()

export interface IAromasListSourceProps extends Partial<IListProps<IAroma>> {
	sourceProps?: Partial<IAromasSourceProps>;
}

export interface IAromasSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAromaQuery>, IQueryOrderBy<IAromaQuery>, IAromasQueryParams>> {
}

export const AromasSourceControlProvider: FC<IAromasSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAromaQuery>, IQueryOrderBy<IAromaQuery>> {...props}/>;

export const AromasListSource: FC<IAromasListSourceProps> = ({sourceProps, ...props}) => {
	return <AromasSource
		{...sourceProps}
	>
		<List<IAroma>
			{...props}
		/>
	</AromasSource>
}

export interface IAromasSourceSelectProps extends IQuerySourceSelectProps<IAroma> {
	toOption: IToOptionMapper<IAroma>;
	sourceProps?: IAromasSourceProps;
}

export const AromasSourceSelect: FC<IAromasSourceSelectProps> = ({sourceProps, ...props}) => {
	return <AromasSource {...sourceProps}>
		<QuerySourceSelect<IAroma> {...props}/>
	</AromasSource>;
};

export const useAromasQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromasApiLink]);
}