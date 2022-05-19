/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITransactionQuery} from "@/puff-smith/service/transaction/interface";
import {IQueryFilter, IQueryOrderBy} from "@leight-core/api";
import {
	createPromise,
	createPromiseHook,
	createQueryHook,
	FilterProvider,
	IFilterProviderProps,
	IOrderByProviderProps,
	ISourceControlProviderProps,
	OrderByProvider,
	SourceControlProvider,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOrderByContext
} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const SumApiLink = "/api/transaction/sum";

export type ISumQueryParams = undefined;

export const useSumQuery = createQueryHook<ITransactionQuery, number, ISumQueryParams>(SumApiLink, "post");

export const toSumLink = (queryParams?: ISumQueryParams) => toLink(SumApiLink, queryParams);
export const useSumLink = () => toSumLink;

export const useSumPromise = createPromiseHook<ITransactionQuery, number, ISumQueryParams>(SumApiLink, "post");

export const SumPromise = createPromise<ITransactionQuery, number, ISumQueryParams>(SumApiLink, "post");

export interface ISumFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ITransactionQuery>>> {
}

export const SumFilterProvider: FC<ISumFilterProviderProps> = props => <FilterProvider<IQueryFilter<ITransactionQuery>> name={"Sum"} {...props}/>;

export const useSumOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ITransactionQuery>>()
export const useSumFilterContext = () => useFilterContext<IQueryFilter<ITransactionQuery>>()

export interface ISumOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ITransactionQuery>>> {
}

export const SumOrderByProvider: FC<ISumOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ITransactionQuery>> name={"Sum"} {...props}/>;

export const useSumOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ITransactionQuery>>()
export const useSumOrderByContext = () => useOrderByContext<IQueryOrderBy<ITransactionQuery>>()

export interface ISumSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ITransactionQuery>, IQueryOrderBy<ITransactionQuery>, ISumQueryParams>> {
}

export const SumSourceControlProvider: FC<ISumSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ITransactionQuery>, IQueryOrderBy<ITransactionQuery>> name={"Sum"} {...props}/>;

export const useSumQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([SumApiLink]);
}
