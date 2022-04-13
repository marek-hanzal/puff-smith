/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquid, ILiquidQuery} from "@/puff-smith/service/liquid";
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

export const LiquidsApiLink = "/api/liquid/query";

export type ILiquidsQueryParams = undefined;

export const useLiquidsQuery = createQueryHook<ILiquidQuery, IQueryResult<ILiquid>, ILiquidsQueryParams>(LiquidsApiLink, "post");

export const useLiquidsSource = () => useSourceContext<ILiquid>();

export interface ILiquidsSourceContext extends ISourceContext<ILiquid> {
}

export interface ILiquidsSourceConsumerProps extends ConsumerProps<ISourceContext<ILiquid>> {
}

export const LiquidsSourceConsumer: FC<ILiquidsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ILiquidsSourceProps extends Partial<ISourceProviderProps<ILiquid>> {
}

export const LiquidsSource: FC<ILiquidsSourceProps> = props => {
	return <SourceProvider<ILiquid>
		name={"Liquids"}
		useQuery={useLiquidsQuery}
		{...props}
	/>;
}

export const toLiquidsLink = (queryParams?: ILiquidsQueryParams) => toLink(LiquidsApiLink, queryParams);
export const useLiquidsLink = () => toLiquidsLink;

export const useLiquidsPromise = createPromiseHook<ILiquidQuery, ILiquid, ILiquidsQueryParams>(LiquidsApiLink, "post");
export const LiquidsPromise = createPromise<ILiquidQuery, ILiquid, ILiquidsQueryParams>(LiquidsApiLink, "post");

export interface ILiquidsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ILiquidQuery>>> {
}

export const LiquidsFilterProvider: FC<ILiquidsFilterProviderProps> = props => <FilterProvider<IQueryFilter<ILiquidQuery>> name={"Liquids"} {...props}/>;

export const useLiquidsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ILiquidQuery>>();
export const useLiquidsFilterContext = () => useFilterContext<IQueryFilter<ILiquidQuery>>();

export interface ILiquidsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ILiquidQuery>> {
}

export const LiquidsSourceFilter: FC<ILiquidsSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Liquids"}
/>;

export interface ILiquidsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ILiquidQuery>>> {
}

export const LiquidsOrderByProvider: FC<ILiquidsOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ILiquidQuery>> name={"Liquids"} {...props}/>;

export const useLiquidsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ILiquidQuery>>();
export const useLiquidsOrderByContext = () => useOrderByContext<IQueryOrderBy<ILiquidQuery>>();

export interface ILiquidsListSourceProps extends Partial<IListProps<ILiquid>> {
	sourceProps?: Partial<ILiquidsSourceProps>;
}

export interface ILiquidsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>, ILiquidsQueryParams>> {
}

export const LiquidsSourceControlProvider: FC<ILiquidsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>> name={"Liquids"} {...props}/>;

export const LiquidsListSource: FC<ILiquidsListSourceProps> = ({sourceProps, ...props}) => {
	return <LiquidsSource
		{...sourceProps}
	>
		<List<ILiquid>
			{...props}
		/>
	</LiquidsSource>
}

export interface ILiquidsSourceSelectProps extends IQuerySourceSelectProps<ILiquid> {
	toOption: IToOptionMapper<ILiquid>;
	sourceProps?: ILiquidsSourceProps;
}

export const LiquidsSourceSelect: FC<ILiquidsSourceSelectProps> = ({sourceProps, ...props}) => {
	return <LiquidsSource {...sourceProps}>
		<QuerySourceSelect<ILiquid> {...props}/>
	</LiquidsSource>;
};

export const useLiquidsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([LiquidsApiLink]);
}
