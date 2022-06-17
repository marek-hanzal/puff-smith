/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellMarketSource} from "@/puff-smith/service/cell/market/interface";
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

export const CellMarketApiLink = "/api/market/cell/query";
export const CellMarketCountApiLink = "/api/market/cell/query/count";

export type ICellMarketQueryParams = any;

export const useCellMarketQuery = createQueryHook<ISourceQuery<ICellMarketSource>, ISourceItem<ICellMarketSource>[], ICellMarketQueryParams>(CellMarketApiLink, "post");
export const useCellMarketCountQuery = createQueryHook<ISourceQuery<ICellMarketSource>, number, ICellMarketQueryParams>(CellMarketCountApiLink, "post");

export const useCellMarketSource = () => useSourceContext<ISourceItem<ICellMarketSource>>();

export interface ICellMarketSourceContext extends ISourceContext<ISourceItem<ICellMarketSource>> {
}

export interface ICellMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICellMarketSource>>> {
}

export const CellMarketSourceConsumer: FC<ICellMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellMarketProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICellMarketSource>>> {
}

export const CellMarketProvider: FC<ICellMarketProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICellMarketSource>>
		name={"CellMarket"}
		useQuery={useCellMarketQuery}
		useCountQuery={useCellMarketCountQuery}
		{...props}
	/>;
};

export const toCellMarketLink = (queryParams?: ICellMarketQueryParams) => toLink(CellMarketApiLink, queryParams);
export const useCellMarketLink = () => toCellMarketLink;

export const useCellMarketPromise = createPromiseHook<ISourceQuery<ICellMarketSource>, ISourceItem<ICellMarketSource>, ICellMarketQueryParams>(CellMarketApiLink, "post");
export const CellMarketPromise = createPromise<ISourceQuery<ICellMarketSource>, ISourceItem<ICellMarketSource>, ICellMarketQueryParams>(CellMarketApiLink, "post");

export interface ICellMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICellMarketSource>>>> {
}

export const CellMarketFilterProvider: FC<ICellMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICellMarketSource>>> name={"CellMarket"} {...props}/>;

export const useCellMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICellMarketSource>>>();
export const useCellMarketFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICellMarketSource>>>();

export interface ICellMarketProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICellMarketSource>>> {
}

export const CellMarketProviderFilter: FC<ICellMarketProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CellMarket"}
/>;

export interface ICellMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICellMarketSource>>>> {
}

export const CellMarketOrderByProvider: FC<ICellMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICellMarketSource>>> name={"CellMarket"} {...props}/>;

export const useCellMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICellMarketSource>>>();
export const useCellMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICellMarketSource>>>();

export interface ICellMarketProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICellMarketSource>>, IQueryOrderBy<ISourceQuery<ICellMarketSource>>, ICellMarketQueryParams>> {
}

export const CellMarketProviderControl: FC<ICellMarketProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICellMarketSource>>, IQueryOrderBy<ISourceQuery<ICellMarketSource>>> name={"CellMarket"} {...props}/>;

export interface ICellMarketListSourceProps extends Partial<IListProps<ISourceItem<ICellMarketSource>>> {
	providerProps?: Partial<ICellMarketProviderProps>;
}

export const CellMarketListSource: FC<ICellMarketListSourceProps> = ({providerProps, ...props}) => {
	return <CellMarketProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ICellMarketSource>>
			{...props}
		/>
	</CellMarketProvider>;
}

export interface ICellMarketSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICellMarketSource>> {
	toOption: IToOptionMapper<ISourceItem<ICellMarketSource>>;
	providerProps?: Partial<ICellMarketProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellMarketSourceSelect: FC<ICellMarketSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellMarketProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICellMarketSource>> {...props}/>
				</CellMarketProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.CellMarket.title"}
					size={props.size}
					tooltip={"common.selection.CellMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<CellMarketProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CellMarketProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICellMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICellMarketSource>>> {
}

export const CellMarketSelectionProvider: FC<ICellMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICellMarketSource>> {...props}/>;
}

export const useCellMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellMarketApiLink]);
};

export const useCellMarketCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellMarketCountApiLink]);
};

export const useCellMarketOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICellMarketSource>>();
export const useCellMarketSelectionContext = () => useSelectionContext<ISourceItem<ICellMarketSource>>();
