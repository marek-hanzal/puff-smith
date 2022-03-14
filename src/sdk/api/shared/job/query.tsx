import {IJob, IQueryResult, ISourceContext} from "@leight-core/api";
import {IJobFilter, IJobOrderBy, IJobQuery} from "@/puff-smith/service/job";
import {ConsumerProps, FC} from "react";
import {
	createPromiseHook,
	createQueryHook,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IListProps,
	IOrderByProviderProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
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

export const JobsApiLink = "/api/shared/job/query";

export type IJobsQueryParams = void;

export const useJobsQuery = createQueryHook<IJobQuery, IQueryResult<IJob>, IJobsQueryParams>(JobsApiLink, "post");

export const useJobsSource = () => useSourceContext<IJob>()

export interface IJobsSourceContext extends ISourceContext<IJob> {
}

export interface IJobsSourceProps extends Partial<ISourceProviderProps<IJob>> {
}

export interface IJobsSourceConsumerProps extends ConsumerProps<ISourceContext<IJob>> {
}

export const JobsSourceConsumer: FC<IJobsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export const JobsSource: FC<IJobsSourceProps> = props => {
	return <SourceProvider<IJob>
		useQuery={useJobsQuery}
		{...props}
	/>;
}

export const useJobsLink = (): ((query: IJobsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(JobsApiLink, query);
}

export const useJobsPromise = createPromiseHook<IJobQuery, IJob, IJobsQueryParams>(JobsApiLink, "post");

export interface IJobsFilterProviderProps extends Partial<IFilterProviderProps<IJobFilter>> {
}

export const JobsFilterProvider: FC<IJobsFilterProviderProps> = props => {
	return <FilterProvider<IJobFilter> {...props}/>
}

export const useJobsOptionalFilterContext = () => useOptionalFilterContext<IJobFilter>()
export const useJobsFilterContext = () => useFilterContext<IJobFilter>()

export interface IJobsFilterProps extends IFilterWithoutTranslationProps<IJobFilter> {
}

export const JobsFilter: FC<IJobsFilterProps> = props => {
	return <Filter
		{...props}
		translation={'common.filter.Jobs'}
	/>
}

export interface IJobsOrderByProviderProps extends Partial<IOrderByProviderProps<IJobFilter>> {
}

export const JobsOrderByProvider: FC<IJobsOrderByProviderProps> = props => {
	return <OrderByProvider<IJobFilter> {...props}/>
}

export const useJobsOptionalOrderByContext = () => useOptionalOrderByContext<IJobFilter>()
export const useJobsOrderByContext = () => useOrderByContext<IJobFilter>()

export interface IJobsListSourceProps extends Partial<IListProps<IJob>> {
	sourceProps?: Partial<IJobsSourceProps>;
}

export interface IJobsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IJobFilter, IJobOrderBy, IJobsQueryParams>> {
}

export const JobsSourceControlProvider: FC<IJobsSourceControlProviderProps> = props => {
	return <SourceControlProvider<IJobFilter, IJobOrderBy> {...props}/>
}

export const JobsListSource: FC<IJobsListSourceProps> = ({sourceProps, ...props}) => {
	return <JobsSource
		{...sourceProps}
	>
		<List<IJob>
			{...props}
		/>
	</JobsSource>
}
