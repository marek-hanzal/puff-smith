/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireMarketSource} from "@/puff-smith/service/wire/market/interface";
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

export const WireMarketApiLink = "/api/market/wire/query";
export const WireMarketCountApiLink = "/api/market/wire/query/count";

export type IWireMarketQueryParams = undefined;

export const useWireMarketQuery = createQueryHook<ISourceQuery<IWireMarketSource>, ISourceItem<IWireMarketSource>[], IWireMarketQueryParams>(WireMarketApiLink, "post");
export const useWireMarketCountQuery = createQueryHook<ISourceQuery<IWireMarketSource>, number, IWireMarketQueryParams>(WireMarketCountApiLink, "post");

export const useWireMarketSource = () => useSourceContext<ISourceItem<IWireMarketSource>>();

export interface IWireMarketSourceContext extends ISourceContext<ISourceItem<IWireMarketSource>> {
}

export interface IWireMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IWireMarketSource>>> {
}

export const WireMarketSourceConsumer: FC<IWireMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWireMarketProviderProps extends Partial<ISourceProviderProps<ISourceItem<IWireMarketSource>>> {
}

export const WireMarketProvider: FC<IWireMarketProviderProps> = props => {
	return <SourceProvider<ISourceItem<IWireMarketSource>>
		name={"WireMarket"}
		useQuery={useWireMarketQuery}
		useCountQuery={useWireMarketCountQuery}
		{...props}
	/>;
};

export const toWireMarketLink = (queryParams?: IWireMarketQueryParams) => toLink(WireMarketApiLink, queryParams);
export const useWireMarketLink = () => toWireMarketLink;

export const useWireMarketPromise = createPromiseHook<ISourceQuery<IWireMarketSource>, ISourceItem<IWireMarketSource>, IWireMarketQueryParams>(WireMarketApiLink, "post");
export const WireMarketPromise = createPromise<ISourceQuery<IWireMarketSource>, ISourceItem<IWireMarketSource>, IWireMarketQueryParams>(WireMarketApiLink, "post");

export interface IWireMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IWireMarketSource>>>> {
}

export const WireMarketFilterProvider: FC<IWireMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IWireMarketSource>>> name={"WireMarket"} {...props}/>;

export const useWireMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IWireMarketSource>>>();
export const useWireMarketFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IWireMarketSource>>>();

export interface IWireMarketProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IWireMarketSource>>> {
}

export const WireMarketProviderFilter: FC<IWireMarketProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.WireMarket"}
/>;

export interface IWireMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IWireMarketSource>>>> {
}

export const WireMarketOrderByProvider: FC<IWireMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IWireMarketSource>>> name={"WireMarket"} {...props}/>;

export const useWireMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IWireMarketSource>>>();
export const useWireMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IWireMarketSource>>>();

export interface IWireMarketProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IWireMarketSource>>, IQueryOrderBy<ISourceQuery<IWireMarketSource>>, IWireMarketQueryParams>> {
}

export const WireMarketProviderControl: FC<IWireMarketProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IWireMarketSource>>, IQueryOrderBy<ISourceQuery<IWireMarketSource>>> name={"WireMarket"} {...props}/>;

export interface IWireMarketListSourceProps extends Partial<IListProps<ISourceItem<IWireMarketSource>>> {
	providerProps?: Partial<IWireMarketProviderProps>;
}

export const WireMarketListSource: FC<IWireMarketListSourceProps> = ({providerProps, ...props}) => {
	return <WireMarketProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IWireMarketSource>>
			{...props}
		/>
	</WireMarketProvider>;
}

export interface IWireMarketSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IWireMarketSource>> {
	toOption: IToOptionMapper<ISourceItem<IWireMarketSource>>;
	providerProps?: Partial<IWireMarketProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WireMarketSourceSelect: FC<IWireMarketSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WireMarketProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IWireMarketSource>> {...props}/>
				</WireMarketProvider>
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
					<WireMarketProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WireMarketProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWireMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IWireMarketSource>>> {
}

export const WireMarketSelectionProvider: FC<IWireMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IWireMarketSource>> {...props}/>;
}

export const useWireMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WireMarketApiLink]);
};

export const useWireMarketCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WireMarketCountApiLink]);
};

export const useWireMarketOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IWireMarketSource>>();
export const useWireMarketSelectionContext = () => useSelectionContext<ISourceItem<IWireMarketSource>>();
