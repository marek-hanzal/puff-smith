/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellMarket, ICellMarketQuery} from "@/puff-smith/service/cell/market";
import {ReadOutlined} from "@ant-design/icons";
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

export const CellsMarketApiLink = "/api/cell/market/query";

export type ICellsMarketQueryParams = undefined;

export const useCellsMarketQuery = createQueryHook<ICellMarketQuery, IQueryResult<ICellMarket>, ICellsMarketQueryParams>(CellsMarketApiLink, "post");

export const useCellsMarketSource = () => useSourceContext<ICellMarket>();

export interface ICellsMarketSourceContext extends ISourceContext<ICellMarket> {
}

export interface ICellsMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ICellMarket>> {
}

export const CellsMarketSourceConsumer: FC<ICellsMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellsMarketSourceProps extends Partial<ISourceProviderProps<ICellMarket>> {
}

export const CellsMarketSource: FC<ICellsMarketSourceProps> = props => {
	return <SourceProvider<ICellMarket>
		name={"CellsMarket"}
		useQuery={useCellsMarketQuery}
		{...props}
	/>;
};

export const toCellsMarketLink = (queryParams?: ICellsMarketQueryParams) => toLink(CellsMarketApiLink, queryParams);
export const useCellsMarketLink = () => toCellsMarketLink;

export const useCellsMarketPromise = createPromiseHook<ICellMarketQuery, ICellMarket, ICellsMarketQueryParams>(CellsMarketApiLink, "post");
export const CellsMarketPromise = createPromise<ICellMarketQuery, ICellMarket, ICellsMarketQueryParams>(CellsMarketApiLink, "post");

export interface ICellsMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICellMarketQuery>>> {
}

export const CellsMarketFilterProvider: FC<ICellsMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICellMarketQuery>> name={"CellsMarket"} {...props}/>;

export const useCellsMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICellMarketQuery>>();
export const useCellsMarketFilterContext = () => useFilterContext<IQueryFilter<ICellMarketQuery>>();

export interface ICellsMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICellMarketQuery>> {
}

export const CellsMarketSourceFilter: FC<ICellsMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CellsMarket"}
/>;

export interface ICellsMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICellMarketQuery>>> {
}

export const CellsMarketOrderByProvider: FC<ICellsMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICellMarketQuery>> name={"CellsMarket"} {...props}/>;

export const useCellsMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICellMarketQuery>>();
export const useCellsMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ICellMarketQuery>>();

export interface ICellsMarketListSourceProps extends Partial<IListProps<ICellMarket>> {
	sourceProps?: Partial<ICellsMarketSourceProps>;
}

export interface ICellsMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICellMarketQuery>, IQueryOrderBy<ICellMarketQuery>, ICellsMarketQueryParams>> {
}

export const CellsMarketSourceControlProvider: FC<ICellsMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICellMarketQuery>, IQueryOrderBy<ICellMarketQuery>> name={"CellsMarket"} {...props}/>;

export const CellsMarketListSource: FC<ICellsMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <CellsMarketSource
		{...sourceProps}
	>
		<List<ICellMarket>
			{...props}
		/>
	</CellsMarketSource>;
}

export interface ICellsMarketSourceSelectProps extends IQuerySourceSelectProps<ICellMarket> {
	toOption: IToOptionMapper<ICellMarket>;
	sourceProps?: ICellsMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellsMarketSourceSelect: FC<ICellsMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellsMarketSource {...sourceProps}>
					<QuerySourceSelect<ICellMarket> {...props}/>
				</CellsMarketSource>
			</Col>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.CellsMarket.title"}
					tooltip={"common.selection.CellsMarket.title.tooltip"}
					width={800}
				>
					<CellsMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CellsMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useCellsMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellsMarketApiLink]);
};

export const useCellsMarketOptionalSelectionContext = () => useOptionalSelectionContext<ICellMarket>();
export const useCellsMarketSelectionContext = () => useSelectionContext<ICellMarket>();
