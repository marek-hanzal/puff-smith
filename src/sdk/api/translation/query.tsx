/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {
	ISourceContext,
	IToOptionMapper,
	QueryInfer,
	SourceInfer
}                           from "@leight-core/api";
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
}                           from "@leight-core/client";
import {useQueryClient}     from "@tanstack/react-query";
import {
	ConsumerProps,
	FC
}                           from "react";

export const TranslationApiLink      = "/api/translation/query";
export const TranslationCountApiLink = "/api/translation/query/count";

export type ITranslationQueryParams = any;

export const useTranslationQuery      = createQueryHook<SourceInfer.Query<ITranslationSource>, SourceInfer.Item<ITranslationSource>[], ITranslationQueryParams>(TranslationApiLink, "post");
export const useTranslationCountQuery = createQueryHook<SourceInfer.Query<ITranslationSource>, number, ITranslationQueryParams>(TranslationCountApiLink, "post");

export const useTranslationSource = () => useSourceContext<SourceInfer.Item<ITranslationSource>>();

export interface ITranslationSourceContext extends ISourceContext<SourceInfer.Item<ITranslationSource>> {
}

export interface ITranslationSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<ITranslationSource>>> {
}

export const TranslationSourceConsumer: FC<ITranslationSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITranslationProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<ITranslationSource>>> {
}

export const TranslationProvider: FC<ITranslationProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<ITranslationSource>>
		name={"Translation"}
		useQuery={useTranslationQuery}
		useCountQuery={useTranslationCountQuery}
		{...props}
	/>;
};

export const toTranslationLink  = (queryParams?: ITranslationQueryParams) => toLink(TranslationApiLink, queryParams);
export const useTranslationLink = () => toTranslationLink;

export const useTranslationPromise = createPromiseHook<SourceInfer.Query<ITranslationSource>, SourceInfer.Item<ITranslationSource>[], ITranslationQueryParams>(TranslationApiLink, "post");
export const TranslationPromise    = createPromise<SourceInfer.Query<ITranslationSource>, SourceInfer.Item<ITranslationSource>[], ITranslationQueryParams>(TranslationApiLink, "post");

export interface ITranslationFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<ITranslationSource>>>> {
}

export const TranslationFilterProvider: FC<ITranslationFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<ITranslationSource>>> name={"Translation"} {...props}/>;

export const useTranslationOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<ITranslationSource>>>();
export const useTranslationFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<ITranslationSource>>>();

export interface ITranslationProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<ITranslationSource>>> {
}

export const TranslationProviderFilter: FC<ITranslationProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Translation"}
/>;

export interface ITranslationOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<ITranslationSource>>>> {
}

export const TranslationOrderByProvider: FC<ITranslationOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<ITranslationSource>>> name={"Translation"} {...props}/>;

export const useTranslationOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<ITranslationSource>>>();
export const useTranslationOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<ITranslationSource>>>();

export interface ITranslationProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<ITranslationSource>>, QueryInfer.OrderBy<SourceInfer.Query<ITranslationSource>>, ITranslationQueryParams>> {
}

export const TranslationProviderControl: FC<ITranslationProviderControlProps> = props =>
	<SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<ITranslationSource>>, QueryInfer.OrderBy<SourceInfer.Query<ITranslationSource>>> name={"Translation"} {...props}/>;

export interface ITranslationTableSourceProps extends Partial<ITableProps<SourceInfer.Item<ITranslationSource>>> {
	providerProps?: Partial<ITranslationProviderProps>;
}

export const TranslationTableSource: FC<ITranslationTableSourceProps> = ({providerProps, ...props}) => {
	return <TranslationProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<ITranslationSource>>
			translation={TranslationApiLink}
			{...props}
		/>
	</TranslationProvider>;
}

export interface ITranslationListSourceProps extends Partial<IListProps<SourceInfer.Item<ITranslationSource>>> {
	providerProps?: Partial<ITranslationProviderProps>;
}

export const TranslationListSource: FC<ITranslationListSourceProps> = ({providerProps, ...props}) => {
	return <TranslationProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<ITranslationSource>>
			{...props}
		/>
	</TranslationProvider>;
}

export interface ITranslationInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<ITranslationSource>>> {
	providerProps?: Partial<ITranslationProviderProps>;
}

export const TranslationInfiniteListSource: FC<ITranslationInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <TranslationProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<ITranslationSource>>
			translation={{
				namespace: TranslationApiLink,
			}}
			{...props}
		/>
	</TranslationProvider>;
}

export interface ITranslationSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<ITranslationSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<ITranslationSource>>;
	providerProps?: Partial<ITranslationProviderProps>;
}

export const TranslationSourceSelect: FC<ITranslationSourceSelectProps> = ({providerProps, ...props}) => {
	return <TranslationProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<ITranslationSource>> {...props}/>
	</TranslationProvider>;
};

export interface ITranslationSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<ITranslationSource>>> {
}

export const TranslationSelectionProvider: FC<ITranslationSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<ITranslationSource>> {...props}/>;
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

export const useTranslationOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<ITranslationSource>>();
export const useTranslationSelectionContext         = () => useSelectionContext<SourceInfer.Item<ITranslationSource>>();

export interface ITranslationDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<ITranslationSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const TranslationDrawerItem: FC<ITranslationDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<ITranslationSource>>
			sourceProviderProps={{
				name:          "Translation",
				useQuery:      useTranslationQuery,
				useCountQuery: useTranslationCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					TranslationPromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: TranslationApiLink,
					text: "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>
}
