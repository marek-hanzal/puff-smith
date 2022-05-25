/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
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

export const CellInventoryApiLink = "/api/cell/inventory/query";

export type ICellInventoryQueryParams = undefined;

export const useCellInventoryQuery = createQueryHook<ISourceQuery<ICellInventorySource>, ISourceItem<ICellInventorySource>[], ICellInventoryQueryParams>(CellInventoryApiLink, "post");

export const useCellInventorySource = () => useSourceContext<ISourceItem<ICellInventorySource>>();

export interface ICellInventorySourceContext extends ISourceContext<ISourceItem<ICellInventorySource>> {
}

export interface ICellInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICellInventorySource>>> {
}

export const CellInventorySourceConsumer: FC<ICellInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICellInventorySource>>> {
}

export const CellInventoryProvider: FC<ICellInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICellInventorySource>>
		name={"CellInventory"}
		useQuery={useCellInventoryQuery}
		{...props}
	/>;
};

export const toCellInventoryLink = (queryParams?: ICellInventoryQueryParams) => toLink(CellInventoryApiLink, queryParams);
export const useCellInventoryLink = () => toCellInventoryLink;

export const useCellInventoryPromise = createPromiseHook<ISourceQuery<ICellInventorySource>, ISourceItem<ICellInventorySource>, ICellInventoryQueryParams>(CellInventoryApiLink, "post");
export const CellInventoryPromise = createPromise<ISourceQuery<ICellInventorySource>, ISourceItem<ICellInventorySource>, ICellInventoryQueryParams>(CellInventoryApiLink, "post");

export interface ICellInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICellInventorySource>>>> {
}

export const CellInventoryFilterProvider: FC<ICellInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICellInventorySource>>> name={"CellInventory"} {...props}/>;

export const useCellInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICellInventorySource>>>();
export const useCellInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICellInventorySource>>>();

export interface ICellInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICellInventorySource>>> {
}

export const CellInventoryProviderFilter: FC<ICellInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CellInventory"}
/>;

export interface ICellInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICellInventorySource>>>> {
}

export const CellInventoryOrderByProvider: FC<ICellInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICellInventorySource>>> name={"CellInventory"} {...props}/>;

export const useCellInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICellInventorySource>>>();
export const useCellInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICellInventorySource>>>();

export interface ICellInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICellInventorySource>>, IQueryOrderBy<ISourceQuery<ICellInventorySource>>, ICellInventoryQueryParams>> {
}

export const CellInventoryProviderControl: FC<ICellInventoryProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<ICellInventorySource>>, IQueryOrderBy<ISourceQuery<ICellInventorySource>>> name={"CellInventory"} {...props}/>;

export interface ICellInventoryListSourceProps extends Partial<IListProps<ISourceItem<ICellInventorySource>>> {
	providerProps?: Partial<ICellInventoryProviderProps>;
}

export const CellInventoryListSource: FC<ICellInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <CellInventoryProvider
		{...providerProps}
	>
		<List<ISourceItem<ICellInventorySource>>
			{...props}
		/>
	</CellInventoryProvider>;
}

export interface ICellInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICellInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<ICellInventorySource>>;
	providerProps?: Partial<ICellInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellInventorySourceSelect: FC<ICellInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICellInventorySource>> {...props}/>
				</CellInventoryProvider>
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
					<CellInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CellInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICellInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICellInventorySource>>> {
}

export const CellInventorySelectionProvider: FC<ICellInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICellInventorySource>> {...props}/>;
}

export const useCellInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellInventoryApiLink]);
};

export const useCellInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICellInventorySource>>();
export const useCellInventorySelectionContext = () => useSelectionContext<ISourceItem<ICellInventorySource>>();
