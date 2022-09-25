/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {IQueryFilter, IQueryOrderBy, ISourceContext, ISourceItem, ISourceQuery, IToOptionMapper} from "@leight-core/api";
import {
	BlockContext,
	BlockProvider,
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerSelectItem,
	Filter,
	FilterProvider,
	IDrawerSelectItemProps,
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
	ITableProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	Table,
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
import {ConsumerProps, FC} from "react";

export const LiquidApiLink = "/api/liquid/query";
export const LiquidCountApiLink = "/api/liquid/query/count";

export type ILiquidQueryParams = any;

export const useLiquidQuery = createQueryHook<ISourceQuery<ILiquidSource>, ISourceItem<ILiquidSource>[], ILiquidQueryParams>(LiquidApiLink, "post");
export const useLiquidCountQuery = createQueryHook<ISourceQuery<ILiquidSource>, number, ILiquidQueryParams>(LiquidCountApiLink, "post");

export const useLiquidSource = () => useSourceContext<ISourceItem<ILiquidSource>>();

export interface ILiquidSourceContext extends ISourceContext<ISourceItem<ILiquidSource>> {
}

export interface ILiquidSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ILiquidSource>>> {
}

export const LiquidSourceConsumer: FC<ILiquidSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ILiquidProviderProps extends Partial<ISourceProviderProps<ISourceItem<ILiquidSource>>> {
}

export const LiquidProvider: FC<ILiquidProviderProps> = props => {
	return <SourceProvider<ISourceItem<ILiquidSource>>
		name={"Liquid"}
		useQuery={useLiquidQuery}
		useCountQuery={useLiquidCountQuery}
		{...props}
	/>;
};

export const toLiquidLink = (queryParams?: ILiquidQueryParams) => toLink(LiquidApiLink, queryParams);
export const useLiquidLink = () => toLiquidLink;

export const useLiquidPromise = createPromiseHook<ISourceQuery<ILiquidSource>, ISourceItem<ILiquidSource>[], ILiquidQueryParams>(LiquidApiLink, "post");
export const LiquidPromise = createPromise<ISourceQuery<ILiquidSource>, ISourceItem<ILiquidSource>[], ILiquidQueryParams>(LiquidApiLink, "post");

export interface ILiquidFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ILiquidSource>>>> {
}

export const LiquidFilterProvider: FC<ILiquidFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ILiquidSource>>> name={"Liquid"} {...props}/>;

export const useLiquidOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ILiquidSource>>>();
export const useLiquidFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ILiquidSource>>>();

export interface ILiquidProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ILiquidSource>>> {
}

export const LiquidProviderFilter: FC<ILiquidProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Liquid"}
/>;

export interface ILiquidOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ILiquidSource>>>> {
}

export const LiquidOrderByProvider: FC<ILiquidOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ILiquidSource>>> name={"Liquid"} {...props}/>;

export const useLiquidOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ILiquidSource>>>();
export const useLiquidOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ILiquidSource>>>();

export interface ILiquidProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ILiquidSource>>, IQueryOrderBy<ISourceQuery<ILiquidSource>>, ILiquidQueryParams>> {
}

export const LiquidProviderControl: FC<ILiquidProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ILiquidSource>>, IQueryOrderBy<ISourceQuery<ILiquidSource>>> name={"Liquid"} {...props}/>;

export interface ILiquidTableSourceProps extends Partial<ITableProps<ISourceItem<ILiquidSource>>> {
	providerProps?: Partial<ILiquidProviderProps>;
}

export const LiquidTableSource: FC<ILiquidTableSourceProps> = ({providerProps, ...props}) => {
	return <LiquidProvider
		withCount
		{...providerProps}
	>
		<Table<ISourceItem<ILiquidSource>>
			translation={LiquidApiLink}
			{...props}
		/>
	</LiquidProvider>;
}

export interface ILiquidListSourceProps extends Partial<IListProps<ISourceItem<ILiquidSource>>> {
	providerProps?: Partial<ILiquidProviderProps>;
}

export const LiquidListSource: FC<ILiquidListSourceProps> = ({providerProps, ...props}) => {
	return <LiquidProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<ILiquidSource>>
			{...props}
		/>
	</LiquidProvider>;
}

export interface ILiquidInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<ILiquidSource>>> {
	providerProps?: Partial<ILiquidProviderProps>;
}

export const LiquidInfiniteListSource: FC<ILiquidInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <LiquidProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<ILiquidSource>>
			{...props}
		/>
	</LiquidProvider>;
}

export interface ILiquidSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ILiquidSource>> {
	toOption: IToOptionMapper<ISourceItem<ILiquidSource>>;
	providerProps?: Partial<ILiquidProviderProps>;
}

export const LiquidSourceSelect: FC<ILiquidSourceSelectProps> = ({providerProps, ...props}) => {
	return <LiquidProvider {...providerProps}>
		<QuerySourceSelect<ISourceItem<ILiquidSource>> {...props}/>
	</LiquidProvider>;
};

export interface ILiquidSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ILiquidSource>>> {
}

export const LiquidSelectionProvider: FC<ILiquidSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ILiquidSource>> {...props}/>;
}

export const useLiquidCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([LiquidCountApiLink]);
};

export const useLiquidQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([LiquidApiLink]),
		withCount && queryClient.invalidateQueries([LiquidCountApiLink]),
	]);
};

export const useLiquidOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ILiquidSource>>();
export const useLiquidSelectionContext = () => useSelectionContext<ISourceItem<ILiquidSource>>();

export interface ILiquidDrawerItemProps extends Omit<IDrawerSelectItemProps<ISourceItem<ILiquidSource>>, "ofSelection"> {
}

export const LiquidDrawerItem: FC<ILiquidDrawerItemProps> = props => {
	return <LiquidProvider
		withCount
	>
		<BlockProvider>
			<BlockContext.Consumer>
				{blockContext => <DrawerSelectItem<ISourceItem<ILiquidSource>>
					ofSelection={({value, selectionContext}) => {
						value && blockContext.block();
						value ? LiquidPromise({filter: {id: value as any}}).then(items => {
							selectionContext.items(items, true);
							blockContext.unblock(true);
						}) : undefined;
					}}
					drawerSelectProps={{
						translation: {
							namespace: LiquidApiLink,
							text: "select.title",
						}
					}}
					{...props}
				/>}
			</BlockContext.Consumer>
		</BlockProvider>
	</LiquidProvider>
}
