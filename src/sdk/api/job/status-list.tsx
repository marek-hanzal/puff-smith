/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobStatusSource} from "@/puff-smith/service/job/status/interface";
import {
	IQueryFilter,
	IQueryOrderBy,
	ISourceContext,
	ISourceItem,
	ISourceQuery,
	IToOptionMapper
}                         from "@leight-core/api";
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
}                         from "@leight-core/client";
import {useQueryClient}   from "@tanstack/react-query";
import {
	ConsumerProps,
	FC
}                         from "react";

export const StatusListApiLink      = "/api/job/status-list";
export const StatusListCountApiLink = "/api/job/status-list/count";

export type IStatusListQueryParams = any;

export const useStatusListQuery      = createQueryHook<ISourceQuery<IJobStatusSource>, ISourceItem<IJobStatusSource>[], IStatusListQueryParams>(StatusListApiLink, "post");
export const useStatusListCountQuery = createQueryHook<ISourceQuery<IJobStatusSource>, number, IStatusListQueryParams>(StatusListCountApiLink, "post");

export const useStatusListSource = () => useSourceContext<ISourceItem<IJobStatusSource>>();

export interface IStatusListSourceContext extends ISourceContext<ISourceItem<IJobStatusSource>> {
}

export interface IStatusListSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IJobStatusSource>>> {
}

export const StatusListSourceConsumer: FC<IStatusListSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IStatusListProviderProps extends Partial<ISourceProviderProps<ISourceItem<IJobStatusSource>>> {
}

export const StatusListProvider: FC<IStatusListProviderProps> = props => {
	return <SourceProvider<ISourceItem<IJobStatusSource>>
		name={"StatusList"}
		useQuery={useStatusListQuery}
		useCountQuery={useStatusListCountQuery}
		{...props}
	/>;
};

export const toStatusListLink  = (queryParams?: IStatusListQueryParams) => toLink(StatusListApiLink, queryParams);
export const useStatusListLink = () => toStatusListLink;

export const useStatusListPromise = createPromiseHook<ISourceQuery<IJobStatusSource>, ISourceItem<IJobStatusSource>[], IStatusListQueryParams>(StatusListApiLink, "post");
export const StatusListPromise    = createPromise<ISourceQuery<IJobStatusSource>, ISourceItem<IJobStatusSource>[], IStatusListQueryParams>(StatusListApiLink, "post");

export interface IStatusListFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IJobStatusSource>>>> {
}

export const StatusListFilterProvider: FC<IStatusListFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IJobStatusSource>>> name={"StatusList"} {...props}/>;

export const useStatusListOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IJobStatusSource>>>();
export const useStatusListFilterContext         = () => useFilterContext<IQueryFilter<ISourceQuery<IJobStatusSource>>>();

export interface IStatusListProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IJobStatusSource>>> {
}

export const StatusListProviderFilter: FC<IStatusListProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.StatusList"}
/>;

export interface IStatusListOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IJobStatusSource>>>> {
}

export const StatusListOrderByProvider: FC<IStatusListOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IJobStatusSource>>> name={"StatusList"} {...props}/>;

export const useStatusListOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IJobStatusSource>>>();
export const useStatusListOrderByContext         = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IJobStatusSource>>>();

export interface IStatusListProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IJobStatusSource>>, IQueryOrderBy<ISourceQuery<IJobStatusSource>>, IStatusListQueryParams>> {
}

export const StatusListProviderControl: FC<IStatusListProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IJobStatusSource>>, IQueryOrderBy<ISourceQuery<IJobStatusSource>>> name={"StatusList"} {...props}/>;

export interface IStatusListTableSourceProps extends Partial<ITableProps<ISourceItem<IJobStatusSource>>> {
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListTableSource: FC<IStatusListTableSourceProps> = ({providerProps, ...props}) => {
	return <StatusListProvider
		withCount
		{...providerProps}
	>
		<Table<ISourceItem<IJobStatusSource>>
			translation={StatusListApiLink}
			{...props}
		/>
	</StatusListProvider>;
}

export interface IStatusListListSourceProps extends Partial<IListProps<ISourceItem<IJobStatusSource>>> {
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListListSource: FC<IStatusListListSourceProps> = ({providerProps, ...props}) => {
	return <StatusListProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IJobStatusSource>>
			{...props}
		/>
	</StatusListProvider>;
}

export interface IStatusListInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IJobStatusSource>>> {
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListInfiniteListSource: FC<IStatusListInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <StatusListProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IJobStatusSource>>
			translation={{
				namespace: StatusListApiLink,
			}}
			{...props}
		/>
	</StatusListProvider>;
}

export interface IStatusListSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IJobStatusSource>> {
	toOption: IToOptionMapper<ISourceItem<IJobStatusSource>>;
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListSourceSelect: FC<IStatusListSourceSelectProps> = ({providerProps, ...props}) => {
	return <StatusListProvider {...providerProps}>
		<QuerySourceSelect<ISourceItem<IJobStatusSource>> {...props}/>
	</StatusListProvider>;
};

export interface IStatusListSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IJobStatusSource>>> {
}

export const StatusListSelectionProvider: FC<IStatusListSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IJobStatusSource>> {...props}/>
}

export const useStatusListCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([StatusListCountApiLink]);
};

export const useStatusListQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([StatusListApiLink]),
		withCount && queryClient.invalidateQueries([StatusListCountApiLink]),
	]);
};

export const useStatusListOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IJobStatusSource>>();
export const useStatusListSelectionContext = () => useSelectionContext<ISourceItem<IJobStatusSource>>();

export interface IStatusListDrawerItemProps extends Omit<IDrawerSelectItemProps<ISourceItem<IJobStatusSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const StatusListDrawerItem: FC<IStatusListDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<ISourceItem<IJobStatusSource>>
			sourceProviderProps={{
				name: "StatusList",
				useQuery: useStatusListQuery,
				useCountQuery: useStatusListCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					StatusListPromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: StatusListApiLink,
					text: "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>
}
