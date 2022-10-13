/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IRecipeSource}  from "@/puff-smith/service/recipe/interface";
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

export const RecipeApiLink      = "/api/recipe/query";
export const RecipeCountApiLink = "/api/recipe/query/count";

export type IRecipeQueryParams = any;

export const useRecipeQuery      = createQueryHook<SourceInfer.Query<IRecipeSource>, SourceInfer.Item<IRecipeSource>[], IRecipeQueryParams>(RecipeApiLink, "post");
export const useRecipeCountQuery = createQueryHook<SourceInfer.Query<IRecipeSource>, number, IRecipeQueryParams>(RecipeCountApiLink, "post");

export const useRecipeSource = () => useSourceContext<SourceInfer.Item<IRecipeSource>>();

export interface IRecipeSourceContext extends ISourceContext<SourceInfer.Item<IRecipeSource>> {
}

export interface IRecipeSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<IRecipeSource>>> {
}

export const RecipeSourceConsumer: FC<IRecipeSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IRecipeProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<IRecipeSource>>> {
}

export const RecipeProvider: FC<IRecipeProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<IRecipeSource>>
		name={"Recipe"}
		useQuery={useRecipeQuery}
		useCountQuery={useRecipeCountQuery}
		{...props}
	/>;
};

export const toRecipeLink  = (queryParams?: IRecipeQueryParams) => toLink(RecipeApiLink, queryParams);
export const useRecipeLink = () => toRecipeLink;

export const useRecipePromise = createPromiseHook<SourceInfer.Query<IRecipeSource>, SourceInfer.Item<IRecipeSource>[], IRecipeQueryParams>(RecipeApiLink, "post");
export const RecipePromise    = createPromise<SourceInfer.Query<IRecipeSource>, SourceInfer.Item<IRecipeSource>[], IRecipeQueryParams>(RecipeApiLink, "post");

export interface IRecipeFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<IRecipeSource>>>> {
}

export const RecipeFilterProvider: FC<IRecipeFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<IRecipeSource>>> name={"Recipe"} {...props}/>;

export const useRecipeOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<IRecipeSource>>>();
export const useRecipeFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<IRecipeSource>>>();

export interface IRecipeProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<IRecipeSource>>> {
}

export const RecipeProviderFilter: FC<IRecipeProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Recipe"}
/>;

export interface IRecipeOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<IRecipeSource>>>> {
}

export const RecipeOrderByProvider: FC<IRecipeOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<IRecipeSource>>> name={"Recipe"} {...props}/>;

export const useRecipeOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IRecipeSource>>>();
export const useRecipeOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IRecipeSource>>>();

export interface IRecipeProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<IRecipeSource>>, QueryInfer.OrderBy<SourceInfer.Query<IRecipeSource>>, IRecipeQueryParams>> {
}

export const RecipeProviderControl: FC<IRecipeProviderControlProps> = props => <SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<IRecipeSource>>, QueryInfer.OrderBy<SourceInfer.Query<IRecipeSource>>> name={"Recipe"} {...props}/>;

export interface IRecipeTableSourceProps extends Partial<ITableProps<SourceInfer.Item<IRecipeSource>>> {
	providerProps?: Partial<IRecipeProviderProps>;
}

export const RecipeTableSource: FC<IRecipeTableSourceProps> = ({providerProps, ...props}) => {
	return <RecipeProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<IRecipeSource>>
			translation={RecipeApiLink}
			{...props}
		/>
	</RecipeProvider>;
};

export interface IRecipeListSourceProps extends Partial<IListProps<SourceInfer.Item<IRecipeSource>>> {
	providerProps?: Partial<IRecipeProviderProps>;
}

export const RecipeListSource: FC<IRecipeListSourceProps> = ({providerProps, ...props}) => {
	return <RecipeProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<IRecipeSource>>
			{...props}
		/>
	</RecipeProvider>;
};

export interface IRecipeInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<IRecipeSource>>> {
	providerProps?: Partial<IRecipeProviderProps>;
}

export const RecipeInfiniteListSource: FC<IRecipeInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <RecipeProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<IRecipeSource>>
			translation={{
				namespace: RecipeApiLink,
			}}
			{...props}
		/>
	</RecipeProvider>;
};

export interface IRecipeSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<IRecipeSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<IRecipeSource>>;
	providerProps?: Partial<IRecipeProviderProps>;
}

export const RecipeSourceSelect: FC<IRecipeSourceSelectProps> = ({providerProps, ...props}) => {
	return <RecipeProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<IRecipeSource>> {...props}/>
	</RecipeProvider>;
};

export interface IRecipeSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<IRecipeSource>>> {
}

export const RecipeSelectionProvider: FC<IRecipeSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<IRecipeSource>> {...props}/>;
};

export const useRecipeCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([RecipeCountApiLink]);
};

export const useRecipeQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([RecipeApiLink]),
		withCount && queryClient.invalidateQueries([RecipeCountApiLink]),
	]);
};

export const useRecipeOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<IRecipeSource>>();
export const useRecipeSelectionContext         = () => useSelectionContext<SourceInfer.Item<IRecipeSource>>();

export interface IRecipeDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<IRecipeSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const RecipeDrawerItem: FC<IRecipeDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<IRecipeSource>>
			sourceProviderProps={{
				name:          "Recipe",
				useQuery:      useRecipeQuery,
				useCountQuery: useRecipeCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					RecipePromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: RecipeApiLink,
					text:      "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>;
};
