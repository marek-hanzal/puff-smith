/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireInventory, IWireInventoryQuery} from "@/puff-smith/service/wire/inventory/interface";
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

export const WiresInventoryApiLink = "/api/wire/inventory/query";

export type IWiresInventoryQueryParams = undefined;

export const useWiresInventoryQuery = createQueryHook<IWireInventoryQuery, IQueryResult<IWireInventory>, IWiresInventoryQueryParams>(WiresInventoryApiLink, "post");

export const useWiresInventorySource = () => useSourceContext<IWireInventory>();

export interface IWiresInventorySourceContext extends ISourceContext<IWireInventory> {
}

export interface IWiresInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IWireInventory>> {
}

export const WiresInventorySourceConsumer: FC<IWiresInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWiresInventorySourceProps extends Partial<ISourceProviderProps<IWireInventory>> {
}

export const WiresInventorySource: FC<IWiresInventorySourceProps> = props => {
	return <SourceProvider<IWireInventory>
		name={"WiresInventory"}
		useQuery={useWiresInventoryQuery}
		{...props}
	/>;
};

export const toWiresInventoryLink = (queryParams?: IWiresInventoryQueryParams) => toLink(WiresInventoryApiLink, queryParams);
export const useWiresInventoryLink = () => toWiresInventoryLink;

export const useWiresInventoryPromise = createPromiseHook<IWireInventoryQuery, IWireInventory, IWiresInventoryQueryParams>(WiresInventoryApiLink, "post");
export const WiresInventoryPromise = createPromise<IWireInventoryQuery, IWireInventory, IWiresInventoryQueryParams>(WiresInventoryApiLink, "post");

export interface IWiresInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IWireInventoryQuery>>> {
}

export const WiresInventoryFilterProvider: FC<IWiresInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IWireInventoryQuery>> name={"WiresInventory"} {...props}/>;

export const useWiresInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IWireInventoryQuery>>();
export const useWiresInventoryFilterContext = () => useFilterContext<IQueryFilter<IWireInventoryQuery>>();

export interface IWiresInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IWireInventoryQuery>> {
}

export const WiresInventorySourceFilter: FC<IWiresInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.WiresInventory"}
/>;

export interface IWiresInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IWireInventoryQuery>>> {
}

export const WiresInventoryOrderByProvider: FC<IWiresInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IWireInventoryQuery>> name={"WiresInventory"} {...props}/>;

export const useWiresInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IWireInventoryQuery>>();
export const useWiresInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IWireInventoryQuery>>();

export interface IWiresInventoryListSourceProps extends Partial<IListProps<IWireInventory>> {
	sourceProps?: Partial<IWiresInventorySourceProps>;
}

export interface IWiresInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IWireInventoryQuery>, IQueryOrderBy<IWireInventoryQuery>, IWiresInventoryQueryParams>> {
}

export const WiresInventorySourceControlProvider: FC<IWiresInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IWireInventoryQuery>, IQueryOrderBy<IWireInventoryQuery>> name={"WiresInventory"} {...props}/>;

export const WiresInventoryListSource: FC<IWiresInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <WiresInventorySource
		{...sourceProps}
	>
		<List<IWireInventory>
			{...props}
		/>
	</WiresInventorySource>;
}

export interface IWiresInventorySourceSelectProps extends IQuerySourceSelectProps<IWireInventory> {
	toOption: IToOptionMapper<IWireInventory>;
	sourceProps?: IWiresInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WiresInventorySourceSelect: FC<IWiresInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WiresInventorySource {...sourceProps}>
					<QuerySourceSelect<IWireInventory> {...props}/>
				</WiresInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.WiresInventory.title"}
					size={props.size}
					tooltip={"common.selection.WiresInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<WiresInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WiresInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWiresInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IWireInventory>> {
}

export const WiresInventorySelectionProvider: FC<IWiresInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IWireInventory> {...props}/>;
}

export const useWiresInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WiresInventoryApiLink]);
};

export const useWiresInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IWireInventory>();
export const useWiresInventorySelectionContext = () => useSelectionContext<IWireInventory>();
