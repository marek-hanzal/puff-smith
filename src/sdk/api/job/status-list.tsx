/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobStatusSource} from "@/puff-smith/service/job/status/interface";
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
}                         from "@leight-core/viv";
import {useQueryClient}   from "@tanstack/react-query";
import {
	ConsumerProps,
	FC
}                         from "react";

export const StatusListApiLink      = "/api/job/status-list";
export const StatusListCountApiLink = "/api/job/status-list/count";

export type IStatusListQueryParams = any;

export const useStatusListQuery      = createQueryHook<SourceInfer.Query<IJobStatusSource>, SourceInfer.Item<IJobStatusSource>[], IStatusListQueryParams>(StatusListApiLink, "post");
export const useStatusListCountQuery = createQueryHook<SourceInfer.Query<IJobStatusSource>, number, IStatusListQueryParams>(StatusListCountApiLink, "post");

export const useStatusListSource = () => useSourceContext<SourceInfer.Item<IJobStatusSource>>();

export interface IStatusListSourceContext extends ISourceContext<SourceInfer.Item<IJobStatusSource>> {
}

export interface IStatusListSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<IJobStatusSource>>> {
}

export const StatusListSourceConsumer: FC<IStatusListSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IStatusListProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<IJobStatusSource>>> {
}

export const StatusListProvider: FC<IStatusListProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<IJobStatusSource>>
		name={"StatusList"}
		useQuery={useStatusListQuery}
		useCountQuery={useStatusListCountQuery}
		{...props}
	/>;
};

export const toStatusListLink  = (queryParams?: IStatusListQueryParams) => toLink(StatusListApiLink, queryParams);
export const useStatusListLink = () => toStatusListLink;

export const useStatusListPromise = createPromiseHook<SourceInfer.Query<IJobStatusSource>, SourceInfer.Item<IJobStatusSource>[], IStatusListQueryParams>(StatusListApiLink, "post");
export const StatusListPromise    = createPromise<SourceInfer.Query<IJobStatusSource>, SourceInfer.Item<IJobStatusSource>[], IStatusListQueryParams>(StatusListApiLink, "post");

export interface IStatusListFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<IJobStatusSource>>>> {
}

export const StatusListFilterProvider: FC<IStatusListFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<IJobStatusSource>>> name={"StatusList"} {...props}/>;

export const useStatusListOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<IJobStatusSource>>>();
export const useStatusListFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<IJobStatusSource>>>();

export interface IStatusListProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<IJobStatusSource>>> {
}

export const StatusListProviderFilter: FC<IStatusListProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.StatusList"}
/>;

export interface IStatusListOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<IJobStatusSource>>>> {
}

export const StatusListOrderByProvider: FC<IStatusListOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<IJobStatusSource>>> name={"StatusList"} {...props}/>;

export const useStatusListOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IJobStatusSource>>>();
export const useStatusListOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IJobStatusSource>>>();

export interface IStatusListProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<IJobStatusSource>>, QueryInfer.OrderBy<SourceInfer.Query<IJobStatusSource>>, IStatusListQueryParams>> {
}

export const StatusListProviderControl: FC<IStatusListProviderControlProps> = props =>
	<SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<IJobStatusSource>>, QueryInfer.OrderBy<SourceInfer.Query<IJobStatusSource>>> name={"StatusList"} {...props}/>;

export interface IStatusListTableSourceProps extends Partial<ITableProps<SourceInfer.Item<IJobStatusSource>>> {
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListTableSource: FC<IStatusListTableSourceProps> = ({providerProps, ...props}) => {
	return <StatusListProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<IJobStatusSource>>
			translation={StatusListApiLink}
			{...props}
		/>
	</StatusListProvider>;
};

export interface IStatusListListSourceProps extends Partial<IListProps<SourceInfer.Item<IJobStatusSource>>> {
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListListSource: FC<IStatusListListSourceProps> = ({providerProps, ...props}) => {
	return <StatusListProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<IJobStatusSource>>
			{...props}
		/>
	</StatusListProvider>;
};

export interface IStatusListInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<IJobStatusSource>>> {
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListInfiniteListSource: FC<IStatusListInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <StatusListProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<IJobStatusSource>>
			translation={{
				namespace: StatusListApiLink,
			}}
			{...props}
		/>
	</StatusListProvider>;
};

export interface IStatusListSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<IJobStatusSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<IJobStatusSource>>;
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListSourceSelect: FC<IStatusListSourceSelectProps> = ({providerProps, ...props}) => {
	return <StatusListProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<IJobStatusSource>> {...props}/>
	</StatusListProvider>;
};

export interface IStatusListSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<IJobStatusSource>>> {
}

export const StatusListSelectionProvider: FC<IStatusListSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<IJobStatusSource>> {...props}/>;
};

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

export const useStatusListOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<IJobStatusSource>>();
export const useStatusListSelectionContext         = () => useSelectionContext<SourceInfer.Item<IJobStatusSource>>();

export interface IStatusListDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<IJobStatusSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const StatusListDrawerItem: FC<IStatusListDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<IJobStatusSource>>
			sourceProviderProps={{
				name:          "StatusList",
				useQuery:      useStatusListQuery,
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
					text:      "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>;
};
