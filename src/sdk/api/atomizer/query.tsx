/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer";
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

export const AtomizersApiLink = "/api/atomizer/query";

export type IAtomizersQueryParams = undefined;

export const useAtomizersQuery = createQueryHook<IAtomizerQuery, IQueryResult<IAtomizer>, IAtomizersQueryParams>(AtomizersApiLink, "post");

export const useAtomizersSource = () => useSourceContext<IAtomizer>();

export interface IAtomizersSourceContext extends ISourceContext<IAtomizer> {
}

export interface IAtomizersSourceConsumerProps extends ConsumerProps<ISourceContext<IAtomizer>> {
}

export const AtomizersSourceConsumer: FC<IAtomizersSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizersSourceProps extends Partial<ISourceProviderProps<IAtomizer>> {
}

export const AtomizersSource: FC<IAtomizersSourceProps> = props => {
	return <SourceProvider<IAtomizer>
		name={"Atomizers"}
		useQuery={useAtomizersQuery}
		{...props}
	/>;
}

export const useAtomizersLink = (): ((queryParams?: IAtomizersQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(AtomizersApiLink, queryParams);
}

export const useAtomizersPromise = createPromiseHook<IAtomizerQuery, IAtomizer, IAtomizersQueryParams>(AtomizersApiLink, "post");

export interface IAtomizersFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAtomizerQuery>>> {
}

export const AtomizersFilterProvider: FC<IAtomizersFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAtomizerQuery>> name={"Atomizers"} {...props}/>;

export const useAtomizersOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAtomizerQuery>>();
export const useAtomizersFilterContext = () => useFilterContext<IQueryFilter<IAtomizerQuery>>();

export interface IAtomizersSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAtomizerQuery>> {
}

export const AtomizersSourceFilter: FC<IAtomizersSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Atomizers"}
/>;

export interface IAtomizersOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAtomizerQuery>>> {
}

export const AtomizersOrderByProvider: FC<IAtomizersOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAtomizerQuery>> name={"Atomizers"} {...props}/>;

export const useAtomizersOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAtomizerQuery>>();
export const useAtomizersOrderByContext = () => useOrderByContext<IQueryOrderBy<IAtomizerQuery>>();

export interface IAtomizersListSourceProps extends Partial<IListProps<IAtomizer>> {
	sourceProps?: Partial<IAtomizersSourceProps>;
}

export interface IAtomizersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAtomizerQuery>, IQueryOrderBy<IAtomizerQuery>, IAtomizersQueryParams>> {
}

export const AtomizersSourceControlProvider: FC<IAtomizersSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAtomizerQuery>, IQueryOrderBy<IAtomizerQuery>> name={"Atomizers"} {...props}/>;

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
