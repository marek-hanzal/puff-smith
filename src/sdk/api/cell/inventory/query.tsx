/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInventory, ICellInventoryQuery} from "@/puff-smith/service/cell/inventory/interface";
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

export const CellInventoryApiLink = "/api/cell/inventory/query";

export type ICellInventoryQueryParams = undefined;

export const useCellInventoryQuery = createQueryHook<ICellInventoryQuery, IQueryResult<ICellInventory>, ICellInventoryQueryParams>(CellInventoryApiLink, "post");

export const useCellInventorySource = () => useSourceContext<ICellInventory>();

export interface ICellInventorySourceContext extends ISourceContext<ICellInventory> {
}

export interface ICellInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ICellInventory>> {
}

export const CellInventorySourceConsumer: FC<ICellInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellInventorySourceProps extends Partial<ISourceProviderProps<ICellInventory>> {
}

export const CellInventorySource: FC<ICellInventorySourceProps> = props => {
	return <SourceProvider<ICellInventory>
		name={"CellInventory"}
		useQuery={useCellInventoryQuery}
		{...props}
	/>;
};

export const toCellInventoryLink = (queryParams?: ICellInventoryQueryParams) => toLink(CellInventoryApiLink, queryParams);
export const useCellInventoryLink = () => toCellInventoryLink;

export const useCellInventoryPromise = createPromiseHook<ICellInventoryQuery, ICellInventory, ICellInventoryQueryParams>(CellInventoryApiLink, "post");
export const CellInventoryPromise = createPromise<ICellInventoryQuery, ICellInventory, ICellInventoryQueryParams>(CellInventoryApiLink, "post");

export interface ICellInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICellInventoryQuery>>> {
}

export const CellInventoryFilterProvider: FC<ICellInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICellInventoryQuery>> name={"CellInventory"} {...props}/>;

export const useCellInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICellInventoryQuery>>();
export const useCellInventoryFilterContext = () => useFilterContext<IQueryFilter<ICellInventoryQuery>>();

export interface ICellInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICellInventoryQuery>> {
}

export const CellInventorySourceFilter: FC<ICellInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CellInventory"}
/>;

export interface ICellInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICellInventoryQuery>>> {
}

export const CellInventoryOrderByProvider: FC<ICellInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICellInventoryQuery>> name={"CellInventory"} {...props}/>;

export const useCellInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICellInventoryQuery>>();
export const useCellInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ICellInventoryQuery>>();

export interface ICellInventoryListSourceProps extends Partial<IListProps<ICellInventory>> {
	sourceProps?: Partial<ICellInventorySourceProps>;
}

export interface ICellInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICellInventoryQuery>, IQueryOrderBy<ICellInventoryQuery>, ICellInventoryQueryParams>> {
}

export const CellInventorySourceControlProvider: FC<ICellInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICellInventoryQuery>, IQueryOrderBy<ICellInventoryQuery>> name={"CellInventory"} {...props}/>;

export const CellInventoryListSource: FC<ICellInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <CellInventorySource
		{...sourceProps}
	>
		<List<ICellInventory>
			{...props}
		/>
	</CellInventorySource>;
};

export interface ICellInventorySourceSelectProps extends IQuerySourceSelectProps<ICellInventory> {
	toOption: IToOptionMapper<ICellInventory>;
	sourceProps?: ICellInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellInventorySourceSelect: FC<ICellInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellInventorySource {...sourceProps}>
					<QuerySourceSelect<ICellInventory> {...props}/>
				</CellInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.CellInventory.title"}
					size={props.size}
					tooltip={"common.selection.CellInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<CellInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CellInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICellInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ICellInventory>> {
}

export const CellInventorySelectionProvider: FC<ICellInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ICellInventory> {...props}/>;
};

export const useCellInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellInventoryApiLink]);
};

export const useCellInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ICellInventory>();
export const useCellInventorySelectionContext = () => useSelectionContext<ICellInventory>();
