/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireMarket, IWireMarketQuery} from "@/puff-smith/service/wire/market/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const WireMarketApiLink = "/api/wire/market/query";

export type IWireMarketQueryParams = undefined;

export const useWireMarketQuery = createQueryHook<IWireMarketQuery, IWireMarket[], IWireMarketQueryParams>(WireMarketApiLink, "post");

export const useWireMarketSource = () => useSourceContext<IWireMarket>();

export interface IWireMarketSourceContext extends ISourceContext<IWireMarket> {
}

export interface IWireMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IWireMarket>> {
}

export const WireMarketSourceConsumer: FC<IWireMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWireMarketSourceProps extends Partial<ISourceProviderProps<IWireMarket>> {
}

export const WireMarketSource: FC<IWireMarketSourceProps> = props => {
	return <SourceProvider<IWireMarket>
		name={"WireMarket"}
		useQuery={useWireMarketQuery}
		{...props}
	/>;
};

export const toWireMarketLink = (queryParams?: IWireMarketQueryParams) => toLink(WireMarketApiLink, queryParams);
export const useWireMarketLink = () => toWireMarketLink;

export const useWireMarketPromise = createPromiseHook<IWireMarketQuery, IWireMarket, IWireMarketQueryParams>(WireMarketApiLink, "post");
export const WireMarketPromise = createPromise<IWireMarketQuery, IWireMarket, IWireMarketQueryParams>(WireMarketApiLink, "post");

export interface IWireMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IWireMarketQuery>>> {
}

export const WireMarketFilterProvider: FC<IWireMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IWireMarketQuery>> name={"WireMarket"} {...props}/>;

export const useWireMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IWireMarketQuery>>();
export const useWireMarketFilterContext = () => useFilterContext<IQueryFilter<IWireMarketQuery>>();

export interface IWireMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IWireMarketQuery>> {
}

export const WireMarketSourceFilter: FC<IWireMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.WireMarket"}
/>;

export interface IWireMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IWireMarketQuery>>> {
}

export const WireMarketOrderByProvider: FC<IWireMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IWireMarketQuery>> name={"WireMarket"} {...props}/>;

export const useWireMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IWireMarketQuery>>();
export const useWireMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IWireMarketQuery>>();

export interface IWireMarketListSourceProps extends Partial<IListProps<IWireMarket>> {
	sourceProps?: Partial<IWireMarketSourceProps>;
}

export interface IWireMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IWireMarketQuery>, IQueryOrderBy<IWireMarketQuery>, IWireMarketQueryParams>> {
}

export const WireMarketSourceControlProvider: FC<IWireMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IWireMarketQuery>, IQueryOrderBy<IWireMarketQuery>> name={"WireMarket"} {...props}/>;

export const WireMarketListSource: FC<IWireMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <WireMarketSource
		{...sourceProps}
	>
		<List<IWireMarket>
			{...props}
		/>
	</WireMarketSource>;
}

export interface IWireMarketSourceSelectProps extends IQuerySourceSelectProps<IWireMarket> {
	toOption: IToOptionMapper<IWireMarket>;
	sourceProps?: IWireMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WireMarketSourceSelect: FC<IWireMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WireMarketSource {...sourceProps}>
					<QuerySourceSelect<IWireMarket> {...props}/>
				</WireMarketSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.WireMarket.title"}
					size={props.size}
					tooltip={"common.selection.WireMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<WireMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WireMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWireMarketSelectionProviderProps extends Partial<ISelectionProviderProps<IWireMarket>> {
}

export const WireMarketSelectionProvider: FC<IWireMarketSelectionProviderProps> = props => {
	return <SelectionProvider<IWireMarket> {...props}/>;
}

export const useWireMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WireMarketApiLink]);
};

export const useWireMarketOptionalSelectionContext = () => useOptionalSelectionContext<IWireMarket>();
export const useWireMarketSelectionContext = () => useSelectionContext<IWireMarket>();
