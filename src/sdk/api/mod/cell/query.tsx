/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import {ITag} from "@/puff-smith/service/tag/interface";
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

export const CellApiLink = "/api/mod/cell/query";

export type ICellQueryParams = undefined;

export const useCellQuery = createQueryHook<IAtomizerQuery, IQueryResult<ITag>, ICellQueryParams>(CellApiLink, "post");

export const useCellSource = () => useSourceContext<ITag>();

export interface ICellSourceContext extends ISourceContext<ITag> {
}

export interface ICellSourceConsumerProps extends ConsumerProps<ISourceContext<ITag>> {
}

export const CellSourceConsumer: FC<ICellSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellSourceProps extends Partial<ISourceProviderProps<ITag>> {
}

export const CellSource: FC<ICellSourceProps> = props => {
	return <SourceProvider<ITag>
		name={"Cell"}
		useQuery={useCellQuery}
		{...props}
	/>;
};

export const toCellLink = (queryParams?: ICellQueryParams) => toLink(CellApiLink, queryParams);
export const useCellLink = () => toCellLink;

export const useCellPromise = createPromiseHook<IAtomizerQuery, ITag, ICellQueryParams>(CellApiLink, "post");
export const CellPromise = createPromise<IAtomizerQuery, ITag, ICellQueryParams>(CellApiLink, "post");

export interface ICellFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAtomizerQuery>>> {
}

export const CellFilterProvider: FC<ICellFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAtomizerQuery>> name={"Cell"} {...props}/>;

export const useCellOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAtomizerQuery>>();
export const useCellFilterContext = () => useFilterContext<IQueryFilter<IAtomizerQuery>>();

export interface ICellSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAtomizerQuery>> {
}

export const CellSourceFilter: FC<ICellSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Cell"}
/>;

export interface ICellOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAtomizerQuery>>> {
}

export const CellOrderByProvider: FC<ICellOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAtomizerQuery>> name={"Cell"} {...props}/>;

export const useCellOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAtomizerQuery>>();
export const useCellOrderByContext = () => useOrderByContext<IQueryOrderBy<IAtomizerQuery>>();

export interface ICellListSourceProps extends Partial<IListProps<ITag>> {
	sourceProps?: Partial<ICellSourceProps>;
}

export interface ICellSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAtomizerQuery>, IQueryOrderBy<IAtomizerQuery>, ICellQueryParams>> {
}

export const CellSourceControlProvider: FC<ICellSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAtomizerQuery>, IQueryOrderBy<IAtomizerQuery>> name={"Cell"} {...props}/>;

export const CellListSource: FC<ICellListSourceProps> = ({sourceProps, ...props}) => {
	return <CellSource
		{...sourceProps}
	>
		<List<ITag>
			{...props}
		/>
	</CellSource>;
}

export interface ICellSourceSelectProps extends IQuerySourceSelectProps<ITag> {
	toOption: IToOptionMapper<ITag>;
	sourceProps?: ICellSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellSourceSelect: FC<ICellSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellSource {...sourceProps}>
					<QuerySourceSelect<ITag> {...props}/>
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

export interface ICellSelectionProviderProps extends Partial<ISelectionProviderProps<ITag>> {
}

export const CellSelectionProvider: FC<ICellSelectionProviderProps> = props => {
	return <SelectionProvider<ITag> {...props}/>;
}

export const useCellQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellApiLink]);
};

export const useCellOptionalSelectionContext = () => useOptionalSelectionContext<ITag>();
export const useCellSelectionContext = () => useSelectionContext<ITag>();
