/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVoucherInventory, IVoucherInventoryQuery} from "@/puff-smith/service/voucher";
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

export const VouchersInventoryApiLink = "/api/voucher/inventory/query";

export type IVouchersInventoryQueryParams = undefined;

export const useVouchersInventoryQuery = createQueryHook<IVoucherInventoryQuery, IQueryResult<IVoucherInventory>, IVouchersInventoryQueryParams>(VouchersInventoryApiLink, "post");

export const useVouchersInventorySource = () => useSourceContext<IVoucherInventory>();

export interface IVouchersInventorySourceContext extends ISourceContext<IVoucherInventory> {
}

export interface IVouchersInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IVoucherInventory>> {
}

export const VouchersInventorySourceConsumer: FC<IVouchersInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVouchersInventorySourceProps extends Partial<ISourceProviderProps<IVoucherInventory>> {
}

export const VouchersInventorySource: FC<IVouchersInventorySourceProps> = props => {
	return <SourceProvider<IVoucherInventory>
		name={"VouchersInventory"}
		useQuery={useVouchersInventoryQuery}
		{...props}
	/>;
}

export const useVouchersInventoryLink = (): ((queryParams?: IVouchersInventoryQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(VouchersInventoryApiLink, queryParams);
}

export const useVouchersInventoryPromise = createPromiseHook<IVoucherInventoryQuery, IVoucherInventory, IVouchersInventoryQueryParams>(VouchersInventoryApiLink, "post");

export interface IVouchersInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IVoucherInventoryQuery>>> {
}

export const VouchersInventoryFilterProvider: FC<IVouchersInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IVoucherInventoryQuery>> name={"VouchersInventory"} {...props}/>;

export const useVouchersInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IVoucherInventoryQuery>>();
export const useVouchersInventoryFilterContext = () => useFilterContext<IQueryFilter<IVoucherInventoryQuery>>();

export interface IVouchersInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IVoucherInventoryQuery>> {
}

export const VouchersInventorySourceFilter: FC<IVouchersInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.VouchersInventory"}
/>;

export interface IVouchersInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IVoucherInventoryQuery>>> {
}

export const VouchersInventoryOrderByProvider: FC<IVouchersInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IVoucherInventoryQuery>> name={"VouchersInventory"} {...props}/>;

export const useVouchersInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IVoucherInventoryQuery>>();
export const useVouchersInventoryOrderByContext = () => useOrderByContext<IQueryFilter<IVoucherInventoryQuery>>();

export interface IVouchersInventoryListSourceProps extends Partial<IListProps<IVoucherInventory>> {
	sourceProps?: Partial<IVouchersInventorySourceProps>;
}

export interface IVouchersInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IVoucherInventoryQuery>, IQueryOrderBy<IVoucherInventoryQuery>, IVouchersInventoryQueryParams>> {
}

export const VouchersInventorySourceControlProvider: FC<IVouchersInventorySourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<IVoucherInventoryQuery>, IQueryOrderBy<IVoucherInventoryQuery>> name={"VouchersInventory"} {...props}/>;

export const VouchersInventoryListSource: FC<IVouchersInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <VouchersInventorySource
		{...sourceProps}
	>
		<List<IVoucherInventory>
			{...props}
		/>
	</VouchersInventorySource>
}

export interface IVouchersInventorySourceSelectProps extends IQuerySourceSelectProps<IVoucherInventory> {
	toOption: IToOptionMapper<IVoucherInventory>;
	sourceProps?: IVouchersInventorySourceProps;
}

export const VouchersInventorySourceSelect: FC<IVouchersInventorySourceSelectProps> = ({sourceProps, ...props}) => {
	return <VouchersInventorySource {...sourceProps}>
		<QuerySourceSelect<IVoucherInventory> {...props}/>
	</VouchersInventorySource>;
};

export const useVouchersInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VouchersInventoryApiLink]);
}
