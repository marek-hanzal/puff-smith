/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaMarket, IAromaMarketQuery} from "@/puff-smith/service/aroma/market/interface";
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

export const AromasMarketApiLink = "/api/aroma/market/query";

export type IAromasMarketQueryParams = undefined;

export const useAromasMarketQuery = createQueryHook<IAromaMarketQuery, IQueryResult<IAromaMarket>, IAromasMarketQueryParams>(AromasMarketApiLink, "post");

export const useAromasMarketSource = () => useSourceContext<IAromaMarket>()

export interface IAromasMarketSourceContext extends ISourceContext<IAromaMarket> {
}

export interface IAromasMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IAromaMarket>> {
}

export const AromasMarketSourceConsumer: FC<IAromasMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromasMarketSourceProps extends Partial<ISourceProviderProps<IAromaMarket>> {
}

export const AromasMarketSource: FC<IAromasMarketSourceProps> = props => {
	return <SourceProvider<IAromaMarket>
		name={"AromasMarket"}
		useQuery={useAromasMarketQuery}
		{...props}
	/>;
};

export const toAromasMarketLink = (queryParams?: IAromasMarketQueryParams) => toLink(AromasMarketApiLink, queryParams);
export const useAromasMarketLink = () => toAromasMarketLink;

export const useAromasMarketPromise = createPromiseHook<IAromaMarketQuery, IAromaMarket, IAromasMarketQueryParams>(AromasMarketApiLink, "post");
export const AromasMarketPromise = createPromise<IAromaMarketQuery, IAromaMarket, IAromasMarketQueryParams>(AromasMarketApiLink, "post");

export interface IAromasMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAromaMarketQuery>>> {
}

export const AromasMarketFilterProvider: FC<IAromasMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAromaMarketQuery>> name={"AromasMarket"} {...props}/>;

export const useAromasMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAromaMarketQuery>>()
export const useAromasMarketFilterContext = () => useFilterContext<IQueryFilter<IAromaMarketQuery>>()

export interface IAromasMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAromaMarketQuery>> {
}

export const AromasMarketSourceFilter: FC<IAromasMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.AromasMarket'}
/>;

export interface IAromasMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAromaMarketQuery>>> {
}

export const AromasMarketOrderByProvider: FC<IAromasMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAromaMarketQuery>> name={"AromasMarket"} {...props}/>;

export const useAromasMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAromaMarketQuery>>()
export const useAromasMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IAromaMarketQuery>>()

export interface IAromasMarketListSourceProps extends Partial<IListProps<IAromaMarket>> {
	sourceProps?: Partial<IAromasMarketSourceProps>;
}

export interface IAromasMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAromaMarketQuery>, IQueryOrderBy<IAromaMarketQuery>, IAromasMarketQueryParams>> {
}

export const AromasMarketSourceControlProvider: FC<IAromasMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAromaMarketQuery>, IQueryOrderBy<IAromaMarketQuery>> name={"AromasMarket"} {...props}/>;

export const AromasMarketListSource: FC<IAromasMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <AromasMarketSource
		{...sourceProps}
	>
		<List<IAromaMarket>
			{...props}
		/>
	</AromasMarketSource>;
}

export interface IAromasMarketSourceSelectProps extends IQuerySourceSelectProps<IAromaMarket> {
	toOption: IToOptionMapper<IAromaMarket>;
	sourceProps?: IAromasMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromasMarketSourceSelect: FC<IAromasMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromasMarketSource {...sourceProps}>
					<QuerySourceSelect<IAromaMarket> {...props}/>
				</AromasMarketSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.AromasMarket.title"}
					size={props.size}
					tooltip={"common.selection.AromasMarket.title.tooltip"}
					width={800}
				>
					<AromasMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromasMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useAromasMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromasMarketApiLink]);
};

export const useAromasMarketOptionalSelectionContext = () => useOptionalSelectionContext<IAromaMarket>();
export const useAromasMarketSelectionContext = () => useSelectionContext<IAromaMarket>();
