/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaSource}   from "@/puff-smith/service/aroma/interface";
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

export const AromaApiLink      = "/api/aroma/query";
export const AromaCountApiLink = "/api/aroma/query/count";

export type IAromaQueryParams = any;

export const useAromaQuery      = createQueryHook<SourceInfer.Query<IAromaSource>, SourceInfer.Item<IAromaSource>[], IAromaQueryParams>(AromaApiLink, "post");
export const useAromaCountQuery = createQueryHook<SourceInfer.Query<IAromaSource>, number, IAromaQueryParams>(AromaCountApiLink, "post");

export const useAromaSource = () => useSourceContext<SourceInfer.Item<IAromaSource>>();

export interface IAromaSourceContext extends ISourceContext<SourceInfer.Item<IAromaSource>> {
}

export interface IAromaSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<IAromaSource>>> {
}

export const AromaSourceConsumer: FC<IAromaSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<IAromaSource>>> {
}

export const AromaProvider: FC<IAromaProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<IAromaSource>>
		name={"Aroma"}
		useQuery={useAromaQuery}
		useCountQuery={useAromaCountQuery}
		{...props}
	/>;
};

export const toAromaLink  = (queryParams?: IAromaQueryParams) => toLink(AromaApiLink, queryParams);
export const useAromaLink = () => toAromaLink;

export const useAromaPromise = createPromiseHook<SourceInfer.Query<IAromaSource>, SourceInfer.Item<IAromaSource>[], IAromaQueryParams>(AromaApiLink, "post");
export const AromaPromise    = createPromise<SourceInfer.Query<IAromaSource>, SourceInfer.Item<IAromaSource>[], IAromaQueryParams>(AromaApiLink, "post");

export interface IAromaFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<IAromaSource>>>> {
}

export const AromaFilterProvider: FC<IAromaFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<IAromaSource>>> name={"Aroma"} {...props}/>;

export const useAromaOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<IAromaSource>>>();
export const useAromaFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<IAromaSource>>>();

export interface IAromaProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<IAromaSource>>> {
}

export const AromaProviderFilter: FC<IAromaProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Aroma"}
/>;

export interface IAromaOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<IAromaSource>>>> {
}

export const AromaOrderByProvider: FC<IAromaOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<IAromaSource>>> name={"Aroma"} {...props}/>;

export const useAromaOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IAromaSource>>>();
export const useAromaOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IAromaSource>>>();

export interface IAromaProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<IAromaSource>>, QueryInfer.OrderBy<SourceInfer.Query<IAromaSource>>, IAromaQueryParams>> {
}

export const AromaProviderControl: FC<IAromaProviderControlProps> = props => <SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<IAromaSource>>, QueryInfer.OrderBy<SourceInfer.Query<IAromaSource>>> name={"Aroma"} {...props}/>;

export interface IAromaTableSourceProps extends Partial<ITableProps<SourceInfer.Item<IAromaSource>>> {
	providerProps?: Partial<IAromaProviderProps>;
}

export const AromaTableSource: FC<IAromaTableSourceProps> = ({providerProps, ...props}) => {
	return <AromaProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<IAromaSource>>
			translation={AromaApiLink}
			{...props}
		/>
	</AromaProvider>;
};

export interface IAromaListSourceProps extends Partial<IListProps<SourceInfer.Item<IAromaSource>>> {
	providerProps?: Partial<IAromaProviderProps>;
}

export const AromaListSource: FC<IAromaListSourceProps> = ({providerProps, ...props}) => {
	return <AromaProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<IAromaSource>>
			{...props}
		/>
	</AromaProvider>;
};

export interface IAromaInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<IAromaSource>>> {
	providerProps?: Partial<IAromaProviderProps>;
}

export const AromaInfiniteListSource: FC<IAromaInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <AromaProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<IAromaSource>>
			translation={{
				namespace: AromaApiLink,
			}}
			{...props}
		/>
	</AromaProvider>;
};

export interface IAromaSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<IAromaSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<IAromaSource>>;
	providerProps?: Partial<IAromaProviderProps>;
}

export const AromaSourceSelect: FC<IAromaSourceSelectProps> = ({providerProps, ...props}) => {
	return <AromaProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<IAromaSource>> {...props}/>
	</AromaProvider>;
};

export interface IAromaSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<IAromaSource>>> {
}

export const AromaSelectionProvider: FC<IAromaSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<IAromaSource>> {...props}/>;
};

export const useAromaCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaCountApiLink]);
};

export const useAromaQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([AromaApiLink]),
		withCount && queryClient.invalidateQueries([AromaCountApiLink]),
	]);
};

export const useAromaOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<IAromaSource>>();
export const useAromaSelectionContext         = () => useSelectionContext<SourceInfer.Item<IAromaSource>>();

export interface IAromaDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<IAromaSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const AromaDrawerItem: FC<IAromaDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<IAromaSource>>
			sourceProviderProps={{
				name:          "Aroma",
				useQuery:      useAromaQuery,
				useCountQuery: useAromaCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					AromaPromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: AromaApiLink,
					text:      "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>;
};
