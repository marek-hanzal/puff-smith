import {IAtomizer, IAtomizerFilter, IAtomizerOrderBy, IAtomizerQuery} from "@/puff-smith/service/atomizer";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
import {IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const AtomizersApiLink = "/api/atomizer/query";

export type IAtomizersQueryParams = undefined;

export const useAtomizersQuery = createQueryHook<IAtomizerQuery, IQueryResult<IAtomizer>, IAtomizersQueryParams>(AtomizersApiLink, "post");

export const useAtomizersSource = () => useSourceContext<IAtomizer>()

export interface IAtomizersSourceContext extends ISourceContext<IAtomizer> {
}

export interface IAtomizersSourceConsumerProps extends ConsumerProps<ISourceContext<IAtomizer>> {
}

export const AtomizersSourceConsumer: FC<IAtomizersSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizersSourceProps extends Partial<ISourceProviderProps<IAtomizer>> {
}

export const AtomizersSource: FC<IAtomizersSourceProps> = props => {
	return <SourceProvider<IAtomizer>
		useQuery={useAtomizersQuery}
		{...props}
	/>;
}

export const useAtomizersLink = (): ((queryParams?: IAtomizersQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(AtomizersApiLink, queryParams);
}

export const useAtomizersPromise = createPromiseHook<IAtomizerQuery, IAtomizer, IAtomizersQueryParams>(AtomizersApiLink, "post");

export interface IAtomizersFilterProviderProps extends Partial<IFilterProviderProps<IAtomizerFilter>> {
}

export const AtomizersFilterProvider: FC<IAtomizersFilterProviderProps> = props => <FilterProvider<IAtomizerFilter> {...props}/>;

export const useAtomizersOptionalFilterContext = () => useOptionalFilterContext<IAtomizerFilter>()
export const useAtomizersFilterContext = () => useFilterContext<IAtomizerFilter>()

export interface IAtomizersSourceFilterProps extends IFilterWithoutTranslationProps<IAtomizerFilter> {
}

export const AtomizersSourceFilter: FC<IAtomizersSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Atomizers'}
/>;

export interface IAtomizersOrderByProviderProps extends Partial<IOrderByProviderProps<IAtomizerFilter>> {
}

export const AtomizersOrderByProvider: FC<IAtomizersOrderByProviderProps> = props => <OrderByProvider<IAtomizerFilter> {...props}/>;

export const useAtomizersOptionalOrderByContext = () => useOptionalOrderByContext<IAtomizerFilter>()
export const useAtomizersOrderByContext = () => useOrderByContext<IAtomizerFilter>()

export interface IAtomizersListSourceProps extends Partial<IListProps<IAtomizer>> {
	sourceProps?: Partial<IAtomizersSourceProps>;
}

export interface IAtomizersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IAtomizerFilter, IAtomizerOrderBy, IAtomizersQueryParams>> {
}

export const AtomizersSourceControlProvider: FC<IAtomizersSourceControlProviderProps> = props => <SourceControlProvider<IAtomizerFilter, IAtomizerOrderBy> {...props}/>;

export const AtomizersListSource: FC<IAtomizersListSourceProps> = ({sourceProps, ...props}) => {
	return <AtomizersSource
		{...sourceProps}
	>
		<List<IAtomizer>
			{...props}
		/>
	</AtomizersSource>
}

export interface IAtomizersSourceSelectProps extends IQuerySourceSelectProps<IAtomizer> {
	toOption: IToOptionMapper<IAtomizer>;
	sourceProps?: IAtomizersSourceProps;
}

export const AtomizersSourceSelect: FC<IAtomizersSourceSelectProps> = ({sourceProps, ...props}) => {
	return <AtomizersSource {...sourceProps}>
		<QuerySourceSelect<IAtomizer> {...props}/>
	</AtomizersSource>;
};

export const useAtomizersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizersApiLink]);
}
