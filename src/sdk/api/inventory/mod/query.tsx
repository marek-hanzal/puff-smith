/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
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

export const ModInventoryApiLink = "/api/inventory/mod/query";
export const ModInventoryCountApiLink = "/api/inventory/mod/query/count";

export type IModInventoryQueryParams = any;

export const useModInventoryQuery = createQueryHook<ISourceQuery<IModInventorySource>, ISourceItem<IModInventorySource>[], IModInventoryQueryParams>(ModInventoryApiLink, "post");
export const useModInventoryCountQuery = createQueryHook<ISourceQuery<IModInventorySource>, number, IModInventoryQueryParams>(ModInventoryCountApiLink, "post");

export const useModInventorySource = () => useSourceContext<ISourceItem<IModInventorySource>>()

export interface IModInventorySourceContext extends ISourceContext<ISourceItem<IModInventorySource>> {
}

export interface IModInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IModInventorySource>>> {
}

export const ModInventorySourceConsumer: FC<IModInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<IModInventorySource>>> {
}

export const ModInventoryProvider: FC<IModInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<IModInventorySource>>
		name={"ModInventory"}
		useQuery={useModInventoryQuery}
		useCountQuery={useModInventoryCountQuery}
		{...props}
	/>;
};

export const toModInventoryLink = (queryParams?: IModInventoryQueryParams) => toLink(ModInventoryApiLink, queryParams);
export const useModInventoryLink = () => toModInventoryLink;

export const useModInventoryPromise = createPromiseHook<ISourceQuery<IModInventorySource>, ISourceItem<IModInventorySource>, IModInventoryQueryParams>(ModInventoryApiLink, "post");
export const ModInventoryPromise = createPromise<ISourceQuery<IModInventorySource>, ISourceItem<IModInventorySource>, IModInventoryQueryParams>(ModInventoryApiLink, "post");

export interface IModInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IModInventorySource>>>> {
}

export const ModInventoryFilterProvider: FC<IModInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IModInventorySource>>> name={"ModInventory"} {...props}/>;

export const useModInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IModInventorySource>>>()
export const useModInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IModInventorySource>>>()

export interface IModInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IModInventorySource>>> {
}

export const ModInventoryProviderFilter: FC<IModInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.ModInventory'}
/>;

export interface IModInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IModInventorySource>>>> {
}

export const ModInventoryOrderByProvider: FC<IModInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IModInventorySource>>> name={"ModInventory"} {...props}/>;

export const useModInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IModInventorySource>>>()
export const useModInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IModInventorySource>>>()

export interface IModInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IModInventorySource>>, IQueryOrderBy<ISourceQuery<IModInventorySource>>, IModInventoryQueryParams>> {
}

export const ModInventoryProviderControl: FC<IModInventoryProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IModInventorySource>>, IQueryOrderBy<ISourceQuery<IModInventorySource>>> name={"ModInventory"} {...props}/>;

export interface IModInventoryListSourceProps extends Partial<IListProps<ISourceItem<IModInventorySource>>> {
	providerProps?: Partial<IModInventoryProviderProps>;
}

export const ModInventoryListSource: FC<IModInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <ModInventoryProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IModInventorySource>>
			{...props}
		/>
	</ModInventoryProvider>;
}

export interface IModInventoryInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IModInventorySource>>> {
	providerProps?: Partial<IModInventoryProviderProps>;
}

export const ModInventoryInfiniteListSource: FC<IModInventoryInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <ModInventoryProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IModInventorySource>>
			{...props}
		/>
	</ModInventoryProvider>;
}

export interface IModInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IModInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<IModInventorySource>>;
	providerProps?: Partial<IModInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const ModInventorySourceSelect: FC<IModInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<ModInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IModInventorySource>> {...props}/>
				</ModInventoryProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.ModInventory.title"}
					size={props.size}
					tooltip={"common.selection.ModInventory.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<ModInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</ModInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IModInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IModInventorySource>>> {
}

export const ModInventorySelectionProvider: FC<IModInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IModInventorySource>> {...props}/>
}

export const useModInventoryCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModInventoryCountApiLink]);
};

export const useModInventoryQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([ModInventoryApiLink]),
		withCount && queryClient.invalidateQueries([ModInventoryCountApiLink]),
	]);
};

export const useModInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IModInventorySource>>();
export const useModInventorySelectionContext = () => useSelectionContext<ISourceItem<IModInventorySource>>();
