/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaMarket, IAromaMarketQuery} from "@/puff-smith/service/aroma/market/interface";
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

export const AromaMarketApiLink = "/api/aroma/market/query";

export type IAromaMarketQueryParams = undefined;

export const useAromaMarketQuery = createQueryHook<IAromaMarketQuery, IQueryResult<IAromaMarket>, IAromaMarketQueryParams>(AromaMarketApiLink, "post");

export const useAromaMarketSource = () => useSourceContext<IAromaMarket>();

export interface IAromaMarketSourceContext extends ISourceContext<IAromaMarket> {
}

export interface IAromaMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IAromaMarket>> {
}

export const AromaMarketSourceConsumer: FC<IAromaMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaMarketSourceProps extends Partial<ISourceProviderProps<IAromaMarket>> {
}

export const AromaMarketSource: FC<IAromaMarketSourceProps> = props => {
	return <SourceProvider<IAromaMarket>
		name={"AromaMarket"}
		useQuery={useAromaMarketQuery}
		{...props}
	/>;
};

export const toAromaMarketLink = (queryParams?: IAromaMarketQueryParams) => toLink(AromaMarketApiLink, queryParams);
export const useAromaMarketLink = () => toAromaMarketLink;

export const useAromaMarketPromise = createPromiseHook<IAromaMarketQuery, IAromaMarket, IAromaMarketQueryParams>(AromaMarketApiLink, "post");
export const AromaMarketPromise = createPromise<IAromaMarketQuery, IAromaMarket, IAromaMarketQueryParams>(AromaMarketApiLink, "post");

export interface IAromaMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAromaMarketQuery>>> {
}

export const AromaMarketFilterProvider: FC<IAromaMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAromaMarketQuery>> name={"AromaMarket"} {...props}/>;

export const useAromaMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAromaMarketQuery>>();
export const useAromaMarketFilterContext = () => useFilterContext<IQueryFilter<IAromaMarketQuery>>();

export interface IAromaMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAromaMarketQuery>> {
}

export const AromaMarketSourceFilter: FC<IAromaMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AromaMarket"}
/>;

export interface IAromaMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAromaMarketQuery>>> {
}

export const AromaMarketOrderByProvider: FC<IAromaMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAromaMarketQuery>> name={"AromaMarket"} {...props}/>;

export const useAromaMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAromaMarketQuery>>();
export const useAromaMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IAromaMarketQuery>>();

export interface IAromaMarketListSourceProps extends Partial<IListProps<IAromaMarket>> {
	sourceProps?: Partial<IAromaMarketSourceProps>;
}

export interface IAromaMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAromaMarketQuery>, IQueryOrderBy<IAromaMarketQuery>, IAromaMarketQueryParams>> {
}

export const AromaMarketSourceControlProvider: FC<IAromaMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAromaMarketQuery>, IQueryOrderBy<IAromaMarketQuery>> name={"AromaMarket"} {...props}/>;

export const AromaMarketListSource: FC<IAromaMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <AromaMarketSource
		{...sourceProps}
	>
		<List<IAromaMarket>
			{...props}
		/>
	</AromaMarketSource>;
};

export interface IAromaMarketSourceSelectProps extends IQuerySourceSelectProps<IAromaMarket> {
	toOption: IToOptionMapper<IAromaMarket>;
	sourceProps?: IAromaMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaMarketSourceSelect: FC<IAromaMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaMarketSource {...sourceProps}>
					<QuerySourceSelect<IAromaMarket> {...props}/>
				</AromaMarketSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AromaMarket.title"}
					size={props.size}
					tooltip={"common.selection.AromaMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AromaMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaMarketSelectionProviderProps extends Partial<ISelectionProviderProps<IAromaMarket>> {
}

export const AromaMarketSelectionProvider: FC<IAromaMarketSelectionProviderProps> = props => {
	return <SelectionProvider<IAromaMarket> {...props}/>;
};

export const useAromaMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaMarketApiLink]);
};

export const useAromaMarketOptionalSelectionContext = () => useOptionalSelectionContext<IAromaMarket>();
export const useAromaMarketSelectionContext = () => useSelectionContext<IAromaMarket>();
