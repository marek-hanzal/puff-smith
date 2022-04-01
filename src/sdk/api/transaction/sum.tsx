/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITransactionQuery} from "@/puff-smith/service/transaction";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {IQueryFilter, IQueryOrderBy} from "@leight-core/api";
import {
	createPromiseHook,
	createQueryHook,
	FilterProvider,
	IFilterProviderProps,
	IOrderByProviderProps,
	ISourceControlProviderProps,
	OrderByProvider,
	SourceControlProvider,
	useFilterContext,
	useLinkContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOrderByContext
} from "@leight-core/client";

export const SumApiLink = "/api/transaction/sum";

export type ISumQueryParams = undefined;

export const useSumQuery = createQueryHook<ITransactionQuery, number, ISumQueryParams>(SumApiLink, "post");

export const useSumLink = (): ((queryParams?: ISumQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(SumApiLink, queryParams);
}

export const useSumPromise = createPromiseHook<ITransactionQuery, number, ISumQueryParams>(SumApiLink, "post");

export interface ISumFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ITransactionQuery>>> {
}

export const SumFilterProvider: FC<ISumFilterProviderProps> = props => <FilterProvider<IQueryFilter<ITransactionQuery>> {...props}/>;

export const useSumOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ITransactionQuery>>()
export const useSumFilterContext = () => useFilterContext<IQueryFilter<ITransactionQuery>>()

export interface ISumOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<ITransactionQuery>>> {
}

export const SumOrderByProvider: FC<ISumOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<ITransactionQuery>> {...props}/>;

export const useSumOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<ITransactionQuery>>()
export const useSumOrderByContext = () => useOrderByContext<IQueryFilter<ITransactionQuery>>()

export interface ISumSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ITransactionQuery>, IQueryOrderBy<ITransactionQuery>, ISumQueryParams>> {
}

export const SumSourceControlProvider: FC<ISumSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ITransactionQuery>, IQueryOrderBy<ITransactionQuery>> {...props}/>;

export const useSumQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([SumApiLink]);
}
