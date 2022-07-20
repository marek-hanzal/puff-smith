/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellSource} from "@/puff-smith/service/cell/interface";
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
	IInfiniteListProps,
	IListProps,
	InfiniteList,
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
import {useQueryClient} from "@tanstack/react-query";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";

export const CellApiLink = "/api/cell/query";
export const CellCountApiLink = "/api/cell/query/count";

export type ICellQueryParams = any;

export const useCellQuery = createQueryHook<ISourceQuery<ICellSource>, ISourceItem<ICellSource>[], ICellQueryParams>(CellApiLink, "post");
export const useCellCountQuery = createQueryHook<ISourceQuery<ICellSource>, number, ICellQueryParams>(CellCountApiLink, "post");

export const useCellSource = () => useSourceContext<ISourceItem<ICellSource>>()

export interface ICellSourceContext extends ISourceContext<ISourceItem<ICellSource>> {
}

export interface ICellSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICellSource>>> {
}

export const CellSourceConsumer: FC<ICellSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICellSource>>> {
}

export const CellProvider: FC<ICellProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICellSource>>
		name={"Cell"}
		useQuery={useCellQuery}
		useCountQuery={useCellCountQuery}
		{...props}
	/>;
};

export const toCellLink = (queryParams?: ICellQueryParams) => toLink(CellApiLink, queryParams);
export const useCellLink = () => toCellLink;

export const useCellPromise = createPromiseHook<ISourceQuery<ICellSource>, ISourceItem<ICellSource>, ICellQueryParams>(CellApiLink, "post");
export const CellPromise = createPromise<ISourceQuery<ICellSource>, ISourceItem<ICellSource>, ICellQueryParams>(CellApiLink, "post");

export interface ICellFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICellSource>>>> {
}

export const CellFilterProvider: FC<ICellFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICellSource>>> name={"Cell"} {...props}/>;

export const useCellOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICellSource>>>()
export const useCellFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICellSource>>>()

export interface ICellProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICellSource>>> {
}

export const CellProviderFilter: FC<ICellProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Cell'}
/>;

export interface ICellOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICellSource>>>> {
}

export const CellOrderByProvider: FC<ICellOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICellSource>>> name={"Cell"} {...props}/>;

export const useCellOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICellSource>>>()
export const useCellOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICellSource>>>()

export interface ICellProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICellSource>>, IQueryOrderBy<ISourceQuery<ICellSource>>, ICellQueryParams>> {
}

export const CellProviderControl: FC<ICellProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICellSource>>, IQueryOrderBy<ISourceQuery<ICellSource>>> name={"Cell"} {...props}/>;

export interface ICellListSourceProps extends Partial<IListProps<ISourceItem<ICellSource>>> {
	providerProps?: Partial<ICellProviderProps>;
}

export const CellListSource: FC<ICellListSourceProps> = ({providerProps, ...props}) => {
	return <CellProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<ICellSource>>
			{...props}
		/>
	</CellProvider>;
}

export interface ICellInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<ICellSource>>> {
	providerProps?: Partial<ICellProviderProps>;
}

export const CellInfiniteListSource: FC<ICellInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <CellProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<ICellSource>>
			{...props}
		/>
	</CellProvider>;
}

export interface ICellSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICellSource>> {
	toOption: IToOptionMapper<ISourceItem<ICellSource>>;
	providerProps?: Partial<ICellProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellSourceSelect: FC<ICellSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICellSource>> {...props}/>
				</CellProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Cell.title"}
					size={props.size}
					tooltip={"common.selection.Cell.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<CellProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CellProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICellSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICellSource>>> {
}

export const CellSelectionProvider: FC<ICellSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICellSource>> {...props}/>
}

export const useCellCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellCountApiLink]);
};

export const useCellQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([CellApiLink]),
		withCount && queryClient.invalidateQueries([CellCountApiLink]),
	]);
};

export const useCellOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICellSource>>();
export const useCellSelectionContext = () => useSelectionContext<ISourceItem<ICellSource>>();
