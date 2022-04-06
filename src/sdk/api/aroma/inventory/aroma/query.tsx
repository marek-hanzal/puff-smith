/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAroma, IAromaQuery} from "@/puff-smith/service/aroma";
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

export const InventoryAromasApiLink = "/api/aroma/inventory/aroma/query";

export type IInventoryAromasQueryParams = undefined;

export const useInventoryAromasQuery = createQueryHook<IAromaQuery, IQueryResult<IAroma>, IInventoryAromasQueryParams>(InventoryAromasApiLink, "post");

export const useInventoryAromasSource = () => useSourceContext<IAroma>();

export interface IInventoryAromasSourceContext extends ISourceContext<IAroma> {
}

export interface IInventoryAromasSourceConsumerProps extends ConsumerProps<ISourceContext<IAroma>> {
}

export const InventoryAromasSourceConsumer: FC<IInventoryAromasSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IInventoryAromasSourceProps extends Partial<ISourceProviderProps<IAroma>> {
}

export const InventoryAromasSource: FC<IInventoryAromasSourceProps> = props => {
	return <SourceProvider<IAroma>
		name={"InventoryAromas"}
		useQuery={useInventoryAromasQuery}
		{...props}
	/>;
}

export const useInventoryAromasLink = (): ((queryParams?: IInventoryAromasQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(InventoryAromasApiLink, queryParams);
}

export const useInventoryAromasPromise = createPromiseHook<IAromaQuery, IAroma, IInventoryAromasQueryParams>(InventoryAromasApiLink, "post");

export interface IInventoryAromasFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAromaQuery>>> {
}

export const InventoryAromasFilterProvider: FC<IInventoryAromasFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAromaQuery>> name={"InventoryAromas"} {...props}/>;

export const useInventoryAromasOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAromaQuery>>();
export const useInventoryAromasFilterContext = () => useFilterContext<IQueryFilter<IAromaQuery>>();

export interface IInventoryAromasSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAromaQuery>> {
}

export const InventoryAromasSourceFilter: FC<IInventoryAromasSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.InventoryAromas"}
/>;

export interface IInventoryAromasOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAromaQuery>>> {
}

export const InventoryAromasOrderByProvider: FC<IInventoryAromasOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAromaQuery>> name={"InventoryAromas"} {...props}/>;

export const useInventoryAromasOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAromaQuery>>();
export const useInventoryAromasOrderByContext = () => useOrderByContext<IQueryOrderBy<IAromaQuery>>();

export interface IInventoryAromasListSourceProps extends Partial<IListProps<IAroma>> {
	sourceProps?: Partial<IInventoryAromasSourceProps>;
}

export interface IInventoryAromasSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAromaQuery>, IQueryOrderBy<IAromaQuery>, IInventoryAromasQueryParams>> {
}

export const InventoryAromasSourceControlProvider: FC<IInventoryAromasSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAromaQuery>, IQueryOrderBy<IAromaQuery>> name={"InventoryAromas"} {...props}/>;

export const InventoryAromasListSource: FC<IInventoryAromasListSourceProps> = ({sourceProps, ...props}) => {
	return <InventoryAromasSource
		{...sourceProps}
	>
		<List<IAroma>
			{...props}
		/>
	</InventoryAromasSource>
}

export interface IInventoryAromasSourceSelectProps extends IQuerySourceSelectProps<IAroma> {
	toOption: IToOptionMapper<IAroma>;
	sourceProps?: IInventoryAromasSourceProps;
}

export const InventoryAromasSourceSelect: FC<IInventoryAromasSourceSelectProps> = ({sourceProps, ...props}) => {
	return <InventoryAromasSource {...sourceProps}>
		<QuerySourceSelect<IAroma> {...props}/>
	</InventoryAromasSource>;
};

export const useInventoryAromasQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([InventoryAromasApiLink]);
}
