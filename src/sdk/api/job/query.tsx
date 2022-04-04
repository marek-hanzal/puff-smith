/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJob, IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {IJobQuery} from "@/puff-smith/service/job";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
import {
	createPromiseHook,
	createQueryHook,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IListProps,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	useFilterContext,
	useLinkContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOrderByContext,
	useSourceContext
} from "@leight-core/client";

export const JobsApiLink = "/api/job/query";

export type IJobsQueryParams = undefined;

export const useJobsQuery = createQueryHook<IJobQuery, IQueryResult<IJob>, IJobsQueryParams>(JobsApiLink, "post");

export const useJobsSource = () => useSourceContext<IJob>()

export interface IJobsSourceContext extends ISourceContext<IJob> {
}

export interface IJobsSourceConsumerProps extends ConsumerProps<ISourceContext<IJob>> {
}

export const JobsSourceConsumer: FC<IJobsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IJobsSourceProps extends Partial<ISourceProviderProps<IJob>> {
}

export const JobsSource: FC<IJobsSourceProps> = props => {
	return <SourceProvider<IJob>
		name={"Jobs"}
		useQuery={useJobsQuery}
		{...props}
	/>;
}

export const useJobsLink = (): ((queryParams?: IJobsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(JobsApiLink, queryParams);
}

export const useJobsPromise = createPromiseHook<IJobQuery, IJob, IJobsQueryParams>(JobsApiLink, "post");

export interface IJobsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IJobQuery>>> {
}

export const JobsFilterProvider: FC<IJobsFilterProviderProps> = props => <FilterProvider<IQueryFilter<IJobQuery>> name={"Jobs"} {...props}/>;

export const useJobsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IJobQuery>>()
export const useJobsFilterContext = () => useFilterContext<IQueryFilter<IJobQuery>>()

export interface IJobsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IJobQuery>> {
}

export const JobsSourceFilter: FC<IJobsSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Jobs'}
/>;

export interface IJobsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IJobQuery>>> {
}

export const JobsOrderByProvider: FC<IJobsOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IJobQuery>> name={"Jobs"} {...props}/>;

export const useJobsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IJobQuery>>()
export const useJobsOrderByContext = () => useOrderByContext<IQueryFilter<IJobQuery>>()

export interface IJobsListSourceProps extends Partial<IListProps<IJob>> {
	sourceProps?: Partial<IJobsSourceProps>;
}

export interface IJobsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IJobQuery>, IQueryOrderBy<IJobQuery>, IJobsQueryParams>> {
}

export const JobsSourceControlProvider: FC<IJobsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IJobQuery>, IQueryOrderBy<IJobQuery>> name={"Jobs"} {...props}/>;

export const JobsListSource: FC<IJobsListSourceProps> = ({sourceProps, ...props}) => {
	return <JobsSource
		{...sourceProps}
	>
		<List<IJob>
			{...props}
		/>
	</JobsSource>
}

export interface IJobsSourceSelectProps extends IQuerySourceSelectProps<IJob> {
	toOption: IToOptionMapper<IJob>;
	sourceProps?: IJobsSourceProps;
}

export const JobsSourceSelect: FC<IJobsSourceSelectProps> = ({sourceProps, ...props}) => {
	return <JobsSource {...sourceProps}>
		<QuerySourceSelect<IJob> {...props}/>
	</JobsSource>;
};

export const useJobsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([JobsApiLink]);
}
