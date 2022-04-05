/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterInventory, IBoosterInventoryQuery} from "@/puff-smith/service/booster";
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

export const BoostersInventoryApiLink = "/api/booster/inventory/query";

export type IBoostersInventoryQueryParams = undefined;

export const useBoostersInventoryQuery = createQueryHook<IBoosterInventoryQuery, IQueryResult<IBoosterInventory>, IBoostersInventoryQueryParams>(BoostersInventoryApiLink, "post");

export const useBoostersInventorySource = () => useSourceContext<IBoosterInventory>();

export interface IBoostersInventorySourceContext extends ISourceContext<IBoosterInventory> {
}

export interface IBoostersInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IBoosterInventory>> {
}

export const BoostersInventorySourceConsumer: FC<IBoostersInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoostersInventorySourceProps extends Partial<ISourceProviderProps<IBoosterInventory>> {
}

export const BoostersInventorySource: FC<IBoostersInventorySourceProps> = props => {
	return <SourceProvider<IBoosterInventory>
		name={"BoostersInventory"}
		useQuery={useBoostersInventoryQuery}
		{...props}
	/>;
};

export const useBoostersInventoryLink = (): ((queryParams?: IBoostersInventoryQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(BoostersInventoryApiLink, queryParams);
};

export const useBoostersInventoryPromise = createPromiseHook<IBoosterInventoryQuery, IBoosterInventory, IBoostersInventoryQueryParams>(BoostersInventoryApiLink, "post");

export interface IBoostersInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBoosterInventoryQuery>>> {
}

export const BoostersInventoryFilterProvider: FC<IBoostersInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBoosterInventoryQuery>> name={"BoostersInventory"} {...props}/>;

export const useBoostersInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBoosterInventoryQuery>>();
export const useBoostersInventoryFilterContext = () => useFilterContext<IQueryFilter<IBoosterInventoryQuery>>();

export interface IBoostersInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBoosterInventoryQuery>> {
}

export const BoostersInventorySourceFilter: FC<IBoostersInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BoostersInventory"}
/>;

export interface IBoostersInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IBoosterInventoryQuery>>> {
}

export const BoostersInventoryOrderByProvider: FC<IBoostersInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IBoosterInventoryQuery>> name={"BoostersInventory"} {...props}/>;

export const useBoostersInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IBoosterInventoryQuery>>();
export const useBoostersInventoryOrderByContext = () => useOrderByContext<IQueryFilter<IBoosterInventoryQuery>>();

export interface IBoostersInventoryListSourceProps extends Partial<IListProps<IBoosterInventory>> {
	sourceProps?: Partial<IBoostersInventorySourceProps>;
}

export interface IBoostersInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBoosterInventoryQuery>, IQueryOrderBy<IBoosterInventoryQuery>, IBoostersInventoryQueryParams>> {
}

export const BoostersInventorySourceControlProvider: FC<IBoostersInventorySourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<IBoosterInventoryQuery>, IQueryOrderBy<IBoosterInventoryQuery>> name={"BoostersInventory"} {...props}/>;

export const BoostersInventoryListSource: FC<IBoostersInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <BoostersInventorySource
		{...sourceProps}
	>
		<List<IBoosterInventory>
			{...props}
		/>
	</BoostersInventorySource>;
};

export interface IBoostersInventorySourceSelectProps extends IQuerySourceSelectProps<IBoosterInventory> {
	toOption: IToOptionMapper<IBoosterInventory>;
	sourceProps?: IBoostersInventorySourceProps;
}

export const BoostersInventorySourceSelect: FC<IBoostersInventorySourceSelectProps> = ({sourceProps, ...props}) => {
	return <BoostersInventorySource {...sourceProps}>
		<QuerySourceSelect<IBoosterInventory> {...props}/>
	</BoostersInventorySource>;
};

export const useBoostersInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoostersInventoryApiLink]);
};
