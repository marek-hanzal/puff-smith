/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITransaction, ITransactionQuery} from "@/puff-smith/service/transaction/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerButton,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IListProps,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISelectionProviderProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
} from "@leight-core/client";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";
import {useQueryClient} from "react-query";

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
		name={"Transactions"}
		useQuery={useTransactionsQuery}
		{...props}
	/>;
};

export const toTransactionsLink = (queryParams?: ITransactionsQueryParams) => toLink(TransactionsApiLink, queryParams);
export const useTransactionsLink = () => toTransactionsLink;

export const useTransactionsPromise = createPromiseHook<ITransactionQuery, ITransaction, ITransactionsQueryParams>(TransactionsApiLink, "post");
export const TransactionsPromise = createPromise<ITransactionQuery, ITransaction, ITransactionsQueryParams>(TransactionsApiLink, "post");

export interface ITransactionsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ITransactionQuery>>> {
}

export const TransactionsFilterProvider: FC<ITransactionsFilterProviderProps> = props => <FilterProvider<IQueryFilter<ITransactionQuery>> name={"Transactions"} {...props}/>;

export const useTransactionsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ITransactionQuery>>()
export const useTransactionsFilterContext = () => useFilterContext<IQueryFilter<ITransactionQuery>>()

export interface ITransactionsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ITransactionQuery>> {
}

export const TransactionsSourceFilter: FC<ITransactionsSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Transactions'}
/>;

export interface ITransactionsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ITransactionQuery>>> {
}

export const TransactionsOrderByProvider: FC<ITransactionsOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ITransactionQuery>> name={"Transactions"} {...props}/>;

export const useTransactionsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ITransactionQuery>>()
export const useTransactionsOrderByContext = () => useOrderByContext<IQueryOrderBy<ITransactionQuery>>()

export interface ITransactionsListSourceProps extends Partial<IListProps<ITransaction>> {
	sourceProps?: Partial<ITransactionsSourceProps>;
}

export interface ITransactionsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ITransactionQuery>, IQueryOrderBy<ITransactionQuery>, ITransactionsQueryParams>> {
}

export const TransactionsSourceControlProvider: FC<ITransactionsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ITransactionQuery>, IQueryOrderBy<ITransactionQuery>> name={"Transactions"} {...props}/>;

export const TransactionsListSource: FC<ITransactionsListSourceProps> = ({sourceProps, ...props}) => {
	return <TransactionsSource
		{...sourceProps}
	>
		<List<ITransaction>
			{...props}
		/>
	</TransactionsSource>;
}

export interface ITransactionsSourceSelectProps extends IQuerySourceSelectProps<ITransaction> {
	toOption: IToOptionMapper<ITransaction>;
	sourceProps?: ITransactionsSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const TransactionsSourceSelect: FC<ITransactionsSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<TransactionsSource {...sourceProps}>
					<QuerySourceSelect<ITransaction> {...props}/>
				</TransactionsSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Transactions.title"}
					size={props.size}
					tooltip={"common.selection.Transactions.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<TransactionsSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</TransactionsSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ITransactionsSelectionProviderProps extends Partial<ISelectionProviderProps<ITransaction>> {
}

export const TransactionsSelectionProvider: FC<ITransactionsSelectionProviderProps> = props => {
	return <SelectionProvider<ITransaction> {...props}/>;
};

export const useTransactionsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TransactionsApiLink]);
};

export const useTransactionsOptionalSelectionContext = () => useOptionalSelectionContext<ITransaction>();
export const useTransactionsSelectionContext = () => useSelectionContext<ITransaction>();
