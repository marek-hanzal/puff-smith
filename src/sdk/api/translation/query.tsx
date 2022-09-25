/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITranslationSource} from "@/puff-smith/service/translation/interface";
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

export const TranslationApiLink = "/api/translation/query";
export const TranslationCountApiLink = "/api/translation/query/count";

export type ITranslationQueryParams = any;

export const useTranslationQuery = createQueryHook<ISourceQuery<ITranslationSource>, ISourceItem<ITranslationSource>[], ITranslationQueryParams>(TranslationApiLink, "post");
export const useTranslationCountQuery = createQueryHook<ISourceQuery<ITranslationSource>, number, ITranslationQueryParams>(TranslationCountApiLink, "post");

export const useTranslationSource = () => useSourceContext<ISourceItem<ITranslationSource>>();

export interface ITranslationSourceContext extends ISourceContext<ISourceItem<ITranslationSource>> {
}

export interface ITranslationSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ITranslationSource>>> {
}

export const TranslationSourceConsumer: FC<ITranslationSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITranslationProviderProps extends Partial<ISourceProviderProps<ISourceItem<ITranslationSource>>> {
}

export const TranslationProvider: FC<ITranslationProviderProps> = props => {
	return <SourceProvider<ISourceItem<ITranslationSource>>
		name={"Translation"}
		useQuery={useTranslationQuery}
		useCountQuery={useTranslationCountQuery}
		{...props}
	/>;
};

export const toTranslationLink = (queryParams?: ITranslationQueryParams) => toLink(TranslationApiLink, queryParams);
export const useTranslationLink = () => toTranslationLink;

export const useTranslationPromise = createPromiseHook<ISourceQuery<ITranslationSource>, ISourceItem<ITranslationSource>[], ITranslationQueryParams>(TranslationApiLink, "post");
export const TranslationPromise = createPromise<ISourceQuery<ITranslationSource>, ISourceItem<ITranslationSource>[], ITranslationQueryParams>(TranslationApiLink, "post");

export interface ITranslationFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ITranslationSource>>>> {
}

export const TranslationFilterProvider: FC<ITranslationFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ITranslationSource>>> name={"Translation"} {...props}/>;

export const useTranslationOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ITranslationSource>>>();
export const useTranslationFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ITranslationSource>>>();

export interface ITranslationProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ITranslationSource>>> {
}

export const TranslationProviderFilter: FC<ITranslationProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Translation"}
/>;

export interface ITranslationOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ITranslationSource>>>> {
}

export const TranslationOrderByProvider: FC<ITranslationOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ITranslationSource>>> name={"Translation"} {...props}/>;

export const useTranslationOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ITranslationSource>>>();
export const useTranslationOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ITranslationSource>>>();

export interface ITranslationProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ITranslationSource>>, IQueryOrderBy<ISourceQuery<ITranslationSource>>, ITranslationQueryParams>> {
}

export const TranslationProviderControl: FC<ITranslationProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<ITranslationSource>>, IQueryOrderBy<ISourceQuery<ITranslationSource>>> name={"Translation"} {...props}/>;

export interface ITranslationTableSourceProps extends Partial<ITableProps<ISourceItem<ITranslationSource>>> {
	providerProps?: Partial<ITranslationProviderProps>;
}

export const TranslationTableSource: FC<ITranslationTableSourceProps> = ({providerProps, ...props}) => {
	return <TranslationProvider
		withCount
		{...providerProps}
	>
		<Table<ISourceItem<ITranslationSource>>
			translation={TranslationApiLink}
			{...props}
		/>
	</TranslationProvider>;
}

export interface ITranslationListSourceProps extends Partial<IListProps<ISourceItem<ITranslationSource>>> {
	providerProps?: Partial<ITranslationProviderProps>;
}

export const TranslationListSource: FC<ITranslationListSourceProps> = ({providerProps, ...props}) => {
	return <TranslationProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<ITranslationSource>>
			{...props}
		/>
	</TranslationProvider>;
}

export interface ITranslationInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<ITranslationSource>>> {
	providerProps?: Partial<ITranslationProviderProps>;
}

export const TranslationInfiniteListSource: FC<ITranslationInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <TranslationProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<ITranslationSource>>
			{...props}
		/>
	</TranslationProvider>;
}

export interface ITranslationSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ITranslationSource>> {
	toOption: IToOptionMapper<ISourceItem<ITranslationSource>>;
	providerProps?: Partial<ITranslationProviderProps>;
}

export const TranslationSourceSelect: FC<ITranslationSourceSelectProps> = ({providerProps, ...props}) => {
	return <TranslationProvider {...providerProps}>
		<QuerySourceSelect<ISourceItem<ITranslationSource>> {...props}/>
	</TranslationProvider>;
};

export interface ITranslationSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ITranslationSource>>> {
}

export const TranslationSelectionProvider: FC<ITranslationSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ITranslationSource>> {...props}/>;
}

export const useTranslationCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TranslationCountApiLink]);
};

export const useTranslationQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([TranslationApiLink]),
		withCount && queryClient.invalidateQueries([TranslationCountApiLink]),
	]);
};

export const useTranslationOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ITranslationSource>>();
export const useTranslationSelectionContext = () => useSelectionContext<ISourceItem<ITranslationSource>>();

export interface ITranslationDrawerItemProps extends Omit<IDrawerSelectItemProps<ISourceItem<ITranslationSource>>, "ofSelection"> {
}

export const TranslationDrawerItem: FC<ITranslationDrawerItemProps> = ({onSelection, ...props}) => {
	return <TranslationProvider
		withCount
	>
		<BlockProvider>
			<BlockContext.Consumer>
				{blockContext => <DrawerSelectItem<ISourceItem<ITranslationSource>>
					onSelection={onSelection}
					ofSelection={({value, selectionContext}) => {
						value && blockContext.block();
						value ? TranslationPromise({filter: {id: value as any}}).then(items => {
							selectionContext.items(items, true);
							blockContext.unblock(true);
							onSelection?.(selectionContext.selection());
						}) : undefined;
					}}
					drawerSelectProps={{
						translation: {
							namespace: TranslationApiLink,
							text: "select.title",
						}
					}}
					{...props}
				/>}
			</BlockContext.Consumer>
		</BlockProvider>
	</TranslationProvider>
}
