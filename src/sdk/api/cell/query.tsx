/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICell, ICellQuery} from "@/puff-smith/service/cell/interface";
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

export const CellsApiLink = "/api/cell/query";

export type ICellsQueryParams = undefined;

export const useCellsQuery = createQueryHook<ICellQuery, IQueryResult<ICell>, ICellsQueryParams>(CellsApiLink, "post");

export const useCellsSource = () => useSourceContext<ICell>()

export interface ICellsSourceContext extends ISourceContext<ICell> {
}

export interface ICellsSourceConsumerProps extends ConsumerProps<ISourceContext<ICell>> {
}

export const CellsSourceConsumer: FC<ICellsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellsSourceProps extends Partial<ISourceProviderProps<ICell>> {
}

export const CellsSource: FC<ICellsSourceProps> = props => {
	return <SourceProvider<ICell>
		name={"Cells"}
		useQuery={useCellsQuery}
		{...props}
	/>;
};

export const toCellsLink = (queryParams?: ICellsQueryParams) => toLink(CellsApiLink, queryParams);
export const useCellsLink = () => toCellsLink;

export const useCellsPromise = createPromiseHook<ICellQuery, ICell, ICellsQueryParams>(CellsApiLink, "post");
export const CellsPromise = createPromise<ICellQuery, ICell, ICellsQueryParams>(CellsApiLink, "post");

export interface ICellsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICellQuery>>> {
}

export const CellsFilterProvider: FC<ICellsFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICellQuery>> name={"Cells"} {...props}/>;

export const useCellsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICellQuery>>()
export const useCellsFilterContext = () => useFilterContext<IQueryFilter<ICellQuery>>()

export interface ICellsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICellQuery>> {
}

export const CellsSourceFilter: FC<ICellsSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Cells'}
/>;

export interface ICellsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICellQuery>>> {
}

export const CellsOrderByProvider: FC<ICellsOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICellQuery>> name={"Cells"} {...props}/>;

export const useCellsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICellQuery>>()
export const useCellsOrderByContext = () => useOrderByContext<IQueryOrderBy<ICellQuery>>()

export interface ICellsListSourceProps extends Partial<IListProps<ICell>> {
	sourceProps?: Partial<ICellsSourceProps>;
}

export interface ICellsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICellQuery>, IQueryOrderBy<ICellQuery>, ICellsQueryParams>> {
}

export const CellsSourceControlProvider: FC<ICellsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICellQuery>, IQueryOrderBy<ICellQuery>> name={"Cells"} {...props}/>;

export const CellsListSource: FC<ICellsListSourceProps> = ({sourceProps, ...props}) => {
	return <CellsSource
		{...sourceProps}
	>
		<List<ICell>
			{...props}
		/>
	</CellsSource>;
}

export interface ICellsSourceSelectProps extends IQuerySourceSelectProps<ICell> {
	toOption: IToOptionMapper<ICell>;
	sourceProps?: ICellsSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellsSourceSelect: FC<ICellsSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellsSource {...sourceProps}>
					<QuerySourceSelect<ICell> {...props}/>
				</CellsSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Cells.title"}
					size={props.size}
					tooltip={"common.selection.Cells.title.tooltip"}
					width={800}
				>
					<CellsSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CellsSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useCellsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellsApiLink]);
};

export const useCellsOptionalSelectionContext = () => useOptionalSelectionContext<ICell>();
export const useCellsSelectionContext = () => useSelectionContext<ICell>();
