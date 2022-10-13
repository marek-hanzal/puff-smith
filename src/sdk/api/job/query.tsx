/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobSource}     from "@/puff-smith/service/job/interface";
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

export const JobApiLink      = "/api/job/query";
export const JobCountApiLink = "/api/job/query/count";

export type IJobQueryParams = any;

export const useJobQuery      = createQueryHook<SourceInfer.Query<IJobSource>, SourceInfer.Item<IJobSource>[], IJobQueryParams>(JobApiLink, "post");
export const useJobCountQuery = createQueryHook<SourceInfer.Query<IJobSource>, number, IJobQueryParams>(JobCountApiLink, "post");

export const useJobSource = () => useSourceContext<SourceInfer.Item<IJobSource>>();

export interface IJobSourceContext extends ISourceContext<SourceInfer.Item<IJobSource>> {
}

export interface IJobSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<IJobSource>>> {
}

export const JobSourceConsumer: FC<IJobSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IJobProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<IJobSource>>> {
}

export const JobProvider: FC<IJobProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<IJobSource>>
		name={"Job"}
		useQuery={useJobQuery}
		useCountQuery={useJobCountQuery}
		{...props}
	/>;
};

export const toJobLink  = (queryParams?: IJobQueryParams) => toLink(JobApiLink, queryParams);
export const useJobLink = () => toJobLink;

export const useJobPromise = createPromiseHook<SourceInfer.Query<IJobSource>, SourceInfer.Item<IJobSource>[], IJobQueryParams>(JobApiLink, "post");
export const JobPromise    = createPromise<SourceInfer.Query<IJobSource>, SourceInfer.Item<IJobSource>[], IJobQueryParams>(JobApiLink, "post");

export interface IJobFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<IJobSource>>>> {
}

export const JobFilterProvider: FC<IJobFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<IJobSource>>> name={"Job"} {...props}/>;

export const useJobOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<IJobSource>>>();
export const useJobFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<IJobSource>>>();

export interface IJobProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<IJobSource>>> {
}

export const JobProviderFilter: FC<IJobProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Job"}
/>;

export interface IJobOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<IJobSource>>>> {
}

export const JobOrderByProvider: FC<IJobOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<IJobSource>>> name={"Job"} {...props}/>;

export const useJobOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IJobSource>>>();
export const useJobOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IJobSource>>>();

export interface IJobProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<IJobSource>>, QueryInfer.OrderBy<SourceInfer.Query<IJobSource>>, IJobQueryParams>> {
}

export const JobProviderControl: FC<IJobProviderControlProps> = props => <SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<IJobSource>>, QueryInfer.OrderBy<SourceInfer.Query<IJobSource>>> name={"Job"} {...props}/>;

export interface IJobTableSourceProps extends Partial<ITableProps<SourceInfer.Item<IJobSource>>> {
	providerProps?: Partial<IJobProviderProps>;
}

export const JobTableSource: FC<IJobTableSourceProps> = ({providerProps, ...props}) => {
	return <JobProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<IJobSource>>
			translation={JobApiLink}
			{...props}
		/>
	</JobProvider>;
};

export interface IJobListSourceProps extends Partial<IListProps<SourceInfer.Item<IJobSource>>> {
	providerProps?: Partial<IJobProviderProps>;
}

export const JobListSource: FC<IJobListSourceProps> = ({providerProps, ...props}) => {
	return <JobProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<IJobSource>>
			{...props}
		/>
	</JobProvider>;
};

export interface IJobInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<IJobSource>>> {
	providerProps?: Partial<IJobProviderProps>;
}

export const JobInfiniteListSource: FC<IJobInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <JobProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<IJobSource>>
			translation={{
				namespace: JobApiLink,
			}}
			{...props}
		/>
	</JobProvider>;
};

export interface IJobSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<IJobSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<IJobSource>>;
	providerProps?: Partial<IJobProviderProps>;
}

export const JobSourceSelect: FC<IJobSourceSelectProps> = ({providerProps, ...props}) => {
	return <JobProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<IJobSource>> {...props}/>
	</JobProvider>;
};

export interface IJobSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<IJobSource>>> {
}

export const JobSelectionProvider: FC<IJobSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<IJobSource>> {...props}/>;
};

export const useJobCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([JobCountApiLink]);
};

export const useJobQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([JobApiLink]),
		withCount && queryClient.invalidateQueries([JobCountApiLink]),
	]);
};

export const useJobOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<IJobSource>>();
export const useJobSelectionContext         = () => useSelectionContext<SourceInfer.Item<IJobSource>>();

export interface IJobDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<IJobSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const JobDrawerItem: FC<IJobDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<IJobSource>>
			sourceProviderProps={{
				name:          "Job",
				useQuery:      useJobQuery,
				useCountQuery: useJobCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					JobPromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: JobApiLink,
					text:      "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>;
};
