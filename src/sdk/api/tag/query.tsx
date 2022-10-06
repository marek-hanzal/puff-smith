/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITagSource}     from "@/puff-smith/service/tag/interface";
import {
	ISourceContext,
	IToOptionMapper,
	QueryInfer,
	SourceInfer
}                       from "@leight-core/api";
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
}                       from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {
	ConsumerProps,
	FC
}                       from "react";

export const TagApiLink      = "/api/tag/query";
export const TagCountApiLink = "/api/tag/query/count";

export type ITagQueryParams = any;

export const useTagQuery      = createQueryHook<SourceInfer.Query<ITagSource>, SourceInfer.Item<ITagSource>[], ITagQueryParams>(TagApiLink, "post");
export const useTagCountQuery = createQueryHook<SourceInfer.Query<ITagSource>, number, ITagQueryParams>(TagCountApiLink, "post");

export const useTagSource = () => useSourceContext<SourceInfer.Item<ITagSource>>();

export interface ITagSourceContext extends ISourceContext<SourceInfer.Item<ITagSource>> {
}

export interface ITagSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<ITagSource>>> {
}

export const TagSourceConsumer: FC<ITagSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITagProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<ITagSource>>> {
}

export const TagProvider: FC<ITagProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<ITagSource>>
		name={"Tag"}
		useQuery={useTagQuery}
		useCountQuery={useTagCountQuery}
		{...props}
	/>;
};

export const toTagLink  = (queryParams?: ITagQueryParams) => toLink(TagApiLink, queryParams);
export const useTagLink = () => toTagLink;

export const useTagPromise = createPromiseHook<SourceInfer.Query<ITagSource>, SourceInfer.Item<ITagSource>[], ITagQueryParams>(TagApiLink, "post");
export const TagPromise    = createPromise<SourceInfer.Query<ITagSource>, SourceInfer.Item<ITagSource>[], ITagQueryParams>(TagApiLink, "post");

export interface ITagFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<ITagSource>>>> {
}

export const TagFilterProvider: FC<ITagFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<ITagSource>>> name={"Tag"} {...props}/>;

export const useTagOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<ITagSource>>>();
export const useTagFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<ITagSource>>>();

export interface ITagProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<ITagSource>>> {
}

export const TagProviderFilter: FC<ITagProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Tag"}
/>;

export interface ITagOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<ITagSource>>>> {
}

export const TagOrderByProvider: FC<ITagOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<ITagSource>>> name={"Tag"} {...props}/>;

export const useTagOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<ITagSource>>>();
export const useTagOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<ITagSource>>>();

export interface ITagProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<ITagSource>>, QueryInfer.OrderBy<SourceInfer.Query<ITagSource>>, ITagQueryParams>> {
}

export const TagProviderControl: FC<ITagProviderControlProps> = props => <SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<ITagSource>>, QueryInfer.OrderBy<SourceInfer.Query<ITagSource>>> name={"Tag"} {...props}/>;

export interface ITagTableSourceProps extends Partial<ITableProps<SourceInfer.Item<ITagSource>>> {
	providerProps?: Partial<ITagProviderProps>;
}

export const TagTableSource: FC<ITagTableSourceProps> = ({providerProps, ...props}) => {
	return <TagProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<ITagSource>>
			translation={TagApiLink}
			{...props}
		/>
	</TagProvider>;
}

export interface ITagListSourceProps extends Partial<IListProps<SourceInfer.Item<ITagSource>>> {
	providerProps?: Partial<ITagProviderProps>;
}

export const TagListSource: FC<ITagListSourceProps> = ({providerProps, ...props}) => {
	return <TagProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<ITagSource>>
			{...props}
		/>
	</TagProvider>;
}

export interface ITagInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<ITagSource>>> {
	providerProps?: Partial<ITagProviderProps>;
}

export const TagInfiniteListSource: FC<ITagInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <TagProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<ITagSource>>
			translation={{
				namespace: TagApiLink,
			}}
			{...props}
		/>
	</TagProvider>;
}

export interface ITagSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<ITagSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<ITagSource>>;
	providerProps?: Partial<ITagProviderProps>;
}

export const TagSourceSelect: FC<ITagSourceSelectProps> = ({providerProps, ...props}) => {
	return <TagProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<ITagSource>> {...props}/>
	</TagProvider>;
};

export interface ITagSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<ITagSource>>> {
}

export const TagSelectionProvider: FC<ITagSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<ITagSource>> {...props}/>;
}

export const useTagCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TagCountApiLink]);
};

export const useTagQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([TagApiLink]),
		withCount && queryClient.invalidateQueries([TagCountApiLink]),
	]);
};

export const useTagOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<ITagSource>>();
export const useTagSelectionContext         = () => useSelectionContext<SourceInfer.Item<ITagSource>>();

export interface ITagDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<ITagSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const TagDrawerItem: FC<ITagDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<ITagSource>>
			sourceProviderProps={{
				name:          "Tag",
				useQuery:      useTagQuery,
				useCountQuery: useTagCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					TagPromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: TagApiLink,
					text: "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>
}
