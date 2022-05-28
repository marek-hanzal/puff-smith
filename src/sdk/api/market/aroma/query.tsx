/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaMarketSource} from "@/puff-smith/service/aroma/market/interface";
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

export const AromaMarketApiLink = "/api/market/aroma/query";
export const AromaMarketCountApiLink = "/api/market/aroma/query/count";

export type IAromaMarketQueryParams = undefined;

export const useAromaMarketQuery = createQueryHook<ISourceQuery<IAromaMarketSource>, ISourceItem<IAromaMarketSource>[], IAromaMarketQueryParams>(AromaMarketApiLink, "post");
export const useAromaMarketCountQuery = createQueryHook<ISourceQuery<IAromaMarketSource>, number, IAromaMarketQueryParams>(AromaMarketCountApiLink, "post");

export const useAromaMarketSource = () => useSourceContext<ISourceItem<IAromaMarketSource>>();

export interface IAromaMarketSourceContext extends ISourceContext<ISourceItem<IAromaMarketSource>> {
}

export interface IAromaMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaMarketSource>>> {
}

export const AromaMarketSourceConsumer: FC<IAromaMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaMarketProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaMarketSource>>> {
}

export const AromaMarketProvider: FC<IAromaMarketProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaMarketSource>>
		name={"AromaMarket"}
		useQuery={useAromaMarketQuery}
		useCountQuery={useAromaMarketCountQuery}
		{...props}
	/>;
};

export const toAromaMarketLink = (queryParams?: IAromaMarketQueryParams) => toLink(AromaMarketApiLink, queryParams);
export const useAromaMarketLink = () => toAromaMarketLink;

export const useAromaMarketPromise = createPromiseHook<ISourceQuery<IAromaMarketSource>, ISourceItem<IAromaMarketSource>, IAromaMarketQueryParams>(AromaMarketApiLink, "post");
export const AromaMarketPromise = createPromise<ISourceQuery<IAromaMarketSource>, ISourceItem<IAromaMarketSource>, IAromaMarketQueryParams>(AromaMarketApiLink, "post");

export interface IAromaMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaMarketSource>>>> {
}

export const AromaMarketFilterProvider: FC<IAromaMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaMarketSource>>> name={"AromaMarket"} {...props}/>;

export const useAromaMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaMarketSource>>>();
export const useAromaMarketFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaMarketSource>>>();

export interface IAromaMarketProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaMarketSource>>> {
}

export const AromaMarketProviderFilter: FC<IAromaMarketProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AromaMarket"}
/>;

export interface IAromaMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaMarketSource>>>> {
}

export const AromaMarketOrderByProvider: FC<IAromaMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaMarketSource>>> name={"AromaMarket"} {...props}/>;

export const useAromaMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaMarketSource>>>();
export const useAromaMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaMarketSource>>>();

export interface IAromaMarketProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaMarketSource>>, IQueryOrderBy<ISourceQuery<IAromaMarketSource>>, IAromaMarketQueryParams>> {
}

export const AromaMarketProviderControl: FC<IAromaMarketProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IAromaMarketSource>>, IQueryOrderBy<ISourceQuery<IAromaMarketSource>>> name={"AromaMarket"} {...props}/>;

export interface IAromaMarketListSourceProps extends Partial<IListProps<ISourceItem<IAromaMarketSource>>> {
	providerProps?: Partial<IAromaMarketProviderProps>;
}

export const AromaMarketListSource: FC<IAromaMarketListSourceProps> = ({providerProps, ...props}) => {
	return <AromaMarketProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IAromaMarketSource>>
			{...props}
		/>
	</AromaMarketProvider>;
}

export interface IAromaMarketSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaMarketSource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaMarketSource>>;
	providerProps?: Partial<IAromaMarketProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaMarketSourceSelect: FC<IAromaMarketSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaMarketProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAromaMarketSource>> {...props}/>
				</AromaMarketProvider>
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
					<AromaMarketProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaMarketProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaMarketSource>>> {
}

export const AromaMarketSelectionProvider: FC<IAromaMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaMarketSource>> {...props}/>;
}

export const useAromaMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaMarketApiLink]);
};

export const useAromaMarketCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaMarketCountApiLink]);
};

export const useAromaMarketOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaMarketSource>>();
export const useAromaMarketSelectionContext = () => useSelectionContext<ISourceItem<IAromaMarketSource>>();
