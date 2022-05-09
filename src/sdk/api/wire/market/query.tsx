/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireMarket, IWireMarketQuery} from "@/puff-smith/service/wire/market/interface";
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

export const WiresMarketApiLink = "/api/wire/market/query";

export type IWiresMarketQueryParams = undefined;

export const useWiresMarketQuery = createQueryHook<IWireMarketQuery, IQueryResult<IWireMarket>, IWiresMarketQueryParams>(WiresMarketApiLink, "post");

export const useWiresMarketSource = () => useSourceContext<IWireMarket>();

export interface IWiresMarketSourceContext extends ISourceContext<IWireMarket> {
}

export interface IWiresMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IWireMarket>> {
}

export const WiresMarketSourceConsumer: FC<IWiresMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWiresMarketSourceProps extends Partial<ISourceProviderProps<IWireMarket>> {
}

export const WiresMarketSource: FC<IWiresMarketSourceProps> = props => {
	return <SourceProvider<IWireMarket>
		name={"WiresMarket"}
		useQuery={useWiresMarketQuery}
		{...props}
	/>;
};

export const toWiresMarketLink = (queryParams?: IWiresMarketQueryParams) => toLink(WiresMarketApiLink, queryParams);
export const useWiresMarketLink = () => toWiresMarketLink;

export const useWiresMarketPromise = createPromiseHook<IWireMarketQuery, IWireMarket, IWiresMarketQueryParams>(WiresMarketApiLink, "post");
export const WiresMarketPromise = createPromise<IWireMarketQuery, IWireMarket, IWiresMarketQueryParams>(WiresMarketApiLink, "post");

export interface IWiresMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IWireMarketQuery>>> {
}

export const WiresMarketFilterProvider: FC<IWiresMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IWireMarketQuery>> name={"WiresMarket"} {...props}/>;

export const useWiresMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IWireMarketQuery>>();
export const useWiresMarketFilterContext = () => useFilterContext<IQueryFilter<IWireMarketQuery>>();

export interface IWiresMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IWireMarketQuery>> {
}

export const WiresMarketSourceFilter: FC<IWiresMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.WiresMarket"}
/>;

export interface IWiresMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IWireMarketQuery>>> {
}

export const WiresMarketOrderByProvider: FC<IWiresMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IWireMarketQuery>> name={"WiresMarket"} {...props}/>;

export const useWiresMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IWireMarketQuery>>();
export const useWiresMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IWireMarketQuery>>();

export interface IWiresMarketListSourceProps extends Partial<IListProps<IWireMarket>> {
	sourceProps?: Partial<IWiresMarketSourceProps>;
}

export interface IWiresMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IWireMarketQuery>, IQueryOrderBy<IWireMarketQuery>, IWiresMarketQueryParams>> {
}

export const WiresMarketSourceControlProvider: FC<IWiresMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IWireMarketQuery>, IQueryOrderBy<IWireMarketQuery>> name={"WiresMarket"} {...props}/>;

export const WiresMarketListSource: FC<IWiresMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <WiresMarketSource
		{...sourceProps}
	>
		<List<IWireMarket>
			{...props}
		/>
	</WiresMarketSource>;
}

export interface IWiresMarketSourceSelectProps extends IQuerySourceSelectProps<IWireMarket> {
	toOption: IToOptionMapper<IWireMarket>;
	sourceProps?: IWiresMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WiresMarketSourceSelect: FC<IWiresMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WiresMarketSource {...sourceProps}>
					<QuerySourceSelect<IWireMarket> {...props}/>
				</WiresMarketSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.WiresMarket.title"}
					size={props.size}
					tooltip={"common.selection.WiresMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<WiresMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WiresMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWiresMarketSelectionProviderProps extends Partial<ISelectionProviderProps<IWireMarket>> {
}

export const WiresMarketSelectionProvider: FC<IWiresMarketSelectionProviderProps> = props => {
	return <SelectionProvider<IWireMarket> {...props}/>;
}

export const useWiresMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WiresMarketApiLink]);
};

export const useWiresMarketOptionalSelectionContext = () => useOptionalSelectionContext<IWireMarket>();
export const useWiresMarketSelectionContext = () => useSelectionContext<IWireMarket>();
