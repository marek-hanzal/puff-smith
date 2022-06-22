/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITransactionSource} from "@/puff-smith/service/transaction/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, ISourceContext, ISourceItem, ISourceQuery, IToOptionMapper} from "@leight-core/api";
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
export const TransactionCountApiLink = "/api/transaction/query/count";

export type ITransactionQueryParams = any;

export const useTransactionQuery = createQueryHook<ISourceQuery<ITransactionSource>, ISourceItem<ITransactionSource>[], ITransactionQueryParams>(TransactionApiLink, "post");
export const useTransactionCountQuery = createQueryHook<ISourceQuery<ITransactionSource>, number, ITransactionQueryParams>(TransactionCountApiLink, "post");

export const useTransactionSource = () => useSourceContext<ISourceItem<ITransactionSource>>();

export interface ITransactionSourceContext extends ISourceContext<ISourceItem<ITransactionSource>> {
}

export interface ITransactionSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ITransactionSource>>> {
}

export const TransactionSourceConsumer: FC<ITransactionSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITransactionProviderProps extends Partial<ISourceProviderProps<ISourceItem<ITransactionSource>>> {
}

export const TransactionProvider: FC<ITransactionProviderProps> = props => {
	return <SourceProvider<ISourceItem<ITransactionSource>>
		name={"Transaction"}
		useQuery={useTransactionQuery}
		useCountQuery={useTransactionCountQuery}
		{...props}
	/>;
};

export const toTransactionLink = (queryParams?: ITransactionQueryParams) => toLink(TransactionApiLink, queryParams);
export const useTransactionLink = () => toTransactionLink;

export const useTransactionPromise = createPromiseHook<ISourceQuery<ITransactionSource>, ISourceItem<ITransactionSource>, ITransactionQueryParams>(TransactionApiLink, "post");
export const TransactionPromise = createPromise<ISourceQuery<ITransactionSource>, ISourceItem<ITransactionSource>, ITransactionQueryParams>(TransactionApiLink, "post");

export interface ITransactionFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ITransactionSource>>>> {
}

export const TransactionFilterProvider: FC<ITransactionFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ITransactionSource>>> name={"Transaction"} {...props}/>;

export const useTransactionOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ITransactionSource>>>();
export const useTransactionFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ITransactionSource>>>();

export interface ITransactionProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ITransactionSource>>> {
}

export const TransactionProviderFilter: FC<ITransactionProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Transaction"}
/>;

export interface ITransactionOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ITransactionSource>>>> {
}

export const TransactionOrderByProvider: FC<ITransactionOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ITransactionSource>>> name={"Transaction"} {...props}/>;

export const useTransactionOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ITransactionSource>>>();
export const useTransactionOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ITransactionSource>>>();

export interface ITransactionProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ITransactionSource>>, IQueryOrderBy<ISourceQuery<ITransactionSource>>, ITransactionQueryParams>> {
}

export const TransactionProviderControl: FC<ITransactionProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<ITransactionSource>>, IQueryOrderBy<ISourceQuery<ITransactionSource>>> name={"Transaction"} {...props}/>;

export interface ITransactionListSourceProps extends Partial<IListProps<ISourceItem<ITransactionSource>>> {
	providerProps?: Partial<ITransactionProviderProps>;
}

export const TransactionListSource: FC<ITransactionListSourceProps> = ({providerProps, ...props}) => {
	return <TransactionProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ITransactionSource>>
			{...props}
		/>
	</TransactionProvider>;
}

export interface ITransactionSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ITransactionSource>> {
	toOption: IToOptionMapper<ISourceItem<ITransactionSource>>;
	providerProps?: Partial<ITransactionProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const TransactionSourceSelect: FC<ITransactionSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<TransactionProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ITransactionSource>> {...props}/>
				</TransactionProvider>
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
					<TransactionProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</TransactionProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ITransactionSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ITransactionSource>>> {
}

export const TransactionSelectionProvider: FC<ITransactionSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ITransactionSource>> {...props}/>;
}

export const useTransactionCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TransactionCountApiLink]);
};

export const useTransactionQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([TransactionApiLink]),
		withCount && queryClient.invalidateQueries([TransactionCountApiLink]),
	]);
};

export const useTransactionOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ITransactionSource>>();
export const useTransactionSelectionContext = () => useSelectionContext<ISourceItem<ITransactionSource>>();
