/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {IQueryFilter, IQueryOrderBy, ISourceContext, ISourceItem, ISourceQuery, IToOptionMapper} from "@leight-core/api";
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

export const RecipeApiLink = "/api/recipe/query";
export const RecipeCountApiLink = "/api/recipe/query/count";

export type IRecipeQueryParams = any;

export const useRecipeQuery = createQueryHook<ISourceQuery<IRecipeSource>, ISourceItem<IRecipeSource>[], IRecipeQueryParams>(RecipeApiLink, "post");
export const useRecipeCountQuery = createQueryHook<ISourceQuery<IRecipeSource>, number, IRecipeQueryParams>(RecipeCountApiLink, "post");

export const useRecipeSource = () => useSourceContext<ISourceItem<IRecipeSource>>();

export interface IRecipeSourceContext extends ISourceContext<ISourceItem<IRecipeSource>> {
}

export interface IRecipeSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IRecipeSource>>> {
}

export const RecipeSourceConsumer: FC<IRecipeSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IRecipeProviderProps extends Partial<ISourceProviderProps<ISourceItem<IRecipeSource>>> {
}

export const RecipeProvider: FC<IRecipeProviderProps> = props => {
	return <SourceProvider<ISourceItem<IRecipeSource>>
		name={"Recipe"}
		useQuery={useRecipeQuery}
		useCountQuery={useRecipeCountQuery}
		{...props}
	/>;
};

export const toRecipeLink = (queryParams?: IRecipeQueryParams) => toLink(RecipeApiLink, queryParams);
export const useRecipeLink = () => toRecipeLink;

export const useRecipePromise = createPromiseHook<ISourceQuery<IRecipeSource>, ISourceItem<IRecipeSource>[], IRecipeQueryParams>(RecipeApiLink, "post");
export const RecipePromise = createPromise<ISourceQuery<IRecipeSource>, ISourceItem<IRecipeSource>[], IRecipeQueryParams>(RecipeApiLink, "post");

export interface IRecipeFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IRecipeSource>>>> {
}

export const RecipeFilterProvider: FC<IRecipeFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IRecipeSource>>> name={"Recipe"} {...props}/>;

export const useRecipeOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IRecipeSource>>>();
export const useRecipeFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IRecipeSource>>>();

export interface IRecipeProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IRecipeSource>>> {
}

export const RecipeProviderFilter: FC<IRecipeProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Recipe"}
/>;

export interface IRecipeOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IRecipeSource>>>> {
}

export const RecipeOrderByProvider: FC<IRecipeOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IRecipeSource>>> name={"Recipe"} {...props}/>;

export const useRecipeOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IRecipeSource>>>();
export const useRecipeOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IRecipeSource>>>();

export interface IRecipeProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IRecipeSource>>, IQueryOrderBy<ISourceQuery<IRecipeSource>>, IRecipeQueryParams>> {
}

export const RecipeProviderControl: FC<IRecipeProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IRecipeSource>>, IQueryOrderBy<ISourceQuery<IRecipeSource>>> name={"Recipe"} {...props}/>;

export interface IRecipeTableSourceProps extends Partial<ITableProps<ISourceItem<IRecipeSource>>> {
	providerProps?: Partial<IRecipeProviderProps>;
}

export const RecipeTableSource: FC<IRecipeTableSourceProps> = ({providerProps, ...props}) => {
	return <RecipeProvider
		withCount
		{...providerProps}
	>
		<Table<ISourceItem<IRecipeSource>>
			translation={RecipeApiLink}
			{...props}
		/>
	</RecipeProvider>;
}

export interface IRecipeListSourceProps extends Partial<IListProps<ISourceItem<IRecipeSource>>> {
	providerProps?: Partial<IRecipeProviderProps>;
}

export const RecipeListSource: FC<IRecipeListSourceProps> = ({providerProps, ...props}) => {
	return <RecipeProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IRecipeSource>>
			{...props}
		/>
	</RecipeProvider>;
}

export interface IRecipeInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IRecipeSource>>> {
	providerProps?: Partial<IRecipeProviderProps>;
}

export const RecipeInfiniteListSource: FC<IRecipeInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <RecipeProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IRecipeSource>>
			translation={{
				namespace: RecipeApiLink,
			}}
			{...props}
		/>
	</RecipeProvider>;
}

export interface IRecipeSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IRecipeSource>> {
	toOption: IToOptionMapper<ISourceItem<IRecipeSource>>;
	providerProps?: Partial<IRecipeProviderProps>;
}

export const RecipeSourceSelect: FC<IRecipeSourceSelectProps> = ({providerProps, ...props}) => {
	return <RecipeProvider {...providerProps}>
		<QuerySourceSelect<ISourceItem<IRecipeSource>> {...props}/>
	</RecipeProvider>;
};

export interface IRecipeSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IRecipeSource>>> {
}

export const RecipeSelectionProvider: FC<IRecipeSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IRecipeSource>> {...props}/>;
}

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

export const useRecipeOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IRecipeSource>>();
export const useRecipeSelectionContext = () => useSelectionContext<ISourceItem<IRecipeSource>>();

export interface IRecipeDrawerItemProps extends Omit<IDrawerSelectItemProps<ISourceItem<IRecipeSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const RecipeDrawerItem: FC<IRecipeDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<ISourceItem<IRecipeSource>>
			sourceProviderProps={{
				name: "Recipe",
				useQuery: useRecipeQuery,
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
					text: "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>
}
