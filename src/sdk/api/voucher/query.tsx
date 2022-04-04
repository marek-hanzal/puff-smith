/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVoucher, IVoucherQuery} from "@/puff-smith/service/voucher";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
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

export const VouchersApiLink = "/api/voucher/query";

export type IVouchersQueryParams = undefined;

export const useVouchersQuery = createQueryHook<IVoucherQuery, IQueryResult<IVoucher>, IVouchersQueryParams>(VouchersApiLink, "post");

export const useVouchersSource = () => useSourceContext<IVoucher>()

export interface IVouchersSourceContext extends ISourceContext<IVoucher> {
}

export interface IVouchersSourceConsumerProps extends ConsumerProps<ISourceContext<IVoucher>> {
}

export const VouchersSourceConsumer: FC<IVouchersSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVouchersSourceProps extends Partial<ISourceProviderProps<IVoucher>> {
}

export const VouchersSource: FC<IVouchersSourceProps> = props => {
	return <SourceProvider<IVoucher>
		name={"Vouchers"}
		useQuery={useVouchersQuery}
		{...props}
	/>;
}

export const useVouchersLink = (): ((queryParams?: IVouchersQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(VouchersApiLink, queryParams);
}

export const useVouchersPromise = createPromiseHook<IVoucherQuery, IVoucher, IVouchersQueryParams>(VouchersApiLink, "post");

export interface IVouchersFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IVoucherQuery>>> {
}

export const VouchersFilterProvider: FC<IVouchersFilterProviderProps> = props => <FilterProvider<IQueryFilter<IVoucherQuery>> name={"Vouchers"} {...props}/>;

export const useVouchersOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IVoucherQuery>>()
export const useVouchersFilterContext = () => useFilterContext<IQueryFilter<IVoucherQuery>>()

export interface IVouchersSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IVoucherQuery>> {
}

export const VouchersSourceFilter: FC<IVouchersSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Vouchers'}
/>;

export interface IVouchersOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IVoucherQuery>>> {
}

export const VouchersOrderByProvider: FC<IVouchersOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IVoucherQuery>> name={"Vouchers"} {...props}/>;

export const useVouchersOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IVoucherQuery>>()
export const useVouchersOrderByContext = () => useOrderByContext<IQueryFilter<IVoucherQuery>>()

export interface IVouchersListSourceProps extends Partial<IListProps<IVoucher>> {
	sourceProps?: Partial<IVouchersSourceProps>;
}

export interface IVouchersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IVoucherQuery>, IQueryOrderBy<IVoucherQuery>, IVouchersQueryParams>> {
}

export const VouchersSourceControlProvider: FC<IVouchersSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IVoucherQuery>, IQueryOrderBy<IVoucherQuery>> name={"Vouchers"} {...props}/>;

export const VouchersListSource: FC<IVouchersListSourceProps> = ({sourceProps, ...props}) => {
	return <VouchersSource
		{...sourceProps}
	>
		<List<IVoucher>
			{...props}
		/>
	</VouchersSource>
}

export interface IVouchersSourceSelectProps extends IQuerySourceSelectProps<IVoucher> {
	toOption: IToOptionMapper<IVoucher>;
	sourceProps?: IVouchersSourceProps;
}

export const VouchersSourceSelect: FC<IVouchersSourceSelectProps> = ({sourceProps, ...props}) => {
	return <VouchersSource {...sourceProps}>
		<QuerySourceSelect<IVoucher> {...props}/>
	</VouchersSource>;
};

export const useVouchersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VouchersApiLink]);
}
