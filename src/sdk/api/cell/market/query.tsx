/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellMarket, ICellMarketQuery} from "@/puff-smith/service/cell/market/interface";
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

export const CellMarketApiLink = "/api/cell/market/query";

export type ICellMarketQueryParams = undefined;

export const useCellMarketQuery = createQueryHook<ICellMarketQuery, IQueryResult<ICellMarket>, ICellMarketQueryParams>(CellMarketApiLink, "post");

export const useCellMarketSource = () => useSourceContext<ICellMarket>();

export interface ICellMarketSourceContext extends ISourceContext<ICellMarket> {
}

export interface ICellMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ICellMarket>> {
}

export const CellMarketSourceConsumer: FC<ICellMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellMarketSourceProps extends Partial<ISourceProviderProps<ICellMarket>> {
}

export const CellMarketSource: FC<ICellMarketSourceProps> = props => {
	return <SourceProvider<ICellMarket>
		name={"CellMarket"}
		useQuery={useCellMarketQuery}
		{...props}
	/>;
};

export const toCellMarketLink = (queryParams?: ICellMarketQueryParams) => toLink(CellMarketApiLink, queryParams);
export const useCellMarketLink = () => toCellMarketLink;

export const useCellMarketPromise = createPromiseHook<ICellMarketQuery, ICellMarket, ICellMarketQueryParams>(CellMarketApiLink, "post");
export const CellMarketPromise = createPromise<ICellMarketQuery, ICellMarket, ICellMarketQueryParams>(CellMarketApiLink, "post");

export interface ICellMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICellMarketQuery>>> {
}

export const CellMarketFilterProvider: FC<ICellMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICellMarketQuery>> name={"CellMarket"} {...props}/>;

export const useCellMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICellMarketQuery>>();
export const useCellMarketFilterContext = () => useFilterContext<IQueryFilter<ICellMarketQuery>>();

export interface ICellMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICellMarketQuery>> {
}

export const CellMarketSourceFilter: FC<ICellMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CellMarket"}
/>;

export interface ICellMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICellMarketQuery>>> {
}

export const CellMarketOrderByProvider: FC<ICellMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICellMarketQuery>> name={"CellMarket"} {...props}/>;

export const useCellMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICellMarketQuery>>();
export const useCellMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ICellMarketQuery>>();

export interface ICellMarketListSourceProps extends Partial<IListProps<ICellMarket>> {
	sourceProps?: Partial<ICellMarketSourceProps>;
}

export interface ICellMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICellMarketQuery>, IQueryOrderBy<ICellMarketQuery>, ICellMarketQueryParams>> {
}

export const CellMarketSourceControlProvider: FC<ICellMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICellMarketQuery>, IQueryOrderBy<ICellMarketQuery>> name={"CellMarket"} {...props}/>;

export const CellMarketListSource: FC<ICellMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <CellMarketSource
		{...sourceProps}
	>
		<List<ICellMarket>
			{...props}
		/>
	</CellMarketSource>;
};

export interface ICellMarketSourceSelectProps extends IQuerySourceSelectProps<ICellMarket> {
	toOption: IToOptionMapper<ICellMarket>;
	sourceProps?: ICellMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellMarketSourceSelect: FC<ICellMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellMarketSource {...sourceProps}>
					<QuerySourceSelect<ICellMarket> {...props}/>
				</CellMarketSource>
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
					<CellMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CellMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICellMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ICellMarket>> {
}

export const CellMarketSelectionProvider: FC<ICellMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ICellMarket> {...props}/>;
};

export const useCellMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellMarketApiLink]);
};

export const useCellMarketOptionalSelectionContext = () => useOptionalSelectionContext<ICellMarket>();
export const useCellMarketSelectionContext = () => useSelectionContext<ICellMarket>();
