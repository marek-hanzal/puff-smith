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

export const CellApiLink = "/api/cell/query";

export type ICellQueryParams = undefined;

export const useCellQuery = createQueryHook<ICellQuery, IQueryResult<ICell>, ICellQueryParams>(CellApiLink, "post");

export const useCellSource = () => useSourceContext<ICell>();

export interface ICellSourceContext extends ISourceContext<ICell> {
}

export interface ICellSourceConsumerProps extends ConsumerProps<ISourceContext<ICell>> {
}

export const CellSourceConsumer: FC<ICellSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellSourceProps extends Partial<ISourceProviderProps<ICell>> {
}

export const CellSource: FC<ICellSourceProps> = props => {
	return <SourceProvider<ICell>
		name={"Cell"}
		useQuery={useCellQuery}
		{...props}
	/>;
};

export const toCellLink = (queryParams?: ICellQueryParams) => toLink(CellApiLink, queryParams);
export const useCellLink = () => toCellLink;

export const useCellPromise = createPromiseHook<ICellQuery, ICell, ICellQueryParams>(CellApiLink, "post");
export const CellPromise = createPromise<ICellQuery, ICell, ICellQueryParams>(CellApiLink, "post");

export interface ICellFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICellQuery>>> {
}

export const CellFilterProvider: FC<ICellFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICellQuery>> name={"Cell"} {...props}/>;

export const useCellOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICellQuery>>();
export const useCellFilterContext = () => useFilterContext<IQueryFilter<ICellQuery>>();

export interface ICellSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICellQuery>> {
}

export const CellSourceFilter: FC<ICellSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Cell"}
/>;

export interface ICellOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICellQuery>>> {
}

export const CellOrderByProvider: FC<ICellOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICellQuery>> name={"Cell"} {...props}/>;

export const useCellOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICellQuery>>();
export const useCellOrderByContext = () => useOrderByContext<IQueryOrderBy<ICellQuery>>();

export interface ICellListSourceProps extends Partial<IListProps<ICell>> {
	sourceProps?: Partial<ICellSourceProps>;
}

export interface ICellSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICellQuery>, IQueryOrderBy<ICellQuery>, ICellQueryParams>> {
}

export const CellSourceControlProvider: FC<ICellSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICellQuery>, IQueryOrderBy<ICellQuery>> name={"Cell"} {...props}/>;

export const CellListSource: FC<ICellListSourceProps> = ({sourceProps, ...props}) => {
	return <CellSource
		{...sourceProps}
	>
		<List<ICell>
			{...props}
		/>
	</CellSource>;
};

export interface ICellSourceSelectProps extends IQuerySourceSelectProps<ICell> {
	toOption: IToOptionMapper<ICell>;
	sourceProps?: ICellSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellSourceSelect: FC<ICellSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellSource {...sourceProps}>
					<QuerySourceSelect<ICell> {...props}/>
				</CellSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Cell.title"}
					size={props.size}
					tooltip={"common.selection.Cell.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<CellSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CellSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICellSelectionProviderProps extends Partial<ISelectionProviderProps<ICell>> {
}

export const CellSelectionProvider: FC<ICellSelectionProviderProps> = props => {
	return <SelectionProvider<ICell> {...props}/>;
};

export const useCellQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellApiLink]);
};

export const useCellOptionalSelectionContext = () => useOptionalSelectionContext<ICell>();
export const useCellSelectionContext = () => useSelectionContext<ICell>();
