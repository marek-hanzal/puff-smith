/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBase, IBaseQuery} from "@/puff-smith/service/base";
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

export const BasesApiLink = "/api/base/query";

export type IBasesQueryParams = undefined;

export const useBasesQuery = createQueryHook<IBaseQuery, IQueryResult<IBase>, IBasesQueryParams>(BasesApiLink, "post");

export const useBasesSource = () => useSourceContext<IBase>();

export interface IBasesSourceContext extends ISourceContext<IBase> {
}

export interface IBasesSourceConsumerProps extends ConsumerProps<ISourceContext<IBase>> {
}

export const BasesSourceConsumer: FC<IBasesSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBasesSourceProps extends Partial<ISourceProviderProps<IBase>> {
}

export const BasesSource: FC<IBasesSourceProps> = props => {
	return <SourceProvider<IBase>
		name={"Bases"}
		useQuery={useBasesQuery}
		{...props}
	/>;
};

export const toBasesLink = (queryParams?: IBasesQueryParams) => toLink(BasesApiLink, queryParams);
export const useBasesLink = () => toBasesLink;

export const useBasesPromise = createPromiseHook<IBaseQuery, IBase, IBasesQueryParams>(BasesApiLink, "post");
export const BasesPromise = createPromise<IBaseQuery, IBase, IBasesQueryParams>(BasesApiLink, "post");

export interface IBasesFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBaseQuery>>> {
}

export const BasesFilterProvider: FC<IBasesFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBaseQuery>> name={"Bases"} {...props}/>;

export const useBasesOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBaseQuery>>();
export const useBasesFilterContext = () => useFilterContext<IQueryFilter<IBaseQuery>>();

export interface IBasesSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBaseQuery>> {
}

export const BasesSourceFilter: FC<IBasesSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Bases"}
/>;

export interface IBasesOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBaseQuery>>> {
}

export const BasesOrderByProvider: FC<IBasesOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBaseQuery>> name={"Bases"} {...props}/>;

export const useBasesOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBaseQuery>>();
export const useBasesOrderByContext = () => useOrderByContext<IQueryOrderBy<IBaseQuery>>();

export interface IBasesListSourceProps extends Partial<IListProps<IBase>> {
	sourceProps?: Partial<IBasesSourceProps>;
}

export interface IBasesSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBaseQuery>, IQueryOrderBy<IBaseQuery>, IBasesQueryParams>> {
}

export const BasesSourceControlProvider: FC<IBasesSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBaseQuery>, IQueryOrderBy<IBaseQuery>> name={"Bases"} {...props}/>;

export const BasesListSource: FC<IBasesListSourceProps> = ({sourceProps, ...props}) => {
	return <BasesSource
		{...sourceProps}
	>
		<List<IBase>
			{...props}
		/>
	</BasesSource>
}

export interface IBasesSourceSelectProps extends IQuerySourceSelectProps<IBase> {
	toOption: IToOptionMapper<IBase>;
	sourceProps?: IBasesSourceProps;
}

export const BasesSourceSelect: FC<IBasesSourceSelectProps> = ({sourceProps, ...props}) => {
	return <BasesSource {...sourceProps}>
		<QuerySourceSelect<IBase> {...props}/>
	</BasesSource>;
};

export const useBasesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BasesApiLink]);
}
