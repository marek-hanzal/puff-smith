/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
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

export const WireInventoryApiLink = "/api/wire/inventory/query";
export const WireInventoryCountApiLink = "/api/wire/inventory/query/count";

export type IWireInventoryQueryParams = undefined;

export const useWireInventoryQuery = createQueryHook<ISourceQuery<IWireInventorySource>, ISourceItem<IWireInventorySource>[], IWireInventoryQueryParams>(WireInventoryApiLink, "post");
export const useWireInventoryCountQuery = createQueryHook<ISourceQuery<IWireInventorySource>, number, IWireInventoryQueryParams>(WireInventoryCountApiLink, "post");

export const useWireInventorySource = () => useSourceContext<ISourceItem<IWireInventorySource>>();

export interface IWireInventorySourceContext extends ISourceContext<ISourceItem<IWireInventorySource>> {
}

export interface IWireInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IWireInventorySource>>> {
}

export const WireInventorySourceConsumer: FC<IWireInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWireInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<IWireInventorySource>>> {
}

export const WireInventoryProvider: FC<IWireInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<IWireInventorySource>>
		name={"WireInventory"}
		useQuery={useWireInventoryQuery}
		useCountQuery={useWireInventoryCountQuery}
		{...props}
	/>;
};

export const toWireInventoryLink = (queryParams?: IWireInventoryQueryParams) => toLink(WireInventoryApiLink, queryParams);
export const useWireInventoryLink = () => toWireInventoryLink;

export const useWireInventoryPromise = createPromiseHook<ISourceQuery<IWireInventorySource>, ISourceItem<IWireInventorySource>, IWireInventoryQueryParams>(WireInventoryApiLink, "post");
export const WireInventoryPromise = createPromise<ISourceQuery<IWireInventorySource>, ISourceItem<IWireInventorySource>, IWireInventoryQueryParams>(WireInventoryApiLink, "post");

export interface IWireInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IWireInventorySource>>>> {
}

export const WireInventoryFilterProvider: FC<IWireInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IWireInventorySource>>> name={"WireInventory"} {...props}/>;

export const useWireInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IWireInventorySource>>>();
export const useWireInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IWireInventorySource>>>();

export interface IWireInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IWireInventorySource>>> {
}

export const WireInventoryProviderFilter: FC<IWireInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.WireInventory"}
/>;

export interface IWireInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IWireInventorySource>>>> {
}

export const WireInventoryOrderByProvider: FC<IWireInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IWireInventorySource>>> name={"WireInventory"} {...props}/>;

export const useWireInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IWireInventorySource>>>();
export const useWireInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IWireInventorySource>>>();

export interface IWireInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IWireInventorySource>>, IQueryOrderBy<ISourceQuery<IWireInventorySource>>, IWireInventoryQueryParams>> {
}

export const WireInventoryProviderControl: FC<IWireInventoryProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IWireInventorySource>>, IQueryOrderBy<ISourceQuery<IWireInventorySource>>> name={"WireInventory"} {...props}/>;

export interface IWireInventoryListSourceProps extends Partial<IListProps<ISourceItem<IWireInventorySource>>> {
	providerProps?: Partial<IWireInventoryProviderProps>;
}

export const WireInventoryListSource: FC<IWireInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <WireInventoryProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IWireInventorySource>>
			{...props}
		/>
	</WireInventoryProvider>;
}

export interface IWireInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IWireInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<IWireInventorySource>>;
	providerProps?: Partial<IWireInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WireInventorySourceSelect: FC<IWireInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WireInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IWireInventorySource>> {...props}/>
				</WireInventoryProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.WireInventory.title"}
					size={props.size}
					tooltip={"common.selection.WireInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<WireInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WireInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWireInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IWireInventorySource>>> {
}

export const WireInventorySelectionProvider: FC<IWireInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IWireInventorySource>> {...props}/>;
}

export const useWireInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WireInventoryApiLink]);
};

export const useWireInventoryCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WireInventoryCountApiLink]);
};

export const useWireInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IWireInventorySource>>();
export const useWireInventorySelectionContext = () => useSelectionContext<ISourceItem<IWireInventorySource>>();
