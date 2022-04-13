/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBooster, IBoosterQuery} from "@/puff-smith/service/booster";
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

export const InventoryBoostersApiLink = "/api/booster/inventory/booster/query";

export type IInventoryBoostersQueryParams = undefined;

export const useInventoryBoostersQuery = createQueryHook<IBoosterQuery, IQueryResult<IBooster>, IInventoryBoostersQueryParams>(InventoryBoostersApiLink, "post");

export const useInventoryBoostersSource = () => useSourceContext<IBooster>();

export interface IInventoryBoostersSourceContext extends ISourceContext<IBooster> {
}

export interface IInventoryBoostersSourceConsumerProps extends ConsumerProps<ISourceContext<IBooster>> {
}

export const InventoryBoostersSourceConsumer: FC<IInventoryBoostersSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IInventoryBoostersSourceProps extends Partial<ISourceProviderProps<IBooster>> {
}

export const InventoryBoostersSource: FC<IInventoryBoostersSourceProps> = props => {
	return <SourceProvider<IBooster>
		name={"InventoryBoosters"}
		useQuery={useInventoryBoostersQuery}
		{...props}
	/>;
};

export const toInventoryBoostersLink = (queryParams?: IInventoryBoostersQueryParams) => toLink(InventoryBoostersApiLink, queryParams);
export const useInventoryBoostersLink = () => toInventoryBoostersLink;

export const useInventoryBoostersPromise = createPromiseHook<IBoosterQuery, IBooster, IInventoryBoostersQueryParams>(InventoryBoostersApiLink, "post");
export const InventoryBoostersPromise = createPromise<IBoosterQuery, IBooster, IInventoryBoostersQueryParams>(InventoryBoostersApiLink, "post");

export interface IInventoryBoostersFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBoosterQuery>>> {
}

export const InventoryBoostersFilterProvider: FC<IInventoryBoostersFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBoosterQuery>> name={"InventoryBoosters"} {...props}/>;

export const useInventoryBoostersOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBoosterQuery>>();
export const useInventoryBoostersFilterContext = () => useFilterContext<IQueryFilter<IBoosterQuery>>();

export interface IInventoryBoostersSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBoosterQuery>> {
}

export const InventoryBoostersSourceFilter: FC<IInventoryBoostersSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.InventoryBoosters"}
/>;

export interface IInventoryBoostersOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBoosterQuery>>> {
}

export const InventoryBoostersOrderByProvider: FC<IInventoryBoostersOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBoosterQuery>> name={"InventoryBoosters"} {...props}/>;

export const useInventoryBoostersOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBoosterQuery>>();
export const useInventoryBoostersOrderByContext = () => useOrderByContext<IQueryOrderBy<IBoosterQuery>>();

export interface IInventoryBoostersListSourceProps extends Partial<IListProps<IBooster>> {
	sourceProps?: Partial<IInventoryBoostersSourceProps>;
}

export interface IInventoryBoostersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBoosterQuery>, IQueryOrderBy<IBoosterQuery>, IInventoryBoostersQueryParams>> {
}

export const InventoryBoostersSourceControlProvider: FC<IInventoryBoostersSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBoosterQuery>, IQueryOrderBy<IBoosterQuery>> name={"InventoryBoosters"} {...props}/>;

export const InventoryBoostersListSource: FC<IInventoryBoostersListSourceProps> = ({sourceProps, ...props}) => {
	return <InventoryBoostersSource
		{...sourceProps}
	>
		<List<IBooster>
			{...props}
		/>
	</InventoryBoostersSource>
}

export interface IInventoryBoostersSourceSelectProps extends IQuerySourceSelectProps<IBooster> {
	toOption: IToOptionMapper<IBooster>;
	sourceProps?: IInventoryBoostersSourceProps;
}

export const InventoryBoostersSourceSelect: FC<IInventoryBoostersSourceSelectProps> = ({sourceProps, ...props}) => {
	return <InventoryBoostersSource {...sourceProps}>
		<QuerySourceSelect<IBooster> {...props}/>
	</InventoryBoostersSource>;
};

export const useInventoryBoostersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([InventoryBoostersApiLink]);
}
