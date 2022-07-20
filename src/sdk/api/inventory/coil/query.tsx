/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICoilInventorySource} from "@/puff-smith/service/coil/inventory/interface";
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
	IInfiniteListProps,
	IListProps,
	InfiniteList,
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
import {useQueryClient} from "@tanstack/react-query";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";

export const CoilInventoryApiLink = "/api/inventory/coil/query";
export const CoilInventoryCountApiLink = "/api/inventory/coil/query/count";

export type ICoilInventoryQueryParams = any;

export const useCoilInventoryQuery = createQueryHook<ISourceQuery<ICoilInventorySource>, ISourceItem<ICoilInventorySource>[], ICoilInventoryQueryParams>(CoilInventoryApiLink, "post");
export const useCoilInventoryCountQuery = createQueryHook<ISourceQuery<ICoilInventorySource>, number, ICoilInventoryQueryParams>(CoilInventoryCountApiLink, "post");

export const useCoilInventorySource = () => useSourceContext<ISourceItem<ICoilInventorySource>>()

export interface ICoilInventorySourceContext extends ISourceContext<ISourceItem<ICoilInventorySource>> {
}

export interface ICoilInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICoilInventorySource>>> {
}

export const CoilInventorySourceConsumer: FC<ICoilInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICoilInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICoilInventorySource>>> {
}

export const CoilInventoryProvider: FC<ICoilInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICoilInventorySource>>
		name={"CoilInventory"}
		useQuery={useCoilInventoryQuery}
		useCountQuery={useCoilInventoryCountQuery}
		{...props}
	/>;
};

export const toCoilInventoryLink = (queryParams?: ICoilInventoryQueryParams) => toLink(CoilInventoryApiLink, queryParams);
export const useCoilInventoryLink = () => toCoilInventoryLink;

export const useCoilInventoryPromise = createPromiseHook<ISourceQuery<ICoilInventorySource>, ISourceItem<ICoilInventorySource>, ICoilInventoryQueryParams>(CoilInventoryApiLink, "post");
export const CoilInventoryPromise = createPromise<ISourceQuery<ICoilInventorySource>, ISourceItem<ICoilInventorySource>, ICoilInventoryQueryParams>(CoilInventoryApiLink, "post");

export interface ICoilInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICoilInventorySource>>>> {
}

export const CoilInventoryFilterProvider: FC<ICoilInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICoilInventorySource>>> name={"CoilInventory"} {...props}/>;

export const useCoilInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICoilInventorySource>>>()
export const useCoilInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICoilInventorySource>>>()

export interface ICoilInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICoilInventorySource>>> {
}

export const CoilInventoryProviderFilter: FC<ICoilInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.CoilInventory'}
/>;

export interface ICoilInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICoilInventorySource>>>> {
}

export const CoilInventoryOrderByProvider: FC<ICoilInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICoilInventorySource>>> name={"CoilInventory"} {...props}/>;

export const useCoilInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICoilInventorySource>>>()
export const useCoilInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICoilInventorySource>>>()

export interface ICoilInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICoilInventorySource>>, IQueryOrderBy<ISourceQuery<ICoilInventorySource>>, ICoilInventoryQueryParams>> {
}

export const CoilInventoryProviderControl: FC<ICoilInventoryProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICoilInventorySource>>, IQueryOrderBy<ISourceQuery<ICoilInventorySource>>> name={"CoilInventory"} {...props}/>;

export interface ICoilInventoryListSourceProps extends Partial<IListProps<ISourceItem<ICoilInventorySource>>> {
	providerProps?: Partial<ICoilInventoryProviderProps>;
}

export const CoilInventoryListSource: FC<ICoilInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <CoilInventoryProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<ICoilInventorySource>>
			{...props}
		/>
	</CoilInventoryProvider>;
}

export interface ICoilInventoryInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<ICoilInventorySource>>> {
	providerProps?: Partial<ICoilInventoryProviderProps>;
}

export const CoilInventoryInfiniteListSource: FC<ICoilInventoryInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <CoilInventoryProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<ICoilInventorySource>>
			{...props}
		/>
	</CoilInventoryProvider>;
}

export interface ICoilInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICoilInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<ICoilInventorySource>>;
	providerProps?: Partial<ICoilInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CoilInventorySourceSelect: FC<ICoilInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CoilInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICoilInventorySource>> {...props}/>
				</CoilInventoryProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.CoilInventory.title"}
					size={props.size}
					tooltip={"common.selection.CoilInventory.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<CoilInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CoilInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICoilInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICoilInventorySource>>> {
}

export const CoilInventorySelectionProvider: FC<ICoilInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICoilInventorySource>> {...props}/>
}

export const useCoilInventoryCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CoilInventoryCountApiLink]);
};

export const useCoilInventoryQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([CoilInventoryApiLink]),
		withCount && queryClient.invalidateQueries([CoilInventoryCountApiLink]),
	]);
};

export const useCoilInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICoilInventorySource>>();
export const useCoilInventorySelectionContext = () => useSelectionContext<ISourceItem<ICoilInventorySource>>();
