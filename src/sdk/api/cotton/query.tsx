/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICotton, ICottonQuery} from "@/puff-smith/service/cotton";
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

export const CottonsApiLink = "/api/cotton/query";

export type ICottonsQueryParams = undefined;

export const useCottonsQuery = createQueryHook<ICottonQuery, IQueryResult<ICotton>, ICottonsQueryParams>(CottonsApiLink, "post");

export const useCottonsSource = () => useSourceContext<ICotton>();

export interface ICottonsSourceContext extends ISourceContext<ICotton> {
}

export interface ICottonsSourceConsumerProps extends ConsumerProps<ISourceContext<ICotton>> {
}

export const CottonsSourceConsumer: FC<ICottonsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonsSourceProps extends Partial<ISourceProviderProps<ICotton>> {
}

export const CottonsSource: FC<ICottonsSourceProps> = props => {
	return <SourceProvider<ICotton>
		name={"Cottons"}
		useQuery={useCottonsQuery}
		{...props}
	/>;
}

export const useCottonsLink = (): ((queryParams?: ICottonsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(CottonsApiLink, queryParams);
}

export const useCottonsPromise = createPromiseHook<ICottonQuery, ICotton, ICottonsQueryParams>(CottonsApiLink, "post");

export interface ICottonsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICottonQuery>>> {
}

export const CottonsFilterProvider: FC<ICottonsFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICottonQuery>> name={"Cottons"} {...props}/>;

export const useCottonsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICottonQuery>>();
export const useCottonsFilterContext = () => useFilterContext<IQueryFilter<ICottonQuery>>();

export interface ICottonsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICottonQuery>> {
}

export const CottonsSourceFilter: FC<ICottonsSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Cottons"}
/>;

export interface ICottonsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<ICottonQuery>>> {
}

export const CottonsOrderByProvider: FC<ICottonsOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<ICottonQuery>> name={"Cottons"} {...props}/>;

export const useCottonsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<ICottonQuery>>();
export const useCottonsOrderByContext = () => useOrderByContext<IQueryFilter<ICottonQuery>>();

export interface ICottonsListSourceProps extends Partial<IListProps<ICotton>> {
	sourceProps?: Partial<ICottonsSourceProps>;
}

export interface ICottonsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICottonQuery>, IQueryOrderBy<ICottonQuery>, ICottonsQueryParams>> {
}

export const CottonsSourceControlProvider: FC<ICottonsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICottonQuery>, IQueryOrderBy<ICottonQuery>> name={"Cottons"} {...props}/>;

export const CottonsListSource: FC<ICottonsListSourceProps> = ({sourceProps, ...props}) => {
	return <CottonsSource
		{...sourceProps}
	>
		<List<ICotton>
			{...props}
		/>
	</CottonsSource>;
}

export interface ICottonsSourceSelectProps extends IQuerySourceSelectProps<ICotton> {
	toOption: IToOptionMapper<ICotton>;
	sourceProps?: ICottonsSourceProps;
}

export const CottonsSourceSelect: FC<ICottonsSourceSelectProps> = ({sourceProps, ...props}) => {
	return <CottonsSource {...sourceProps}>
		<QuerySourceSelect<ICotton> {...props}/>
	</CottonsSource>;
};

export const useCottonsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonsApiLink]);
}
