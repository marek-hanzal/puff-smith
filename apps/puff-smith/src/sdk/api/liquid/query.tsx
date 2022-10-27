/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidSource}  from "@/puff-smith/service/liquid/interface";
import {
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
	ISourceContext,
	ISourceControlProviderProps,
	ISourceProviderProps,
	ITableProps,
	IToOptionMapper,
	List,
	OrderByProvider,
	QueryInfer,
	QuerySourceSelect,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceInfer,
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
}                       from "@leight-core/viv";
import {useQueryClient} from "@tanstack/react-query";
import {
	ConsumerProps,
	FC
}                       from "react";

export const LiquidApiLink      = "/api/liquid/query";
export const LiquidCountApiLink = "/api/liquid/query/count";

export type ILiquidQueryParams = any;

export const useLiquidQuery      = createQueryHook<SourceInfer.Query<ILiquidSource>, SourceInfer.Item<ILiquidSource>[], ILiquidQueryParams>(LiquidApiLink, "post");
export const useLiquidCountQuery = createQueryHook<SourceInfer.Query<ILiquidSource>, number, ILiquidQueryParams>(LiquidCountApiLink, "post");

export const useLiquidSource = () => useSourceContext<SourceInfer.Item<ILiquidSource>>();

export interface ILiquidSourceContext extends ISourceContext<SourceInfer.Item<ILiquidSource>> {
}

export interface ILiquidSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<ILiquidSource>>> {
}

export const LiquidSourceConsumer: FC<ILiquidSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ILiquidProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<ILiquidSource>>> {
}

export const LiquidProvider: FC<ILiquidProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<ILiquidSource>>
		name={"Liquid"}
		useQuery={useLiquidQuery}
		useCountQuery={useLiquidCountQuery}
		{...props}
	/>;
};

export const toLiquidLink  = (queryParams?: ILiquidQueryParams) => toLink(LiquidApiLink, queryParams);
export const useLiquidLink = () => toLiquidLink;

export const useLiquidPromise = createPromiseHook<SourceInfer.Query<ILiquidSource>, SourceInfer.Item<ILiquidSource>[], ILiquidQueryParams>(LiquidApiLink, "post");
export const LiquidPromise    = createPromise<SourceInfer.Query<ILiquidSource>, SourceInfer.Item<ILiquidSource>[], ILiquidQueryParams>(LiquidApiLink, "post");

export interface ILiquidFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<ILiquidSource>>>> {
}

export const LiquidFilterProvider: FC<ILiquidFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<ILiquidSource>>> name={"Liquid"} {...props}/>;

export const useLiquidOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<ILiquidSource>>>();
export const useLiquidFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<ILiquidSource>>>();

export interface ILiquidProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<ILiquidSource>>> {
}

export const LiquidProviderFilter: FC<ILiquidProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Liquid"}
/>;

export interface ILiquidOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<ILiquidSource>>>> {
}

export const LiquidOrderByProvider: FC<ILiquidOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<ILiquidSource>>> name={"Liquid"} {...props}/>;

export const useLiquidOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<ILiquidSource>>>();
export const useLiquidOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<ILiquidSource>>>();

export interface ILiquidProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<ILiquidSource>>, QueryInfer.OrderBy<SourceInfer.Query<ILiquidSource>>, ILiquidQueryParams>> {
}

export const LiquidProviderControl: FC<ILiquidProviderControlProps> = props => <SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<ILiquidSource>>, QueryInfer.OrderBy<SourceInfer.Query<ILiquidSource>>> name={"Liquid"} {...props}/>;

export interface ILiquidTableSourceProps extends Partial<ITableProps<SourceInfer.Item<ILiquidSource>>> {
	providerProps?: Partial<ILiquidProviderProps>;
}

export const LiquidTableSource: FC<ILiquidTableSourceProps> = ({providerProps, ...props}) => {
	return <LiquidProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<ILiquidSource>>
			translation={LiquidApiLink}
			{...props}
		/>
	</LiquidProvider>;
};

export interface ILiquidListSourceProps extends Partial<IListProps<SourceInfer.Item<ILiquidSource>>> {
	providerProps?: Partial<ILiquidProviderProps>;
}

export const LiquidListSource: FC<ILiquidListSourceProps> = ({providerProps, ...props}) => {
	return <LiquidProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<ILiquidSource>>
			{...props}
		/>
	</LiquidProvider>;
};

export interface ILiquidInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<ILiquidSource>>> {
	providerProps?: Partial<ILiquidProviderProps>;
}

export const LiquidInfiniteListSource: FC<ILiquidInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <LiquidProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<ILiquidSource>>
			translation={{
				namespace: LiquidApiLink,
			}}
			{...props}
		/>
	</LiquidProvider>;
};

export interface ILiquidSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<ILiquidSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<ILiquidSource>>;
	providerProps?: Partial<ILiquidProviderProps>;
}

export const LiquidSourceSelect: FC<ILiquidSourceSelectProps> = ({providerProps, ...props}) => {
	return <LiquidProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<ILiquidSource>> {...props}/>
	</LiquidProvider>;
};

export interface ILiquidSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<ILiquidSource>>> {
}

export const LiquidSelectionProvider: FC<ILiquidSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<ILiquidSource>> {...props}/>;
};

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

export const useLiquidOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<ILiquidSource>>();
export const useLiquidSelectionContext         = () => useSelectionContext<SourceInfer.Item<ILiquidSource>>();

export interface ILiquidDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<ILiquidSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const LiquidDrawerItem: FC<ILiquidDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<ILiquidSource>>
			sourceProviderProps={{
				name:          "Liquid",
				useQuery:      useLiquidQuery,
				useCountQuery: useLiquidCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					LiquidPromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: LiquidApiLink,
					text:      "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>;
};
