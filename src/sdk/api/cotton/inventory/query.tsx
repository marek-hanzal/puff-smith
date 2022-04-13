/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonInventory, ICottonInventoryQuery} from "@/puff-smith/service/cotton";
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

export const CottonsInventoryApiLink = "/api/cotton/inventory/query";

export type ICottonsInventoryQueryParams = undefined;

export const useCottonsInventoryQuery = createQueryHook<ICottonInventoryQuery, IQueryResult<ICottonInventory>, ICottonsInventoryQueryParams>(CottonsInventoryApiLink, "post");

export const useCottonsInventorySource = () => useSourceContext<ICottonInventory>();

export interface ICottonsInventorySourceContext extends ISourceContext<ICottonInventory> {
}

export interface ICottonsInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ICottonInventory>> {
}

export const CottonsInventorySourceConsumer: FC<ICottonsInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonsInventorySourceProps extends Partial<ISourceProviderProps<ICottonInventory>> {
}

export const CottonsInventorySource: FC<ICottonsInventorySourceProps> = props => {
	return <SourceProvider<ICottonInventory>
		name={"CottonsInventory"}
		useQuery={useCottonsInventoryQuery}
		{...props}
	/>;
}

export const toCottonsInventoryLink = (queryParams?: ICottonsInventoryQueryParams) => toLink(CottonsInventoryApiLink, queryParams);
export const useCottonsInventoryLink = () => toCottonsInventoryLink;

export const useCottonsInventoryPromise = createPromiseHook<ICottonInventoryQuery, ICottonInventory, ICottonsInventoryQueryParams>(CottonsInventoryApiLink, "post");
export const CottonsInventoryPromise = createPromise<ICottonInventoryQuery, ICottonInventory, ICottonsInventoryQueryParams>(CottonsInventoryApiLink, "post");

export interface ICottonsInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICottonInventoryQuery>>> {
}

export const CottonsInventoryFilterProvider: FC<ICottonsInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICottonInventoryQuery>> name={"CottonsInventory"} {...props}/>;

export const useCottonsInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICottonInventoryQuery>>();
export const useCottonsInventoryFilterContext = () => useFilterContext<IQueryFilter<ICottonInventoryQuery>>();

export interface ICottonsInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICottonInventoryQuery>> {
}

export const CottonsInventorySourceFilter: FC<ICottonsInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CottonsInventory"}
/>;

export interface ICottonsInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICottonInventoryQuery>>> {
}

export const CottonsInventoryOrderByProvider: FC<ICottonsInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICottonInventoryQuery>> name={"CottonsInventory"} {...props}/>;

export const useCottonsInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICottonInventoryQuery>>();
export const useCottonsInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ICottonInventoryQuery>>();

export interface ICottonsInventoryListSourceProps extends Partial<IListProps<ICottonInventory>> {
	sourceProps?: Partial<ICottonsInventorySourceProps>;
}

export interface ICottonsInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICottonInventoryQuery>, IQueryOrderBy<ICottonInventoryQuery>, ICottonsInventoryQueryParams>> {
}

export const CottonsInventorySourceControlProvider: FC<ICottonsInventorySourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<ICottonInventoryQuery>, IQueryOrderBy<ICottonInventoryQuery>> name={"CottonsInventory"} {...props}/>;

export const CottonsInventoryListSource: FC<ICottonsInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <CottonsInventorySource
		{...sourceProps}
	>
		<List<ICottonInventory>
			{...props}
		/>
	</CottonsInventorySource>
}

export interface ICottonsInventorySourceSelectProps extends IQuerySourceSelectProps<ICottonInventory> {
	toOption: IToOptionMapper<ICottonInventory>;
	sourceProps?: ICottonsInventorySourceProps;
}

export const CottonsInventorySourceSelect: FC<ICottonsInventorySourceSelectProps> = ({sourceProps, ...props}) => {
	return <CottonsInventorySource {...sourceProps}>
		<QuerySourceSelect<ICottonInventory> {...props}/>
	</CottonsInventorySource>;
};

export const useCottonsInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonsInventoryApiLink]);
}
