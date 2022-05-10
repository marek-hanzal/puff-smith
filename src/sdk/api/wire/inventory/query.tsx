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

export const WireInventoryApiLink = "/api/wire/inventory/query";

export type IWireInventoryQueryParams = undefined;

export const useWireInventoryQuery = createQueryHook<IWireInventoryQuery, IQueryResult<IWireInventory>, IWireInventoryQueryParams>(WireInventoryApiLink, "post");

export const useWireInventorySource = () => useSourceContext<IWireInventory>();

export interface IWireInventorySourceContext extends ISourceContext<IWireInventory> {
}

export interface IWireInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IWireInventory>> {
}

export const WireInventorySourceConsumer: FC<IWireInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWireInventorySourceProps extends Partial<ISourceProviderProps<IWireInventory>> {
}

export const WireInventorySource: FC<IWireInventorySourceProps> = props => {
	return <SourceProvider<IWireInventory>
		name={"WireInventory"}
		useQuery={useWireInventoryQuery}
		{...props}
	/>;
};

export const toWireInventoryLink = (queryParams?: IWireInventoryQueryParams) => toLink(WireInventoryApiLink, queryParams);
export const useWireInventoryLink = () => toWireInventoryLink;

export const useWireInventoryPromise = createPromiseHook<IWireInventoryQuery, IWireInventory, IWireInventoryQueryParams>(WireInventoryApiLink, "post");
export const WireInventoryPromise = createPromise<IWireInventoryQuery, IWireInventory, IWireInventoryQueryParams>(WireInventoryApiLink, "post");

export interface IWireInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IWireInventoryQuery>>> {
}

export const WireInventoryFilterProvider: FC<IWireInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IWireInventoryQuery>> name={"WireInventory"} {...props}/>;

export const useWireInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IWireInventoryQuery>>();
export const useWireInventoryFilterContext = () => useFilterContext<IQueryFilter<IWireInventoryQuery>>();

export interface IWireInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IWireInventoryQuery>> {
}

export const WireInventorySourceFilter: FC<IWireInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.WireInventory"}
/>;

export interface IWireInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IWireInventoryQuery>>> {
}

export const WireInventoryOrderByProvider: FC<IWireInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IWireInventoryQuery>> name={"WireInventory"} {...props}/>;

export const useWireInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IWireInventoryQuery>>();
export const useWireInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IWireInventoryQuery>>();

export interface IWireInventoryListSourceProps extends Partial<IListProps<IWireInventory>> {
	sourceProps?: Partial<IWireInventorySourceProps>;
}

export interface IWireInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IWireInventoryQuery>, IQueryOrderBy<IWireInventoryQuery>, IWireInventoryQueryParams>> {
}

export const WireInventorySourceControlProvider: FC<IWireInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IWireInventoryQuery>, IQueryOrderBy<IWireInventoryQuery>> name={"WireInventory"} {...props}/>;

export const WireInventoryListSource: FC<IWireInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <WireInventorySource
		{...sourceProps}
	>
		<List<IWireInventory>
			{...props}
		/>
	</WireInventorySource>;
};

export interface IWireInventorySourceSelectProps extends IQuerySourceSelectProps<IWireInventory> {
	toOption: IToOptionMapper<IWireInventory>;
	sourceProps?: IWireInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WireInventorySourceSelect: FC<IWireInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WireInventorySource {...sourceProps}>
					<QuerySourceSelect<IWireInventory> {...props}/>
				</WireInventorySource>
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
					<WireInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WireInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWireInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IWireInventory>> {
}

export const WireInventorySelectionProvider: FC<IWireInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IWireInventory> {...props}/>;
};

export const useWireInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WireInventoryApiLink]);
};

export const useWireInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IWireInventory>();
export const useWireInventorySelectionContext = () => useSelectionContext<IWireInventory>();
