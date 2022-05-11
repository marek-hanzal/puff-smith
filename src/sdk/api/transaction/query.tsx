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

export const TransactionApiLink = "/api/transaction/query";

export type ITransactionQueryParams = undefined;

export const useTransactionQuery = createQueryHook<ITransactionQuery, IQueryResult<ITransaction>, ITransactionQueryParams>(TransactionApiLink, "post");

export const useTransactionSource = () => useSourceContext<ITransaction>();

export interface ITransactionSourceContext extends ISourceContext<ITransaction> {
}

export interface ITransactionSourceConsumerProps extends ConsumerProps<ISourceContext<ITransaction>> {
}

export const TransactionSourceConsumer: FC<ITransactionSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITransactionSourceProps extends Partial<ISourceProviderProps<ITransaction>> {
}

export const TransactionSource: FC<ITransactionSourceProps> = props => {
	return <SourceProvider<ITransaction>
		name={"Transaction"}
		useQuery={useTransactionQuery}
		{...props}
	/>;
};

export const toTransactionLink = (queryParams?: ITransactionQueryParams) => toLink(TransactionApiLink, queryParams);
export const useTransactionLink = () => toTransactionLink;

export const useTransactionPromise = createPromiseHook<ITransactionQuery, ITransaction, ITransactionQueryParams>(TransactionApiLink, "post");
export const TransactionPromise = createPromise<ITransactionQuery, ITransaction, ITransactionQueryParams>(TransactionApiLink, "post");

export interface ITransactionFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ITransactionQuery>>> {
}

export const TransactionFilterProvider: FC<ITransactionFilterProviderProps> = props => <FilterProvider<IQueryFilter<ITransactionQuery>> name={"Transaction"} {...props}/>;

export const useTransactionOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ITransactionQuery>>();
export const useTransactionFilterContext = () => useFilterContext<IQueryFilter<ITransactionQuery>>();

export interface ITransactionSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ITransactionQuery>> {
}

export const TransactionSourceFilter: FC<ITransactionSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Transaction"}
/>;

export interface ITransactionOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ITransactionQuery>>> {
}

export const TransactionOrderByProvider: FC<ITransactionOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ITransactionQuery>> name={"Transaction"} {...props}/>;

export const useTransactionOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ITransactionQuery>>();
export const useTransactionOrderByContext = () => useOrderByContext<IQueryOrderBy<ITransactionQuery>>();

export interface ITransactionListSourceProps extends Partial<IListProps<ITransaction>> {
	sourceProps?: Partial<ITransactionSourceProps>;
}

export interface ITransactionSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ITransactionQuery>, IQueryOrderBy<ITransactionQuery>, ITransactionQueryParams>> {
}

export const TransactionSourceControlProvider: FC<ITransactionSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ITransactionQuery>, IQueryOrderBy<ITransactionQuery>> name={"Transaction"} {...props}/>;

export const TransactionListSource: FC<ITransactionListSourceProps> = ({sourceProps, ...props}) => {
	return <TransactionSource
		{...sourceProps}
	>
		<List<ITransaction>
			{...props}
		/>
	</TransactionSource>;
}

export interface ITransactionSourceSelectProps extends IQuerySourceSelectProps<ITransaction> {
	toOption: IToOptionMapper<ITransaction>;
	sourceProps?: ITransactionSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const TransactionSourceSelect: FC<ITransactionSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<TransactionSource {...sourceProps}>
					<QuerySourceSelect<ITransaction> {...props}/>
				</TransactionSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Transaction.title"}
					size={props.size}
					tooltip={"common.selection.Transaction.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<TransactionSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</TransactionSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ITransactionSelectionProviderProps extends Partial<ISelectionProviderProps<ITransaction>> {
}

export const TransactionSelectionProvider: FC<ITransactionSelectionProviderProps> = props => {
	return <SelectionProvider<ITransaction> {...props}/>;
}

export const useTransactionQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TransactionApiLink]);
};

export const useTransactionOptionalSelectionContext = () => useOptionalSelectionContext<ITransaction>();
export const useTransactionSelectionContext = () => useSelectionContext<ITransaction>();
