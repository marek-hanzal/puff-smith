import {ITransaction, ITransactionFilter, ITransactionOrderBy, ITransactionQuery} from "@/puff-smith/service/transaction";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
import {IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const TransactionsApiLink = "/api/transaction/query";

export type ITransactionsQueryParams = undefined;

export const useTransactionsQuery = createQueryHook<ITransactionQuery, IQueryResult<ITransaction>, ITransactionsQueryParams>(TransactionsApiLink, "post");

export const useTransactionsSource = () => useSourceContext<ITransaction>()

export interface ITransactionsSourceContext extends ISourceContext<ITransaction> {
}

export interface ITransactionsSourceConsumerProps extends ConsumerProps<ISourceContext<ITransaction>> {
}

export const TransactionsSourceConsumer: FC<ITransactionsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITransactionsSourceProps extends Partial<ISourceProviderProps<ITransaction>> {
}

export const TransactionsSource: FC<ITransactionsSourceProps> = props => {
	return <SourceProvider<ITransaction>
		useQuery={useTransactionsQuery}
		{...props}
	/>;
}

export const useTransactionsLink = (): ((queryParams?: ITransactionsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(TransactionsApiLink, queryParams);
}

export const useTransactionsPromise = createPromiseHook<ITransactionQuery, ITransaction, ITransactionsQueryParams>(TransactionsApiLink, "post");

export interface ITransactionsFilterProviderProps extends Partial<IFilterProviderProps<ITransactionFilter>> {
}

export const TransactionsFilterProvider: FC<ITransactionsFilterProviderProps> = props => <FilterProvider<ITransactionFilter> {...props}/>;

export const useTransactionsOptionalFilterContext = () => useOptionalFilterContext<ITransactionFilter>()
export const useTransactionsFilterContext = () => useFilterContext<ITransactionFilter>()

export interface ITransactionsSourceFilterProps extends IFilterWithoutTranslationProps<ITransactionFilter> {
}

export const TransactionsSourceFilter: FC<ITransactionsSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Transactions'}
/>;

export interface ITransactionsOrderByProviderProps extends Partial<IOrderByProviderProps<ITransactionFilter>> {
}

export const TransactionsOrderByProvider: FC<ITransactionsOrderByProviderProps> = props => <OrderByProvider<ITransactionFilter> {...props}/>;

export const useTransactionsOptionalOrderByContext = () => useOptionalOrderByContext<ITransactionFilter>()
export const useTransactionsOrderByContext = () => useOrderByContext<ITransactionFilter>()

export interface ITransactionsListSourceProps extends Partial<IListProps<ITransaction>> {
	sourceProps?: Partial<ITransactionsSourceProps>;
}

export interface ITransactionsSourceControlProviderProps extends Partial<ISourceControlProviderProps<ITransactionFilter, ITransactionOrderBy, ITransactionsQueryParams>> {
}

export const TransactionsSourceControlProvider: FC<ITransactionsSourceControlProviderProps> = props => <SourceControlProvider<ITransactionFilter, ITransactionOrderBy> {...props}/>;

export const TransactionsListSource: FC<ITransactionsListSourceProps> = ({sourceProps, ...props}) => {
	return <TransactionsSource
		{...sourceProps}
	>
		<List<ITransaction>
			{...props}
		/>
	</TransactionsSource>
}

export interface ITransactionsSourceSelectProps extends IQuerySourceSelectProps<ITransaction> {
	toOption: IToOptionMapper<ITransaction>;
	sourceProps?: ITransactionsSourceProps;
}

export const TransactionsSourceSelect: FC<ITransactionsSourceSelectProps> = ({sourceProps, ...props}) => {
	return <TransactionsSource {...sourceProps}>
		<QuerySourceSelect<ITransaction> {...props}/>
	</TransactionsSource>;
};

export const useTransactionsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TransactionsApiLink]);
}
